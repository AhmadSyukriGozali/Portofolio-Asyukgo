"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Tentang Saya", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Perjalanan", href: "#journey" },
  { name: "Sertifikat", href: "#certificates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menutup mobile menu ketika ukuran layar kembali ke desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mencegah halaman utama ikut scroll ketika mobile menu terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Navbar background */}
      <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group text-xl font-bold tracking-tight text-white"
          >
            Asyukgo
            <span className="text-cyan-400 transition duration-300 group-hover:text-cyan-300">
              .
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-medium text-slate-400 transition duration-300 hover:text-white"
              >
                {link.name}

                {/* Hover indicator */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl border border-cyan-400/25 bg-cyan-400/5 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 md:block"
          >
            Hubungi Saya
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
            aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/[0.04] hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
