"use client";
import screens from "@/data/product-screens.json";
import Image from "next/image";
import { useSitePreferences } from "./SitePreferences";
import "./ProductGallery.css";

export default function ProductGallery({ slug, name }: { slug: string; name: string }) {
  const { lang } = useSitePreferences();
  const images = (screens as Record<string,string[]>)[slug] ?? [];
  if (!images.length) return null;
  return <section className={`product-gallery product-gallery--${slug}`} aria-label={lang === "tr" ? "Uygulama ekranları" : "App screenshots"}>
    <div className="product-gallery__heading"><span>01 — {lang === "tr" ? "DENEYİM" : "THE EXPERIENCE"}</span><h2>{lang === "tr" ? "Her ayrıntısıyla." : "Every detail considered."}</h2><p>{lang === "tr" ? "Uygulamanın içinden gerçek ekranlar." : "Real screens from inside the app."}</p></div>
    <div className="product-gallery__screens">{images.map((src,i)=><figure key={i}><Image src={src} alt={`${name} — ${lang === "tr" ? "ekran" : "screen"} ${i+1}`} width={960} height={2078} sizes="(max-width: 700px) 65vw, 27vw"/><figcaption>0{i+1} / {name}</figcaption></figure>)}</div>
  </section>;
}
