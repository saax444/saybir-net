"use client";

import { useEffect, useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const featured = apps.slice(0, 5);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      visual.style.setProperty("--hero-x", `${x}px`);
      visual.style.setProperty("--hero-y", `${y}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />
      <div className="hero-noise" />
      <div className="container hero-inner">
        <div className="hero-eyebrow"><i /> Independent software studio <i /></div>
        <h1><span>SAYBIR</span><br />Digital products,<br /><em>built with intent.</em></h1>
        <p className="hero-lead">
          iOS, macOS ve Android için günlük hayatın parçası olan
          hızlı, sade ve özenli dijital ürünler geliştiriyorum.
        </p>
        <div className="hero-platforms">
          <span>iOS</span><b>·</b><span>macOS</span><b>·</b><span>Android</span>
        </div>
        <div className="hero-actions">
          <a className="hero-primary" href="#uygulamalar">Ürünleri keşfet <span>↘</span></a>
          <a className="hero-secondary" href="#iletisim">Birlikte çalışalım</a>
        </div>
      </div>

      <div ref={visualRef} className="hero-orbit" aria-hidden="true">
        <div className="orbit-ring orbit-ring-one" />
        <div className="orbit-ring orbit-ring-two" />
        {featured.map((app, index) => (
          <div className={`orbit-app orbit-app-${index + 1}`} key={app.slug}>
            <img src={app.image} alt="" />
          </div>
        ))}
        <div className="orbit-core"><span>S</span></div>
      </div>

      <div className="hero-scroll"><span>Scroll to explore</span><i /></div>
    </section>
  );
}
