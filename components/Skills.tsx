import { skillGroups } from "@/data/skills";

// Kelompok yang masuk kartu "Keahlian"; sisanya masuk kartu "Tools".
const toolsTitle = "Tools Pengembangan";

const skillCardGroups = skillGroups.filter((group) => group.title !== toolsTitle);
const toolsGroup = skillGroups.find((group) => group.title === toolsTitle);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Yang Saya Tawarkan
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Keahlian dan tools
            <br className="hidden sm:block" />
            untuk membangun produk digital.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Saya terus mengembangkan kemampuan teknis melalui proyek,
            eksperimen, dan proses belajar secara langsung.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Development skills */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.05] sm:p-10">
            <h3 className="text-2xl font-bold text-white">Keahlian Pengembangan</h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Teknologi yang saya gunakan dan pelajari untuk membangun
              aplikasi dari sisi antarmuka hingga data.
            </p>

            <div className="mt-8 space-y-6">
              {skillCardGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {group.title}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Development tools */}
          {toolsGroup && (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.05] sm:p-10">
              <h3 className="text-2xl font-bold text-white">{toolsGroup.title}</h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                {toolsGroup.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {toolsGroup.skills.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-5">
                <p className="text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-cyan-400">
                    Sedang dipelajari:
                  </span>{" "}
                  pengembangan web modern, arsitektur backend, pengelolaan
                  database, dan deployment.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
