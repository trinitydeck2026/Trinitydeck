"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/* Inertial smooth scrolling for the whole site. Skipped for reduced motion. */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -100 },
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;
    let id = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      id = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = undefined;
    };
  }, []);

  // After client-side navigation: go to the #section if there is one, else the top.
  useEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }
    const lenis = lenisRef.current;
    if (!lenis) return;
    // Wait a frame so this runs after Next.js's own scroll handling.
    const id = requestAnimationFrame(() => {
      lenis.resize();
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;
      if (target) lenis.scrollTo(target, { offset: -100, immediate: true, force: true });
      else lenis.scrollTo(0, { immediate: true, force: true });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
