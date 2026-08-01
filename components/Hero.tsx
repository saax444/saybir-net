"use client";

import { CSSProperties, useEffect, useState } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

const positions = ["one", "two", "three", "four", "five"];

export default function Hero() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const nextIndex = Math.min(apps.length - positions.length, Math.floor(window.scrollY / 120));
      setStartIndex(Math.max(0, nextIndex));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  const visibleApps = apps.slice(startIndex, startIndex + positions.length);

  return (
    <section className="hero" id="top">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-background-grid" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="hero-badge">iOS Uygulamaları ve Yazılım Geliştirme</span>

          <h1>
            Fikirlerinizi kullanılabilir{" "}
            <span>iOS ürünlerine</span> dönüştürün.
          </h1>

          <p>
            Kullanıcı odaklı iOS uygulamaları geliştirme; tasarım, test ve App Store yayın süreçlerini uçtan uca beraber yönetelim.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#uygulamalar">
              Uygulamaları İncele
            </a>
            <a className="hero-button hero-button-secondary" href="#hizmetler">
              Hizmetleri Gör
            </a>
          </div>

          <div className="hero-points" aria-label="Çalışma yaklaşımı">
            <div className="hero-point">
              <span className="hero-point-icon">01</span>
              <span>
                <strong>Performans odaklı</strong>
                <small>Hızlı ve verimli çözümler</small>
              </span>
            </div>

            <div className="hero-point">
              <span className="hero-point-icon">02</span>
              <span>
                <strong>Güvenli ve sürdürülebilir</strong>
                <small>Ölçeklenebilir ürün altyapısı</small>
              </span>
            </div>

            <div className="hero-point">
              <span className="hero-point-icon">03</span>
              <span>
                <strong>Modern ürün tasarımı</strong>
                <small>Sade ve anlaşılır deneyimler</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-app-stage" aria-label="Geliştirilen iOS uygulamaları">
          <div className="stage-ring stage-ring-large" aria-hidden="true" />
          <div className="stage-ring stage-ring-medium" aria-hidden="true" />
          <div className="stage-ring stage-ring-small" aria-hidden="true" />
          <div className="stage-center-glow" aria-hidden="true" />

          {visibleApps.map((app, index) => (
            <a
              className={`floating-app floating-app-${positions[index]}`}
              key={`${app.slug}-${startIndex}`}
              href={`/apps/${app.slug}`}
              style={{ "--app-index": index } as CSSProperties}
            >
              <div className="floating-app-shadow" aria-hidden="true" />
              <img src={app.image} alt={`${app.name} uygulama ikonu`} />
              <span>{app.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
