export type SkillGroup = {
  /** Nama kelompok keahlian. */
  title: string;
  /** Nama lapisan di perjalanan scroll (dilihat dari sisi pengguna ke dalam). */
  layer: string;
  description: string;
  skills: string[];
};

// Urutan = urutan lapisan yang dilewati saat scroll: dari yang terlihat
// pengguna sampai yang paling dalam.
export const skillGroups: SkillGroup[] = [
  {
    title: "Pengembangan Web",
    layer: "Antarmuka",
    description:
      "Teknologi yang saya gunakan untuk membangun antarmuka dan aplikasi web modern.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
    ],
  },
  {
    title: "Backend & Database",
    layer: "Server & data",
    description:
      "Teknologi yang saya pelajari untuk membangun logika aplikasi, API, dan mengelola database.",
    skills: ["Node.js", "REST API", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools Pengembangan",
    layer: "Alat & rilis",
    description:
      "Tools yang membantu saya dalam proses coding, version control, dan deployment.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Supabase", "Claude", "ChatGPT", "Copilot"],
  },
  {
    title: "Keahlian Lainnya",
    layer: "Eksplorasi",
    description:
      "Bidang teknologi lain yang sedang saya eksplorasi melalui proyek dan pembelajaran.",
    skills: ["Machine Learning", "Integrasi IoT & AI", "Pengolahan Data"],
  },
];