"use client";

import { useEffect, useRef, useState } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setActiveIndex(Math.min(apps.length - 1, Math.round(progress * (apps.length - 1))));
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
  }, []);

  const activeApp = apps[activeIndex];

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
            <a className="showcase-app" href={`/apps/${activeApp.slug}`} key={activeApp.slug}>
              <img src={activeApp.image} alt={`${activeApp.name} uygulama ikonu`} />
              <span className="showcase-category">{activeApp.category}</span>
              <strong>{activeApp.name}</strong>
              <small>Uygulamayı görüntüle&nbsp; ↗</small>
            </a>
            <div className="showcase-progress" aria-label={`${activeIndex + 1} / ${apps.length}`}>
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <div><i style={{ width: `${((activeIndex + 1) / apps.length) * 100}%` }} /></div>
              <span>{String(apps.length).padStart(2, "0")}</span>
            </div>
            <p className="showcase-hint">Uygulamalar arasında ilerlemek için kaydırın</p>
          </div>
        </div>
      </div>
    </section>
  );
}
