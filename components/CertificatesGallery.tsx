"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import type { Certificate } from "@/data/certificates";

export default function CertificatesGallery() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-first/10 blur-[140px]" />

        <div className="mx-auto max-w-6xl px-6">
          {/* Gallery heading */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">
                Koleksi
              </p>

              <h2 className="mt-2 text-2xl font-bold text-title sm:text-3xl">
                Semua Sertifikat
              </h2>
            </div>

            <p className="text-sm text-muted">
              Klik sertifikat untuk melihat pratinjau
            </p>
          </div>

          {/* Certificates grid */}
          {certificates.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  onClick={() => setSelectedCertificate(certificate)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-card px-6 py-20 text-center">
              <p className="text-muted">
                Belum ada sertifikat.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PDF Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
