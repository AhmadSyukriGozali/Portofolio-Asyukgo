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
  
  {
    id: "crawlfast",
    category: "Web",
    title: "CrawlFast",
    tagline: "Platform E-Commerce dengan Dashboard Admin",
    description:
      "Platform e-commerce yang dikembangkan menggunakan Next.js dan Supabase, dengan katalog produk, autentikasi pelanggan, pengelolaan pesanan, serta integrasi pembayaran Midtrans Sandbox (Demo), Kalau sudah terkonfirmasi akun Midtrans bisa digunakan. Proyek ini juga mencakup pengembangan dashboard admin untuk membantu pengelolaan pesanan dan pemantauan transaksi.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Midtrans",
    ],
    image: "/previewProjects/preview-crawlfast.png",
    imageAlt: "Preview platform e-commerce CrawlFast",
    demoUrl: "https://crawlfast.biz.id/",
    githubUrl: "https://github.com/AhmadSyukriGozali/crawlfast",
    status: "Dalam Pengembangan",
  },
];
