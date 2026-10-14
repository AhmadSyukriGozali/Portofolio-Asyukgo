"use client";

import { useEffect, useRef } from "react";

// Lingkaran bercahaya yang mengikuti kursor; mengecil saat melewati tautan/tombol.
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
          element.style.opacity = "1";
        });
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      element.classList.toggle(
        "hide-cursor",
        Boolean(target?.closest?.("a, button"))
      );
    };

    const onLeave = () => {
      element.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
