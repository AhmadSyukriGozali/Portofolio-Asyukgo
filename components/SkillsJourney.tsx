"use client";

import { useEffect, useRef } from "react";
import type { SkillGroup } from "@/data/skills";

// Jarak antar lapisan di sumbu Z (px). Perspektif kamera diset di `style` bawah.
const LAYER_GAP = 1100;
const PERSPECTIVE = 1100;

// Tinggi scroll per lapisan, dalam persen tinggi layar.
const SCROLL_PER_LAYER = 120;

// Di antara dua lapisan, kamera hanya bergerak pada rentang ini (0 sampai 1).
// Di luar rentang itu kamera diam di lapisan, sehingga tampilannya tajam.
const TRANSIT_START = 0.35;
const TRANSIT_END = 0.65;

// Jeda setelah scroll berhenti sebelum kamera meluncur sendiri ke lapisan
// terdekat, dan lama luncurannya (ms). Dibuat lambat supaya blur terasa
// menghilang perlahan, bukan langsung muncul.
const SETTLE_DELAY = 160;
const SETTLE_DURATION = 1100;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (x: number) => x * x * (3 - 2 * x);

const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

// Menahan kamera sebentar di setiap lapisan supaya teks sempat dibaca,
// lalu bergerak halus ke lapisan berikutnya.
function dwell(position: number) {
  const base = Math.floor(position);
  const fraction = position - base;
  return (
    base +
    smoothstep(clamp((fraction - TRANSIT_START) / (TRANSIT_END - TRANSIT_START)))
  );
}

type SkillsJourneyProps = {
  groups: SkillGroup[];
};

