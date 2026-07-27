"use client";

import { CSSProperties } from "react";
import "./Hero.css";

const floatingApps = [
  { name: "VibeLens", image: "/apps/vibelens.png", className: "floating-app floating-app-eight" },
  { name: "HiLock", image: "/apps/hilock.png", className: "floating-app floating-app-nine" },
  { name: "Susadım", image: "/apps/susadim.png", className: "floating-app floating-app-one" },
  { name: "Ezan Vakti", image: "/apps/ezan-vakti.png", className: "floating-app floating-app-two" },
  { name: "Üşenme Yap", image: "/apps/usenme-yap.png", className: "floating-app floating-app-three" },
  { name: "Ödüyorum", image: "/apps/oduyorum.png", className: "floating-app floating-app-four" },
  { name: "Ref!Ref!Ref!", image: "/apps/refrefref.png", className: "floating-app floating-app-five" },
  { name: "TarTarot", image: "/apps/tartarot.png", className: "floating-app floating-app-six" },
  { name: "Kedilik", image: "/apps/kedilik.png", className: "floating-app floating-app-seven" }
];

export default function Hero() {
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

          {floatingApps.map((app, index) => (
            <div
              className={app.className}
              key={app.name}
              style={{ "--app-index": index } as CSSProperties}
            >
              <div className="floating-app-shadow" aria-hidden="true" />
              <img src={app.image} alt={`${app.name} uygulama ikonu`} />
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
