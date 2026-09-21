"use client";
import { useEffect, useRef } from "react";

/** A single CSS variable drives a scene; scrolling does not re-render React. */
export function useSceneProgress() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      const bounds = element.getBoundingClientRect();
      const progress = media.matches ? 0 : Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height - innerHeight)));
      element.style.setProperty("--progress", String(progress));
      element.dataset.phase = progress > .45 ? "story" : "opening";
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); media.removeEventListener("change", schedule); };
  }, []);
  return ref;
}
