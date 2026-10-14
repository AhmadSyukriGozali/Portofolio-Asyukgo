"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Tentang", id: "about" },
  { name: "Proyek", id: "projects" },
  { name: "Kontak", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");

  // Tandai tautan aktif sesuai section yang sedang terlihat.
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      let current = "";

      document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
        const top = section.offsetTop - 50;
        if (y > top && y <= top + section.offsetHeight) {
          current = section.id;
        }
      });

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-[linear-gradient(180deg,var(--color-bg)_60%,hsl(240_100%_2%/0)_100%)]">
      <div className="blob-animate -left-12 -top-12" />

      <nav className="wrap flex justify-between py-4 desk:h-[calc(var(--header-height)+2rem)] desk:items-center">
        <a
          href="#home"
          className="self-start font-second font-semibold text-title transition-colors duration-[400ms] hover:text-first"
        >
          Asyukgo
        </a>

        <ul className="flex flex-col items-end gap-y-2 desk:flex-row desk:gap-x-[5.5rem]">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`fs-small font-second font-semibold transition-[color,text-shadow] duration-[400ms] hover:text-first hover:[text-shadow:0_8px_16px_var(--color-first)] ${
                  active === link.id
                    ? "text-first [text-shadow:0_8px_16px_var(--color-first)]"
                    : "text-title"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
