"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";

type Entry = {
  title: string;
  place: string;
  period: string;
  description?: string;
};

const education: Entry[] = [
  {
    title: "Teknik Informatika",
    place: "Universitas Bina Sarana Informatika",
    period: "Semester 7 · Sedang berjalan",
    description:
      "Memperkuat dasar pemrograman, pengembangan web, database, dan membangun proyek nyata di sela perkuliahan.",
  },
];

const certificateEntries: Entry[] = certificates.map((certificate) => ({
  title: certificate.title,
  place: certificate.issuer,
  period: certificate.date,
}));

const tabs = [
  { id: "education", label: "Pendidikan", entries: education },
  { id: "certificates", label: "Sertifikat", entries: certificateEntries },
] as const;

export default function Journey() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("education");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section
      id="journey"
      className="relative scroll-mt-20 border-t border-white/10 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Perjalanan
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Pendidikan dan proses belajar.
          </h2>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Perjalanan saya"
          className="mt-12 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1.5"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition duration-300 ${
                active === tab.id
                  ? "bg-cyan-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <ol className="relative mt-12 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {current.entries.map((entry) => (
            <li key={entry.title} className="relative">
              <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950 sm:-left-[3.2rem]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {entry.period}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                {entry.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">{entry.place}</p>

              {entry.description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  {entry.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
