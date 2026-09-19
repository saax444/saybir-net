"use client";
import { CSSProperties,useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null);
 const featured=apps.slice(0,6);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect();const travel=Math.max(el.offsetHeight-innerHeight,1);el.style.setProperty("--p",String(Math.max(0,Math.min(1,-r.top/travel))))};const scroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",scroll,{passive:true});addEventListener("resize",scroll);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",scroll);removeEventListener("resize",scroll)}},[]);
 return <section ref={root} className="hero" id="top"><div className="hero-sticky">
   <div className="cinema-sky"/><div className="cinema-haze h1"/><div className="cinema-haze h2"/><div className="cinema-floor"><i/><i/><i/><i/><i/></div>
   <div className="hero-copy container">
    <div className="hero-kicker"><span>INDEPENDENT SOFTWARE STUDIO</span><i/><span>PRODUCT / DESIGN / ENGINEERING</span></div>
    <h1><span>Digital products.</span><em>Built to be felt.</em></h1>
    <div className="hero-deck"><p>Native software across iOS, macOS and Android — designed as experiences, not utilities.</p><a href="#uygulamalar">EXPLORE THE WORK <b>↘</b></a></div>
   </div>
   <div className="object-stage">
    <div className="stage-light"/>
    <div className="hero-device">
      <div className="device-side"/><div className="device-island"/><div className="device-screen">
       <div className="screen-sheen"/>
       <small>SAYBIR / SELECTED</small><strong>Make<br/>software<br/><i>matter.</i></strong><span>01 — 06</span>
      </div>
    </div>
    {featured.map((a,i)=><div key={a.slug} className={"floating-product fp"+i} style={{"--accent":a.accent} as CSSProperties}><img src={a.image} alt=""/></div>)}
   </div>
   <div className="hero-index container"><span>01 / OPENING</span><div><i/> SCROLL TO MOVE CAMERA</div><span>2026</span></div>
 </div></section>
}