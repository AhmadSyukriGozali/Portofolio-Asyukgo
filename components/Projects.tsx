
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Proyek
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Proyek yang saya bangun.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Beberapa proyek yang saya kerjakan sebagai bagian dari
            proses belajar, eksplorasi teknologi, dan pengembangan
            kemampuan pengembangan perangkat lunak.
          </p>
        </div>

        {/* Featured project */}
        <div className="group relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-cyan-400/25 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-cyan-950/20">
          {/* Project preview */}
          <div className="relative overflow-hidden border-b border-white/10 bg-slate-900 px-4 pb-4 pt-4 sm:px-8 sm:pb-8 sm:pt-8 lg:px-12 lg:pb-12 lg:pt-10">
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] transition duration-500 group-hover:bg-cyan-400/15" />

            {/* Browser frame */}
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
              {/* Browser header */}
              <div className="flex h-11 items-center gap-1.5 border-b border-white/10 bg-slate-950 px-4 sm:h-12 sm:px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-white/5 bg-white/[0.03] px-3">
                  <span className="truncate text-[9px] text-slate-400 sm:text-[10px]">
                    nusarasa-ecommerce.vercel.app
                  </span>
                </div>
              </div>

              {/* Real NusaRasa screenshot */}
              <div className="relative w-full overflow-hidden bg-white">
                <Image
                  src="/previewProjects/preview-nusarasa-ecommerce.png"
                  alt="Tampilan website e-commerce NusaRasa"
                  width={1600}
                  height={900}
                  priority
                  className="block h-auto w-full object-contain object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
                />
              </div>
            </div>

            {/* Project number */}
            <div className="absolute right-5 top-5 hidden text-sm font-semibold tracking-[0.2em] text-white/20 sm:block">
              01
            </div>
          </div>

          {/* Project information */}
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              {/* Status */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                Dalam Pengembangan
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                01 · Web
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                NusaRasa
              </h3>

              <p className="mt-2 text-lg font-medium text-cyan-400">
                Platform E-Commerce untuk UMKM
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Platform e-commerce yang saya kembangkan untuk membantu
                UMKM menghadirkan pengalaman penjualan digital yang lebih
                modern. Proyek ini mencakup katalog produk, autentikasi,
                keranjang belanja, checkout, pengelolaan pesanan, akun
                pelanggan, dan dashboard admin.
              </p>

              {/* Tech stack */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Tech stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                  "Supabase",
                  "PostgreSQL",
                  "Vercel",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[150px] lg:flex-col">
              <a
                href="https://github.com/AhmadSyukriGozali/nusarasa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                GitHub
                <span className="ml-2">↗</span>
              </a>

              <a
                href="https://nusarasa-ecommerce.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Demo Langsung
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Development note */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-sm font-semibold text-white">
              Proyek masih terus dikembangkan.
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Fitur, UI/UX, testing, dan optimasi akan terus diperbarui
              seiring proses pengembangan.
            </p>
          </div>

          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Terus Dikembangkan
          </span>
        </div>
      </div>
    </section>
  );
}