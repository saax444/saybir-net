"use client";
import Image from "next/image";
import { useSitePreferences } from "./SitePreferences";
import { useSceneProgress } from "./useSceneProgress";
import "./Hero.css";

export default function Hero() {
  const ref = useSceneProgress();
  const { lang } = useSitePreferences();
  const tr = lang === "tr";
  return <section ref={ref} className="opening" id="top" aria-label={tr ? "SAYBIR — Bağımsız yazılım stüdyosu" : "SAYBIR — Independent software studio"}>
    <div className="opening__sticky">
      <div className="opening__landscape"><Image src="/films/velomate-landscape.webp" alt="" fill preload sizes="100vw" /></div>
      <div className="opening__shade" />
      <div className="opening__edition"><span>SAYBIR</span><span>{tr ? "BAĞIMSIZ YAZILIM STÜDYOSU" : "INDEPENDENT SOFTWARE STUDIO"}</span><span>DESIGN / CODE / LIFE</span></div>
      <div className="opening__title"><span className="opening__eyebrow">{tr ? "BİR FİKİR. YENİ BİR DÜNYA." : "ONE IDEA. A NEW WORLD."}</span><h1>{tr ? <>Ekranın<br/><em>ötesine.</em></> : <>Beyond<br/><em>the screen.</em></>}</h1><p>{tr ? "Hayata dokunan dijital deneyimler. Tasarımdan ilk dokunuşa, her ayrıntısıyla." : "Digital experiences that become part of life. Considered from the first idea to the first touch."}</p></div>
      <div className="opening__destination"><span>01 / VELOMATE</span><p>{tr ? "Her rota bir başlangıç." : "Every route is a beginning."}</p><a href="#uygulamalar">{tr ? "Hikâyeyi keşfet" : "Explore the story"} <span>↘</span></a></div>
      <div className="opening__bottom"><span>iOS / macOS / Android</span><a href="#uygulamalar">{tr ? "KEŞFETMEK İÇİN KAYDIR" : "SCROLL TO EXPLORE"} ↓</a><span>DESIGN + ENGINEERING</span></div>
      <div className="opening__progress" aria-hidden="true" />
    </div>
  </section>;
}
