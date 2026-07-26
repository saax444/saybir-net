"use client";

import { CSSProperties, PointerEvent, useRef } from "react";
import "./Applications.css";

const apps = [
  { name: "Susadım", image: "/apps/susadim.png", accent: "38 219 255" },
  { name: "Ezan Vakti", image: "/apps/ezan-vakti.png", accent: "229 184 71" },
  { name: "Üşenme Yap", image: "/apps/usenme-yap.png", accent: "139 83 255" },
  { name: "Ödüyorum", image: "/apps/oduyorum.png", accent: "37 161 255" },
  { name: "Ref!Ref!Ref!", image: "/apps/refrefref.png", accent: "255 52 190" },
  { name: "TarTarot", image: "/apps/tartarot.png", accent: "218 180 79" },
  { name: "Kedilik", image: "/apps/kedilik.png", accent: "255 123 90" }
];

function AppCard({ app, index }: { app: typeof apps[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);

  const move = (event: PointerEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };

  const leave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  };

  return (
    <article
      ref={ref}
      className="app-card"
      onPointerMove={move}
      onPointerLeave={leave}
      style={{
        "--accent": app.accent,
        "--delay": `${index * 70}ms`
      } as CSSProperties}
    >
      <div className="app-card-glow" />
      <img src={app.image} alt={`${app.name} uygulama ikonu`} />
      <h3>{app.name}</h3>
    </article>
  );
}

export default function Applications() {
  return (
    <section className="applications" id="uygulamalar">
      <div className="container">
        <div className="section-head applications-head">
          <span className="section-kicker">iOS Uygulamalarım</span>
          <h2 className="section-title">Uygulamalar</h2>
          <p className="section-copy">
            Kullanıcı deneyimi, performans ve sürdürülebilirlik odağında hazırlanan iOS ürünleri.
          </p>
        </div>

        <div className="apps-grid">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
