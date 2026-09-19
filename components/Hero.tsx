"use client";

import { useEffect, useRef, useState } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePage, setActivePage] = useState(0);
  const pageCount = Math.ceil(apps.length / 4);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setActivePage(Math.min(pageCount - 1, Math.round(progress * (pageCount - 1))));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pageCount]);

  const visibleApps = apps.slice(activePage * 4, activePage * 4 + 4);

  return (
    <section ref={sectionRef} className="hero" id="top">
      <div className="hero-sticky">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="hero-badge">iOS Uygulamaları ve Yazılım Geliştirme</span>
            <h1>
              Fikirlerinizi kullanılabilir <span>iOS ürünlerine</span> dönüştürün.
            </h1>
            <p>
              Kullanıcı odaklı iOS uygulamaları geliştirme; tasarım, test ve
              App Store yayın süreçlerini uçtan uca beraber yönetelim.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#uygulamalar">Uygulamaları İncele</a>
              <a className="hero-button hero-button-secondary" href="#iletisim">İletişim</a>
            </div>
          </div>

          <div className="hero-showcase" aria-live="polite">
            <div className="showcase-disc" aria-hidden="true" />
            <div className="showcase-app-grid" key={activePage}>
              {visibleApps.map((app) => (
                <a className="showcase-app" href={`/apps/${app.slug}`} key={app.slug}>
                  <img src={app.image} alt={`${app.name} uygulama ikonu`} />
                  <strong>{app.name}</strong>
                </a>
              ))}
            </div>
            <div className="showcase-progress" aria-label={`${activePage + 1} / ${pageCount}`}>
              <span>{String(activePage + 1).padStart(2, "0")}</span>
              <div><i style={{ width: `${((activePage + 1) / pageCount) * 100}%` }} /></div>
              <span>{String(pageCount).padStart(2, "0")}</span>
            </div>
            <p className="showcase-hint">Uygulamalar arasında ilerlemek için kaydırın</p>
          </div>
        </div>
      </div>
    </section>
  );
}
