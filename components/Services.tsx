"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/Icons";
import { skillGroups } from "@/data/skills";

const toolsGroup = skillGroups.find(
  (group) => group.title === "Tools Pengembangan"
);

const skillList = skillGroups
  .filter((group) => group.title !== "Tools Pengembangan")
  .flatMap((group) => group.skills);

const cards = [
  {
    id: "skills",
    title: "Keahlian Pengembangan",
    subtitle:
      "Teknologi yang saya gunakan dan pelajari untuk membangun aplikasi dari antarmuka hingga data.",
    items: skillList,
  },
  {
    id: "tools",
    title: "Tools Pengembangan",
    subtitle:
      toolsGroup?.description ??
      "Tools yang membantu saya dalam coding, version control, dan deployment.",
    items: toolsGroup?.skills ?? [],
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>("skills");

  return (
    <section id="services" className="section">
      <div className="wrap">
        <h2 className="section-title">
          Yang <span>Saya Tawarkan</span>
        </h2>

        <div className="grid items-start gap-y-8 md:grid-cols-[repeat(2,350px)] md:justify-center md:gap-x-6 desk:grid-cols-[repeat(2,455px)] desk:gap-x-20">
          {cards.map((card, index) => {
            const open = openId === card.id;

            return (
              <Reveal key={card.id} delay={0.3 + index * 0.1}>
                <article className="relative grid gap-y-6 overflow-hidden rounded-[3rem] bg-card px-6 py-8 desk:gap-y-8 desk:rounded-[4rem] desk:px-12 desk:pb-16 desk:pt-12">
                  <h3 className="fs-h2 desk:fs-h1">{card.title}</h3>

                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : card.id)}
                    aria-expanded={open}
                    aria-label={`${open ? "Tutup" : "Buka"} ${card.title}`}
                    className="absolute bottom-4 right-4 z-[2] grid h-8 w-8 place-items-center rounded-lg border-2 border-first bg-bg text-title desk:bottom-8 desk:right-8"
                  >
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-[400ms] ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <h4 className="fs-small mb-4 font-sans font-normal text-copy">
                        {card.subtitle}
                      </h4>

                      <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 pb-10">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="fs-smaller rounded-[4rem] border border-title bg-card px-2.5 py-1 font-second text-title"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
