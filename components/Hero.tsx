"use client";
import { useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const hero=useRef<HTMLElement>(null);
 const featured=apps.slice(0,7);
 useEffect(()=>{let raf=0;const tick=()=>{const el=hero.current;if(!el)return;const r=el.getBoundingClientRect();const p=Math.max(0,Math.min(1,-r.top/(innerHeight*.85)));el.style.setProperty("--p",String(p))};const onScroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(tick)};tick();addEventListener("scroll",onScroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",onScroll)}},[]);
 return <section ref={hero} className="hero" id="top">
   <div className="hero-aurora"/><div className="hero-beam"/>
   <div className="hero-stage container">
    <div className="hero-eyebrow"><span>SAYBIR / DIGITAL STUDIO</span><i/><span>2026</span></div>
    <div className="hero-title">
      <span className="hero-line line-a">IDEAS</span>
      <span className="hero-line line-b">BECOME</span>
      <span className="hero-line line-c">PRODUCTS.</span>
    </div>
    <p className="hero-manifesto">Independent software studio creating native experiences across <b>iOS</b>, <b>macOS</b> and <b>Android</b>.</p>
   </div>
   <div className="hero-portal">
     <div className="portal-glow"/>
     <div className="portal-window">
       <div className="portal-top"><span>SELECTED / PRODUCTS</span><span>07 OBJECTS</span></div>
       <div className="portal-track">{featured.map((a,i)=><div className={"portal-app p"+i} key={a.slug}><img src={a.image} alt=""/><span>{String(i+1).padStart(2,"0")}</span></div>)}</div>
       <div className="portal-word">SAYBIR</div>
     </div>
   </div>
   <div className="hero-bottom container"><span>FRANKFURT — ISTANBUL</span><a href="#uygulamalar">ENTER THE WORK <b>↓</b></a><span>APPLE / ANDROID</span></div>
 </section>
}