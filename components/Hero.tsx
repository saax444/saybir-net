"use client";
import { CSSProperties,useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null);
 const featured=apps.slice(0,5);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect();const travel=Math.max(el.offsetHeight-innerHeight,1);el.style.setProperty("--sbHeroP",String(Math.max(0,Math.min(1,-r.top/travel))))};const scroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",scroll,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",scroll)}},[]);
 return <section ref={root} className="sbHero" id="top"><div className="sbHero__sticky">
   <div className="sbHero__bg"/><div className="sbHero__beam"/>
   <div className="sbHero__copy container">
    <div className="sbHero__kicker"><span>INDEPENDENT SOFTWARE STUDIO</span><i/><span>iOS · macOS · Android</span></div>
    <h1><span>Products with</span><em>presence.</em></h1>
    <div className="sbHero__deck"><p>We design and engineer independent software from first idea to final release.</p><a href="#uygulamalar">VIEW SELECTED WORK <b>↘</b></a></div>
   </div>
   <div className="sbHero__stage" aria-hidden="true">
    <div className="sbHero__aura"/>
    <div className="sbHero__slab"><span>SAYBIR</span><small>PRODUCT / DESIGN / ENGINEERING</small></div>
    <div className="sbHero__phone"><div className="sbHero__island"/><div className="sbHero__screen"><small>SAYBIR / 01</small><strong>Ideas<br/>into<br/><i>products.</i></strong><span>SELECTED WORK</span></div></div>
    {featured.map((a,i)=><div className={"sbHero__app sbHero__app--"+i} key={a.slug} style={{"--sbAccent":a.accent} as CSSProperties}><img src={a.image} alt=""/></div>)}
   </div>
   <div className="sbHero__foot container"><span>01 / OPENING</span><span>SCROLL TO EXPLORE</span></div>
 </div></section>
}