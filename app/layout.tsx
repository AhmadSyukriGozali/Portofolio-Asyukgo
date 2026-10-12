import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

const siteUrl = "https://portofolio-asyukgo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ahmad Syukri Gozali - Portofolio",
    template: "%s - Ahmad Syukri Gozali",
  },

  description:
    "Portfolio pribadi Ahmad Syukri Gozali, mahasiswa Teknik Informatika yang berfokus pada software development, web development, dan teknologi modern.",

  keywords: [
    "Ahmad Syukri Gozali",
    "Ahmad Syukri",
    "Portofolio",
    "Portfolio",
    "Teknik Informatika",
    "Software Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
  ],

  authors: [
    {
      name: "Ahmad Syukri Gozali",
    },
  ],

  creator: "Ahmad Syukri Gozali",

  publisher: "Ahmad Syukri Gozali",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Ahmad Syukri Gozali - Portofolio",
    description:
      "Portfolio pribadi Ahmad Syukri Gozali - Informatics Student & Software Developer.",
    url: siteUrl,
    siteName: "Ahmad Syukri Gozali - Portofolio",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ahmad Syukri Gozali - Portofolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmad Syukri Gozali - Portofolio",
    description:
      "Portfolio pribadi Ahmad Syukri Gozali - Informatics Student & Software Developer.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}