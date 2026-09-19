"use client";
import { useEffect, useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";
export default function Hero(){
 const hero=useRef<HTMLElement>(null),featured=apps.slice(0,5);
 useEffect(()=>{let raf=0;const tick=()=>{const el=hero.current;if(!el)return;const r=el.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(innerHeight*.95)));el.style.setProperty("--hero-scroll",String(p))};const scroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(tick)};tick();addEventListener("scroll",scroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",scroll)}},[]);
 return <section ref={hero} className="hero" id="top"><div className="hero-film"/><div className="hero-light"/><div className="hero-vignette"/>
 <div className="container hero-copy"><div className="hero-index"><span>01 / 04</span><i/><b>Independent digital studio</b></div><h1><span>We build</span><br/><em>digital worlds.</em></h1><div className="hero-sub"><p>Native products for Apple and Android ecosystems. Designed with restraint. Engineered for speed.</p><a href="#uygulamalar">View selected work <b>↓</b></a></div></div>
 <div className="hero-product"><div className="hero-orb"/><div className="hero-mac"><div className="mac-lid"><div className="mac-screen"><span>SAYBIR / 2026</span><strong>Designed<br/>to feel<br/><i>inevitable.</i></strong><small>macOS</small></div></div><div className="mac-base"/></div><div className="hero-phone"><div className="hp-island"/><div className="hp-screen"><small>SAYBIR</small><strong>Build<br/>different.</strong><i>iOS / Android</i></div></div>{featured.map((a,i)=><div className={"hero-app ha"+i} key={a.slug}><img src={a.image} alt=""/></div>)}</div>
 <div className="hero-foot container"><span>FRANKFURT · ISTANBUL</span><div><b>iOS</b><i/>macOS<i/>Android</div><span>SCROLL TO ENTER</span></div></section>
}