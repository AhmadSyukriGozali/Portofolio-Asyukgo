"use client";

import type { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
  onClick: () => void;
};

export default function CertificateCard({
  certificate,
  onClick,
}: CertificateCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left"
      aria-label={`Lihat sertifikat ${certificate.title}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-first/40 hover:bg-card hover:shadow-2xl hover:shadow-first/20">
        {/* PDF Preview */}
        <div className="relative h-72 overflow-hidden border-b border-white/10 bg-card">
          <iframe
            src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
            title={`Pratinjau ${certificate.title}`}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[100%] -translate-x-1/2 -translate-y-1/2 bg-white"
          />

          {/* Preview overlay */}
          <div className="absolute inset-0 bg-bg/0 transition duration-300 group-hover:bg-bg/30" />

          {/* View badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="rounded-xl border border-white/15 bg-bg/80 px-4 py-2.5 text-sm font-semibold text-title shadow-xl backdrop-blur-xl">
              Lihat Sertifikat ↗
            </span>
          </div>

          {/* PDF label */}
          <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-bg/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-first backdrop-blur-xl">
            PDF
          </div>
        </div>

        {/* Certificate information */}
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-first">
            {certificate.issuer}
          </p>

          <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-7 text-title transition duration-300 group-hover:text-first-light">
            {certificate.title}
          </h3>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-sm text-muted">
              {certificate.date}
            </span>

            <span className="text-sm font-medium text-copy transition duration-300 group-hover:text-first">
              Lihat PDF →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
