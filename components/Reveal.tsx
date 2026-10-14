"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Origin = "top" | "bottom" | "left" | "right";

type RevealProps = {
  /** Arah asal elemen sebelum muncul (sama seperti ScrollReveal). */
  origin?: Origin;
  /** Penundaan dalam detik. */
  delay?: number;
  className?: string;
  children?: ReactNode;
};

const offsets: Record<Origin, { x: string; y: string }> = {
  top: { x: "0px", y: "-60px" },
  bottom: { x: "0px", y: "60px" },
  left: { x: "-60px", y: "0px" },
  right: { x: "60px", y: "0px" },
};

export default function Reveal({
  origin = "top",
  delay = 0.3,
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-x": offsets[origin].x,
    "--reveal-y": offsets[origin].y,
    transitionDelay: visible ? `${delay}s` : "0s",
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
