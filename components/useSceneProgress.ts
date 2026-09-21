"use client";
import { useEffect, useRef } from "react";

const clamp = (n: number) => Math.max(0, Math.min(1, n));
/** Each chapter has an entrance, camera pullback, and an editorial reveal. */
export function useSceneProgress() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    const update = () => {
      if (!visible && !reduced.matches) return;
      const r = el.getBoundingClientRect();
      const p = reduced.matches ? .72 : clamp(-r.top / Math.max(1, r.height - innerHeight));
      const pull = clamp((p - .08) / .48);
      const detail = clamp((p - .48) / .22);
      el.style.setProperty("--progress", String(p));
      el.style.setProperty("--pull", String(pull));
      el.style.setProperty("--detail", String(detail));
      el.dataset.phase = p > .48 ? "detail" : "opening";
      el.dataset.intro = String(p < .32);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); }, { rootMargin: "100% 0px" });
    observer.observe(el);
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); };
  }, []);
  return ref;
}
