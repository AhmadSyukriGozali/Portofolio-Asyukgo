"use client";

import { useEffect } from "react";
import type { Certificate } from "@/data/certificates";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  // Tutup modal dengan tombol Escape
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Mencegah halaman utama ikut scroll ketika modal terbuka
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  // Jangan render apa pun jika belum ada sertifikat yang dipilih
  if (!certificate) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Sertifikat ${certificate.title}`}
      onMouseDown={(event) => {
        // Klik area gelap di luar modal untuk menutup
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-bg shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-bg/95 px-5 py-4 backdrop-blur-xl sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-first">
              Sertifikat
            </p>

            <h2 className="mt-1 truncate text-sm font-semibold text-title sm:text-base">
              {certificate.title}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {/* Open PDF */}
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-copy transition duration-300 hover:border-first/40 hover:text-first sm:inline-flex"
            >
              Buka PDF ↗
            </a>

            {/* Download */}
            <a
              href={certificate.file}
              download
              className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-copy transition duration-300 hover:border-first/40 hover:text-first sm:inline-flex"
            >
              Unduh
            </a>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-lg text-copy transition duration-300 hover:border-red-400/30 hover:bg-red-400/5 hover:text-red-400"
              aria-label="Tutup modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="min-h-0 flex-1 bg-card">
          <iframe
            src={`${certificate.file}#toolbar=1&navpanes=0`}
            title={`PDF ${certificate.title}`}
            className="h-full w-full border-0 bg-white"
          />
        </div>

        {/* Mobile actions */}
        <div className="flex shrink-0 gap-2 border-t border-white/10 bg-bg p-3 sm:hidden">
          <a
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-copy transition hover:border-first/40 hover:text-first"
          >
            Buka PDF ↗
          </a>

          <a
            href={certificate.file}
            download
            className="flex flex-1 items-center justify-center rounded-xl bg-first-alt-2 px-4 py-2.5 text-sm font-semibold text-title transition hover:bg-first-light"
          >
            Unduh
          </a>
        </div>
      </div>
    </div>
  );
}