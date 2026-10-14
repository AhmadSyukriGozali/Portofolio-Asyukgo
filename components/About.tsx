import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-y-12 overflow-y-clip">
        <h2 className="section-title mb-0">
          Belajar dengan <span>Membangun</span>
        </h2>

        <div className="grid items-center gap-y-12 desk:grid-cols-2 desk:gap-x-16">
          <Reveal origin="left">
            <p className="fs-h2 mb-8 leading-relaxed">
              Saya <b className="font-semibold text-first">Ahmad Syukri Gozali</b>
              , mahasiswa{" "}
              <b className="font-semibold text-first">Teknik Informatika</b> di
              Universitas Bina Sarana Informatika yang tertarik pada{" "}
              <b className="font-semibold text-first">
                pengembangan perangkat lunak
              </b>
              . Saya senang mempelajari teknologi baru, memecahkan masalah logika,
              dan membangun beberapa proyek praktis dari awal. Saya siap untuk
              terus berkembang dan berkontribusi dalam tim yang dinamis.
            </p>

            <a
              href="/resume/CV-Ahmad-Syukri-Gozali.pdf"
              download="CV-Ahmad-Syukri-Gozali.pdf"
              className="btn flex w-fit items-center gap-x-2"
            >
              Download RESUME
            </a>
          </Reveal>

          <Reveal origin="right" className="relative justify-self-center">
            <div className="blob-animate left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2" />

            <Image
              src="/images/profile/Foto_Transparan.png"
              alt="Ahmad Syukri Gozali"
              width={600}
              height={800}
              sizes="220px"
              className="w-[220px]"
            />

            <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,hsl(240_100%_2%/0)_60%,var(--color-bg)_95%)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
