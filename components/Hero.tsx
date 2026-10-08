"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { apps } from "@/data/apps";
import { useSitePreferences } from "./SitePreferences";
import "./Hero.css";
const featured=["hushloom","kedilik","velomate","hilock","yemekolay","susadim","tartarot","vibelens","history"];
export default function Hero(){
 const {lang}=useSitePreferences();const tr=lang==="tr";const root=useRef<HTMLElement>(null);
 useEffect(()=>{let frame=0;const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{frame=0;const el=root.current;if(el)el.style.setProperty('--hero-scroll',String(media.matches?0:Math.min(1,Math.max(0,-el.getBoundingClientRect().top/innerHeight))))};const scroll=()=>{if(!frame)frame=requestAnimationFrame(update)};addEventListener('scroll',scroll,{passive:true});return()=>{removeEventListener('scroll',scroll);cancelAnimationFrame(frame)}},[]);
 return <section className="opening" id="top" ref={root}>
  <div className="opening__ambient" aria-hidden="true"/>
  <div className="opening__intro"><span><i/> {tr?"BAĞIMSIZ TASARIM & YAZILIM":"INDEPENDENT DESIGN & SOFTWARE"}</span><span>VOL. 01 / {apps.length} {tr?"UYGULAMA":"APPS"}</span></div>
  <div className="opening__headline"><p className="opening__eyebrow">SAYBIR STUDIO — 01</p><h1>{tr?<>Bir fikir.<br/>Bir başka<br/><em>dünya.</em></>:<>One idea.<br/>Another<br/><em>world.</em></>}</h1><div className="opening__lower"><p>{tr?"Hayatın içinden fikirleri, kendi dünyası olan dijital deneyimlere dönüştürüyorum.":"Turning ideas from everyday life into digital experiences with a world of their own."}</p><a href="#uygulamalar"><span>{tr?"Dünyaları keşfet":"Explore the worlds"}</span><b>↘</b></a></div></div>
  <div className="opening__gallery" aria-label={tr?"Uygulama koleksiyonu":"App collection"}><div className="opening__orbit">{featured.map((slug,i)=>{const app=apps.find(a=>a.slug===slug)!;return <a className={`opening__tile opening__tile--${i}`} href={`#story-${slug}`} key={slug} aria-label={app.name}><Image src={app.image} alt="" width={256} height={256} priority={i<5} sizes="(max-width:700px) 25vw,15vw"/><span>{app.name}<b>↗</b></span></a>})}</div></div>
  <div className="opening__footer"><span>{String(apps.length).padStart(2,'0')} {tr?"UYGULAMA. TEK BİR BAKIŞ AÇISI.":"APPS. ONE INDEPENDENT PERSPECTIVE."}</span><span>iOS / macOS / Android</span><a href="#uygulamalar">{tr?"KAYDIR":"SCROLL"} <b>↓</b></a></div>
 </section>
}
