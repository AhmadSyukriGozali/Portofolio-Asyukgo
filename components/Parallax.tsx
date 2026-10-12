"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  /**
   * Seberapa jauh elemen bergeser mengikuti scroll.
   * Positif = bergeser turun (terasa lebih jauh), negatif = naik (terasa lebih dekat).
   */
  speed?: number;
  /** 0 = tidak memudar, 1 = hilang sepenuhnya saat satu layar di-scroll. */
  fade?: number;
  className?: string;
  children?: ReactNode;
};

export default function Parallax({
  speed = 0.1,
  fade = 0,
  className,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const viewport = window.innerHeight;
      // Efek hanya relevan selama Hero masih terlihat.
      const y = Math.min(window.scrollY, viewport * 1.5);

      element.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;

      if (fade > 0) {
        const progress = Math.min(1, y / viewport);
        element.style.opacity = String(1 - progress * fade);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed, fade]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}