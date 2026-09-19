"use client";
import { CSSProperties,useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null);
 const featured=apps.slice(0,5);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect();const travel=Math.max(el.offsetHeight-innerHeight,1);el.style.setProperty("--p",String(Math.max(0,Math.min(1,-r.top/travel))))};const scroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",scroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",scroll)}},[]);
 return <section ref={root} className="hero" id="top"><div className="hero-sticky">
   <div className="hero-bg"/><div className="hero-spot"/>
   <div className="hero-copy container">
    <div className="hero-kicker">INDEPENDENT SOFTWARE STUDIO <i/> iOS · macOS · Android</div>
    <h1>We make software<br/><em>worth opening.</em></h1>
    <div className="hero-bottom-copy"><p>Independent products, designed and engineered from idea to release.</p><a href="#uygulamalar">SELECTED WORK <b>↘</b></a></div>
   </div>
   <div className="showcase" aria-hidden="true">
    <div className="showcase-shadow"/>
    <div className="showcase-card back-card"><span>PRODUCT<br/>SYSTEMS</span></div>
    <div className="showcase-phone">
      <div className="phone-island"/><div className="phone-screen"><small>SAYBIR</small><strong>Selected<br/>products.</strong><span>Scroll to explore</span></div>
    </div>
    {featured.map((a,i)=><div className={"app-object ao"+i} key={a.slug} style={{"--accent":a.accent} as CSSProperties}><img src={a.image} alt=""/></div>)}
   </div>
   <div className="hero-foot container"><span>PRODUCT / DESIGN / ENGINEERING</span><span>01 — OPENING</span></div>
 </div></section>
}