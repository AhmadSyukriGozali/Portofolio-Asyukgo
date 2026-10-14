const whatsappNumber = "6285184561718";

const whatsappMessage =
  "Halo Ahmad, saya melihat portofolio kamu dan tertarik untuk berdiskusi lebih lanjut. Boleh kita ngobrol?";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center shadow-2xl shadow-cyan-950/10 sm:px-10 sm:py-20">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

          <div className="relative">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Mari Terhubung
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Mari membangun sesuatu
              <span className="text-cyan-400"> yang bermakna.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Jika ingin berdiskusi mengenai proyek, teknologi,
              kolaborasi, atau peluang lainnya, saya terbuka untuk
              terhubung dan berdiskusi.
            </p>

            {/* Contact actions */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kirim pesan WhatsApp kepada Ahmad"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.93 11.93 0 0 0 5.81 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.5-8.41ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.84 9.84 0 0 1-1.51-5.24c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Kirim Pesan via WhatsApp
                <span className="ml-2">↗</span>
              </a>

              {/* Email */}
              <a
                href="mailto:ahmaddoang0809@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                Kirim Email
                <span className="ml-2">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AhmadSyukriGozali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                GitHub
                <span className="ml-2">↗</span>
              </a>
            </div>

            {/* Contact information */}
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-5 border-t border-white/10 pt-8 text-sm sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-400">
                  @
                </span>
                <span>ahmaddoang0809@gmail.com</span>
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-400">
                  📍
                </span>
                <span>Indonesia</span>
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-400">
                  GH
                </span>
                <span>AhmadSyukriGozali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}