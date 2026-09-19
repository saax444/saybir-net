"use client";
import { useEffect,useRef } from "react";
import "./Hero.css";

export default function Hero(){
 const hero=useRef<HTMLElement>(null);
 useEffect(()=>{let raf=0;const update=()=>{const el=hero.current;if(!el)return;const r=el.getBoundingClientRect();const p=Math.max(0,Math.min(1,-r.top/(innerHeight*.85)));el.style.setProperty("--p",String(p))};const onScroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",onScroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",onScroll)}},[]);
 return <section ref={hero} className="hero" id="top">
   <div className="hero-light hero-light-a"/><div className="hero-light hero-light-b"/><div className="hero-depth"/>
   <div className="hero-scene container">
     <div className="hero-meta"><span>INDEPENDENT SOFTWARE STUDIO</span><span>01 — 04</span></div>
     <div className="hero-lockup">
       <div className="hero-word" aria-label="SAYBIR"><span>S</span><span>A</span><span>Y</span><span>B</span><span>I</span><span>R</span></div>
       <div className="hero-rule"/>
       <div className="hero-statement"><p>We create focused software for the devices people use every day.</p><strong>iOS&nbsp;&nbsp;·&nbsp;&nbsp;macOS&nbsp;&nbsp;·&nbsp;&nbsp;Android</strong></div>
     </div>
     <div className="hero-chapter"><span>PRODUCT / DESIGN / ENGINEERING</span><a href="#uygulamalar">ENTER SELECTED WORK <b>↘</b></a></div>
   </div>
   <div className="hero-transition"><div className="transition-core"/><div className="transition-ring r1"/><div className="transition-ring r2"/></div>
 </section>
}