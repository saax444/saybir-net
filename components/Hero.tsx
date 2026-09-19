"use client";
import { useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const hero=useRef<HTMLElement>(null);
 const featured=apps.slice(0,5);
 useEffect(()=>{let raf=0;const update=()=>{const el=hero.current;if(!el)return;const r=el.getBoundingClientRect();const p=Math.max(0,Math.min(1,-r.top/(innerHeight*.9)));el.style.setProperty("--p",String(p))};const onScroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",onScroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",onScroll)}},[]);
 return <section ref={hero} className="hero" id="top">
  <div className="hero-atmosphere"/><div className="hero-horizon"/>
  <div className="container hero-frame">
   <div className="hero-label"><span>INDEPENDENT SOFTWARE STUDIO</span><i/><span>APPLE · ANDROID</span></div>
   <div className="hero-copy">
    <h1>Software,<br/><em>with a point of view.</em></h1>
    <div className="hero-intro"><p>We design and engineer focused digital products for the screens people live with every day.</p><a href="#uygulamalar">Selected work <span>↘</span></a></div>
   </div>
  </div>
  <div className="product-ribbon" aria-hidden="true">
   <div className="ribbon-line"/>
   {featured.map((app,i)=><div className={"ribbon-app ra"+i} key={app.slug}><div className="ribbon-halo"/><img src={app.image} alt=""/><small>{String(i+1).padStart(2,"0")}</small></div>)}
  </div>
  <div className="container hero-footer"><span>SAYBIR / SELECTED PRODUCTS</span><span className="scroll-mark"><i/> SCROLL TO EXPLORE</span></div>
 </section>
}