export default function SkillsJourney({ groups }: SkillsJourneyProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRefs = useRef<(HTMLLIElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);

  const count = groups.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const render = () => {
      frame = 0;

      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0 ? clamp(-rect.top / scrollable) : 0;

      // Posisi kamera: 0 = lapisan pertama, count - 1 = lapisan terakhir.
      const camera = dwell(progress * (count - 1));

      layerRefs.current.forEach((layer, index) => {
        if (!layer) return;

        // > 0: lapisan masih di depan kamera. < 0: sudah dilewati.
        const distance = index - camera;

        let opacity: number;
        let blur: number;

        if (distance >= 0) {
          opacity = clamp(1 - distance * 0.85);
          blur = Math.min(8, distance * 6);
        } else {
          opacity = clamp(1 + distance * 1.6);
          blur = Math.min(5, -distance * 8);
        }

        // Tanpa preserve-3d, urutan tumpukan mengikuti z-index, bukan kedalaman.
        // Lapisan yang lebih dekat ke kamera harus menutupi yang lebih jauh.
        layer.style.zIndex = String(Math.round(500 - distance * 100));
        layer.style.transform = `translate3d(0, 0, ${(-distance * LAYER_GAP).toFixed(1)}px)`;
        layer.style.opacity = opacity.toFixed(3);
        layer.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : "none";
        layer.style.visibility = opacity < 0.01 ? "hidden" : "visible";
      });

      const active = Math.round(camera);
      railRefs.current.forEach((item, index) => {
        if (!item) return;
        item.dataset.active = String(index === active);
        item.dataset.passed = String(index < active);
      });

      if (hintRef.current) {
        hintRef.current.style.opacity = String(clamp(1 - progress * 10));
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    // --- Meluncur otomatis ke lapisan terdekat ---------------------------
    let settleTimer = 0;
    let settleFrame = 0;
    let settling = false;

    const cancelSettle = () => {
      window.clearTimeout(settleTimer);
      if (settleFrame) cancelAnimationFrame(settleFrame);
      settleFrame = 0;
      settling = false;
    };

    const settle = () => {
      if (count < 2) return;

      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      // Hanya saat layar sedang menempel di area perjalanan.
      if (rect.top > 0 || rect.bottom < window.innerHeight) return;

      const offset = -rect.top;
      const position = clamp(offset / scrollable) * (count - 1);
      const fraction = position - Math.floor(position);

      // Sudah di zona tahan: tampilannya tajam, tidak perlu digeser.
      if (fraction <= TRANSIT_START || fraction >= TRANSIT_END) return;

      const target = Math.round(position);
      const distance = (target / (count - 1)) * scrollable - offset;
      const from = window.scrollY;
      const startTime = performance.now();

      settling = true;

      const step = (now: number) => {
        const progress = clamp((now - startTime) / SETTLE_DURATION);

        // "instant" supaya `scroll-behavior: smooth` di CSS tidak ikut
        // menimpa gerakan per frame ini.
        window.scrollTo({
          top: from + distance * easeInOutCubic(progress),
          behavior: "instant",
        });

        if (progress < 1) {
          settleFrame = requestAnimationFrame(step);
        } else {
          settleFrame = 0;
          settling = false;
        }
      };

      settleFrame = requestAnimationFrame(step);
    };

    const onScroll = () => {
      schedule();

      // Tunggu scroll benar-benar berhenti, termasuk momentum di layar sentuh.
      // Scroll yang kita buat sendiri saat meluncur diabaikan.
      if (!settling) {
        window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(settle, SETTLE_DELAY);
      }
    };

    // Begitu pengguna menggulir lagi, luncuran otomatis langsung dibatalkan.
    const interruptEvents = ["wheel", "touchstart", "pointerdown", "keydown"];

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    interruptEvents.forEach((name) =>
      window.addEventListener(name, cancelSettle, { passive: true }),
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      interruptEvents.forEach((name) =>
        window.removeEventListener(name, cancelSettle),
      );
      cancelSettle();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <div
      ref={trackRef}
      className="relative motion-reduce:hidden"
      style={{
        height: `${(count - 1) * SCROLL_PER_LAYER + 100}dvh`,
      }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* Kabut: pusat lebih terang, tepi menghilang ke gelap */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 46%, rgba(67, 56, 202, 0.22), transparent 70%)",
          }}
        />

        {/* Garis perspektif menuju titik hilang */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[
            [0, 0],
            [100, 0],
            [0, 100],
            [100, 100],
          ].map(([x, y]) => (
            <line
              key={`${x}-${y}`}
              x1={x}
              y1={y}
              x2={50}
              y2={46}
              stroke="rgba(224, 242, 254, 0.07)"
              strokeWidth={0.12}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Kamera */}
        <div
          className="absolute inset-0"
          style={{
            perspective: `${PERSPECTIVE}px`,
            perspectiveOrigin: "50% 46%",
          }}
        >
          {groups.map((group, index) => (
            <div
              key={group.title}
              ref={(node) => {
                layerRefs.current[index] = node;
              }}
              className="absolute inset-0 flex items-center justify-center px-11 sm:px-6"
              style={{
                willChange: "transform, opacity, filter",
                // Sebelum JavaScript aktif, hanya lapisan pertama yang terlihat.
                opacity: index === 0 ? 1 : 0,
                visibility: index === 0 ? "visible" : "hidden",
              }}
            >
              <div className="relative w-full max-w-3xl">
                {/* Gerbang yang dilewati kamera */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-5 rounded-[2.25rem] border border-white/15 sm:-inset-9"
                >
                  <span className="absolute -left-px -top-px h-5 w-5 rounded-tl-[2.25rem] border-l-2 border-t-2 border-cyan-300/70" />
                  <span className="absolute -right-px -top-px h-5 w-5 rounded-tr-[2.25rem] border-r-2 border-t-2 border-cyan-300/70" />
                  <span className="absolute -bottom-px -left-px h-5 w-5 rounded-bl-[2.25rem] border-b-2 border-l-2 border-cyan-300/70" />
                  <span className="absolute -bottom-px -right-px h-5 w-5 rounded-br-[2.25rem] border-b-2 border-r-2 border-cyan-300/70" />
                </div>

                <article className="relative rounded-[2rem] border border-white/10 bg-[#050a1a] p-7 shadow-2xl shadow-black/50 sm:p-12">
                  <p className="text-sm text-slate-400">
                    Lapisan {index + 1} dari {count}: {group.layer}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
                    {group.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                    {group.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Penunjuk kedalaman */}
        <ol
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4 sm:right-8"
        >
          {groups.map((group, index) => (
            <li
              key={group.title}
              ref={(node) => {
                railRefs.current[index] = node;
              }}
              data-active={index === 0 ? "true" : "false"}
              data-passed="false"
              className="group flex items-center justify-end gap-3 text-xs text-slate-600 transition-colors duration-300 data-[active=true]:text-white data-[passed=true]:text-slate-500"
            >
              <span className="hidden sm:block">{group.layer}</span>
              <span className="h-2 w-2 rounded-full border border-current transition-all duration-300 group-data-[active=true]:scale-125 group-data-[active=true]:border-cyan-300 group-data-[active=true]:bg-cyan-300 group-data-[passed=true]:bg-slate-500" />
            </li>
          ))}
        </ol>

        {/* Petunjuk di awal perjalanan */}
        <div
          ref={hintRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm text-slate-500"
        >
          Gulir untuk menembus lapisannya
        </div>
      </div>
    </div>
  );
}