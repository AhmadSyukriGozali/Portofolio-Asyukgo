"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TikTokIcon,
  WhatsappIcon,
} from "@/components/Icons";
import {
  email,
  githubHandle,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  location,
  tiktokUrl,
  whatsappUrl,
} from "@/data/contact";

const linkClass =
  "flex items-center justify-between gap-x-2 font-medium text-title transition-[transform,color] duration-[400ms] hover:translate-x-[0.35rem] hover:text-copy desk:text-xl";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="section desk:pt-36 desk:pb-16">
      <Reveal className="wrap grid gap-y-16 pb-8 desk:gap-y-32">
        <div className="text-center">
          <h2 className="section-title mb-4">
            Hubungi <span>Saya</span>
          </h2>

          <p className="fs-normal desk:fs-h2 mb-6 font-second">
            Ceritakan proyek Anda berikutnya.
          </p>

          <button type="button" onClick={copyEmail} className="btn">
            {copied ? (
              <>
                Email Tersalin
                <CheckIcon className="h-5 w-5" />
              </>
            ) : (
              <>
                Salin Email
                <CopyIcon className="h-5 w-5" />
              </>
            )}
          </button>
        </div>

        <div className="grid gap-y-12 desk:grid-cols-3">
          {/* Informasi kontak */}
          <div className="grid gap-y-4 desk:justify-self-start desk:gap-y-6">
            <div>
              <h3 className="fs-h3 mb-2 text-center text-first desk:mb-3">
                Email
              </h3>

              <address className="text-center font-normal not-italic text-title">
                {email}
              </address>
            </div>

            <div>
              <h3 className="fs-h3 mb-2 text-center text-first desk:mb-3">
                Lokasi
              </h3>

              <address className="text-center font-normal not-italic text-title">
                {location}
              </address>
            </div>
          </div>

          {/* Media sosial */}
          <div className="grid gap-y-1 desk:gap-y-2">
            <h3 className="fs-h3 mb-2 text-center text-first desk:mb-3">
              Media Sosial
            </h3>

            <div className="grid grid-cols-[max-content] justify-center gap-y-1 desk:gap-y-2">
              <a
                href={githubUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                GitHub <GithubIcon className="h-6 w-6" />
              </a>

              <a
                href={linkedinUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                LinkedIn <LinkedinIcon className="h-6 w-6" />
              </a>

              <a
                href={instagramUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                Instagram <InstagramIcon className="h-6 w-6" />
              </a>

              <a
                href={tiktokUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                TikTok <TikTokIcon className="h-6 w-6" />
              </a>

              <a href={`mailto:${email}`} className={linkClass}>
                Email <MailIcon className="h-6 w-6" />
              </a>

              <span className="fs-small text-center text-muted">
                @{githubHandle}
              </span>
            </div>
          </div>

          {/* Tulis pesan */}
          <div className="grid gap-y-1 desk:justify-self-end desk:gap-y-2">
            <h3 className="fs-h3 mb-2 text-center text-first desk:mb-3">
              Tulis Pesan, Kita Ngobrol
            </h3>

            <div className="grid grid-cols-[max-content] justify-center gap-y-1 desk:gap-y-2">
              <a
                href={whatsappUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                WhatsApp <WhatsappIcon className="h-6 w-6" />
              </a>

              <a
                href={instagramUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                Instagram <InstagramIcon className="h-6 w-6" />
              </a>

              <a
                href={tiktokUrl}
                {...externalLinkProps}
                className={linkClass}
              >
                TikTok <TikTokIcon className="h-6 w-6" />
              </a>

              <a href={`mailto:${email}`} className={linkClass}>
                Kirim Email <ArrowUpRightIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}