"use client";
import Image from "next/image";
import { apps } from "@/data/apps";
import { useSitePreferences } from "./SitePreferences";
import "./Hero.css";
export default function Hero(){
 const {lang}=useSitePreferences();const tr=lang==="tr";
 return <section className="opening" id="top">
  <div className="opening__copy"><div className="opening__label"><i/>{tr?"BAĞIMSIZ YAZILIM STÜDYOSU":"INDEPENDENT SOFTWARE STUDIO"}</div>
  <h1>{tr?<>Hayata dokunan<br/><span>dijital deneyimler.</span></>:<>Digital experiences.<br/><span>Made for real life.</span></>}</h1>
  <div className="opening__lower"><p>{tr?"Günlük hayatı kolaylaştıran, merak uyandıran ve kullanmaktan keyif alınan uygulamalar tasarlıyorum.":"I design apps that make everyday life easier, spark curiosity and feel good to use."}</p><a href="#uygulamalar"><span>{tr?"Uygulamaları keşfet":"Explore the apps"}</span><b>↗</b></a></div>
  <div className="opening__note">iOS <span>·</span> macOS <span>·</span> Android</div></div>
  <div className="opening__showcase" aria-label={tr?"SAYBIR uygulamalarından gerçek ekranlar":"Real screens from SAYBIR apps"}>
   <div className="opening__showcase-label"><span>{tr?"TASARLANDI. GELİŞTİRİLDİ. YAYINLANDI.":"DESIGNED. BUILT. RELEASED."}</span><span>01 — 03</span></div>
   <div className="opening__screens">{["velomate","yemekolay","susadim"].map((slug,i)=><a key={slug} href={`#story-${slug}`} aria-label={apps.find(a=>a.slug===slug)?.name}><Image src={`/films/${slug}-0.webp`} alt={`${apps.find(a=>a.slug===slug)?.name}`} width={960} height={2078} priority={i===1} sizes="(max-width:700px) 34vw, 18vw"/></a>)}</div>
   <div className="opening__showcase-footer"><span>VeloMate / Yemekolay / Susadım</span><span>↗</span></div>
  </div>
  <div className="opening__footer"><span>SAYBIR — {tr?"FİKİRDEN DENEYİME":"FROM IDEA TO EXPERIENCE"}</span><span>{apps.length} {tr?"BAĞIMSIZ ÜRÜN":"INDEPENDENT PRODUCTS"}</span></div>
 </section>
}
