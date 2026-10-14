export type Project = {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  demoUrl: string;
  githubUrl: string;
  status?: string;
};

// Tambahkan proyek baru di sini; kartu di carousel akan mengikuti.
export const projects: Project[] = [
  {
    id: "nusarasa",
    category: "Web",
    title: "NusaRasa",
    tagline: "Platform E-Commerce untuk UMKM",
    description:
      "Platform e-commerce untuk membantu UMKM menghadirkan pengalaman penjualan digital yang lebih modern: katalog produk, autentikasi, keranjang, checkout, pengelolaan pesanan, akun pelanggan, dan dashboard admin.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    image: "/previewProjects/preview-nusarasa-ecommerce.png",
    imageAlt: "Tampilan website e-commerce NusaRasa",
    demoUrl: "https://nusarasa-ecommerce.vercel.app/",
    githubUrl: "https://github.com/AhmadSyukriGozali/nusarasa",
    status: "Dalam Pengembangan",
  },
];
