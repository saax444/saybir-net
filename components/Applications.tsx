"use client";

import { CSSProperties, PointerEvent, useRef } from "react";
import Link from "next/link";
import { apps, type AppInfo } from "@/data/apps";
import "./Applications.css";

function AppCard({ app, index }: { app: AppInfo; index: number }) {
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
      <div className="app-card-topline">
        <span className="app-category">{app.category}</span>
      </div>
      <img className="app-icon" src={app.image} alt={`${app.name} uygulama ikonu`} />
      <div className="app-card-copy">
        <h3>{app.name}</h3>
        <p>{app.description}</p>
      </div>
      <Link className="app-link" href={`/apps/${app.slug}`}>
        Uygulama sayfası
        <span aria-hidden="true">→</span>
      </Link>
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
            App Store&apos;daki ve yayın yolculuğundaki tüm ürünlerimi keşfedin.
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
