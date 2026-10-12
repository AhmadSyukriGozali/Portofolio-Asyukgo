import SkillsJourney from "@/components/SkillsJourney";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-24 sm:pb-20 sm:pt-28">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Keahlian
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Teknologi yang saya gunakan
            <br className="hidden sm:block" />
            dan sedang saya pelajari.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Saya terus mengembangkan kemampuan teknis melalui proyek,
            eksperimen, dan proses belajar secara langsung.
            <span className="motion-reduce:hidden">
              {" "}
              Gulir ke bawah untuk menembus tiap lapisannya, dari antarmuka
              sampai ke dalam.
            </span>
          </p>
        </div>
      </div>

      {/* Perjalanan scroll: kamera menembus lapisan demi lapisan */}
      <SkillsJourney groups={skillGroups} />

      {/* Tampilan statis untuk pengguna yang mengurangi gerakan */}
      <div className="mx-auto hidden max-w-6xl gap-5 px-6 pb-10 motion-reduce:grid md:motion-reduce:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              {group.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2 text-sm font-medium text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pb-28">
        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-400">
              <span className="font-semibold text-cyan-400">
                Sedang dipelajari:
              </span>{" "}
              pengembangan web modern, arsitektur backend, pengelolaan
              database, dan deployment.
            </p>

            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Terus Belajar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}