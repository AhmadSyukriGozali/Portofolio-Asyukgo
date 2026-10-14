import Link from "next/link";
import { certificates } from "@/data/certificates";
import CertificatesGallery from "@/components/CertificatesGallery";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-bg text-title">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-first/10 blur-[140px]" />

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pb-20">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition duration-300 hover:text-first"
          >
            <span>←</span>
            Kembali ke Beranda
          </Link>

          {/* Heading */}
          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-first">
              Sertifikat
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-title sm:text-5xl md:text-6xl">
              Perjalanan Belajar Saya.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-copy sm:text-lg">
              Kumpulan sertifikat yang saya peroleh selama proses
              belajar, mengikuti pelatihan, dan mengembangkan
              kemampuan di bidang teknologi.
            </p>
          </div>

          {/* Certificate count */}
          <div className="mt-8">
            <span className="inline-flex rounded-full border border-white/10 bg-card px-4 py-2 text-sm text-copy">
              {certificates.length} Sertifikat
            </span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <CertificatesGallery />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Ahmad Syukri Gozali. Hak cipta dilindungi.
        </div>
      </footer>
    </main>
  );
}