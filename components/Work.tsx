"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon, AwardIcon, GradCapIcon } from "@/components/Icons";
import { certificates } from "@/data/certificates";

type Entry = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  href?: string;
};

const education: Entry[] = [
  {
    title: "Teknik Informatika",
    subtitle: "Universitas Bina Sarana Informatika",
    year: "Semester 7",
    description:
      "Aktif belajar dan membangun proyek, dengan fokus pada pengembangan web: frontend, backend, database, dan deployment.",
  },
];

const certificateEntries: Entry[] = certificates.map((certificate) => ({
  title: certificate.title,
  subtitle: certificate.issuer,
  year: certificate.date.match(/\d{4}/g)?.at(-1) ?? "",
  description: certificate.date,
  href: certificate.file,
}));

const tabs = [
  { id: "education", label: "Pendidikan", Icon: GradCapIcon, entries: education },
  {
    id: "certificates",
    label: "Sertifikat",
    Icon: AwardIcon,
    entries: certificateEntries,
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Work() {
  const [active, setActive] = useState<TabId>("education");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="work" className="section">
      <Reveal className="wrap grid gap-y-8 xs:justify-center desk:gap-y-12">
        <h2 className="section-title mb-0">
          Perjalanan <span>Saya</span>
        </h2>

        {/* Tab */}
        <div
          role="tablist"
          aria-label="Perjalanan saya"
          className="flex justify-between rounded-[4rem] bg-card px-4 py-5 xs:w-[330px] xs:justify-self-center xs:px-8"
        >
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active === id}
              onClick={() => setActive(id)}
              className={`fs-small flex items-center gap-x-1 font-second transition-colors duration-400 hover:text-first ${
                active === id ? "text-first" : "text-copy"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Daftar */}
        <div className="relative pl-4 md:pl-0 xs:w-[460px] md:w-150 desk:w-[1050px]">
          <div className="absolute -left-1 top-0 h-full w-1 bg-[linear-gradient(180deg,hsl(255_60%_64%/0),var(--color-first-alt-2))] after:absolute after:-left-1.5 after:-bottom-px after:h-4 after:w-4 after:rounded-full after:bg-first-alt-2 after:content-[''] md:inset-x-0 md:left-0 md:mx-auto" />

          <div className="grid gap-y-16 desk:gap-y-20">
            {current.entries.map((entry) => (
              <article
                key={entry.title}
                className="grid gap-y-4 md:grid-cols-[repeat(2,270px)] md:justify-center md:gap-x-12 desk:grid-cols-[repeat(2,450px)] desk:gap-x-36"
              >
                <div>
                  <h3 className="fs-h2 mb-2 desk:fs-bigger">{entry.title}</h3>
                  <h4 className="fs-normal desk:fs-h3 font-sans font-normal text-first">
                    {entry.subtitle}
                  </h4>
                </div>

                <div className="grid gap-y-2">
                  <h3 className="fs-h1 text-title">{entry.year}</h3>

                  <p className="fs-normal desk:fs-h3">{entry.description}</p>

                  {entry.href && (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fs-small mt-1 inline-flex items-center gap-x-2 font-second font-semibold text-title transition-colors duration-400 hover:text-first"
                    >
                      Lihat Sertifikat
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {active === "certificates" && (
          <div className="flex justify-center">
            <Link href="/certificates" className="btn">
              Semua Sertifikat
              <ArrowUpRightIcon className="h-5 w-5" />
            </Link>
          </div>
        )}
      </Reveal>
    </section>
  );
}
