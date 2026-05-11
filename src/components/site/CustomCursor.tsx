"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_COLOR = "#0EA5E9";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let hasMoved = false;
    const hoverRef = { current: false };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "";
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
        hoverRef.current ? 1.6 : 1
      })`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = !!target.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]'
      );
      hoverRef.current = interactive;
      setHovering(interactive);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      if (!hasMoved) return;
      dot.style.opacity = "1";
      ring.style.opacity = "";
    };

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border-2 will-change-transform"
        style={{
          borderColor: CURSOR_COLOR,
          opacity: hovering ? 0.9 : 0.6,
          transition: "opacity 200ms ease, background-color 200ms ease",
          backgroundColor: hovering ? `${CURSOR_COLOR}1A` : "transparent",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full will-change-transform"
        style={{ backgroundColor: CURSOR_COLOR }}
      />
    </>
  );
}
