"use client";
import { CSSProperties,useEffect,useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null); const reel=apps.slice(0,5);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1),p=Math.max(0,Math.min(1,-r.top/d));el.style.setProperty("--film",String(p))};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});addEventListener("resize",on);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on);removeEventListener("resize",on)}},[]);
 return <section ref={root} className="opening" id="top"><div className="opening__sticky">
   <div className="opening__wash"/><div className="opening__flare"/>
   <div className="opening__reel" aria-hidden="true">
    {reel.map((app,i)=><div className={"opening__plate opening__plate--"+i} key={app.slug} style={{"--tone":app.accent} as CSSProperties}><div className="opening__plateGlow"/><img src={app.image} alt=""/></div>)}
   </div>
   <div className="opening__frame container">
    <div className="opening__top"><span>SAYBIR®</span><span>INDEPENDENT SOFTWARE STUDIO</span><span>PRODUCTS / EXPERIENCES / SYSTEMS</span></div>
    <div className="opening__copy opening__copy--a"><small>01 — OPENING FRAME</small><h1>Software<br/>should feel<br/><em>alive.</em></h1><p>We create independent digital products with a point of view — from first idea to release.</p></div>
    <div className="opening__copy opening__copy--b"><small>02 — THE WORK</small><h2>Seventeen<br/>products.<br/><em>One studio.</em></h2><a href="#uygulamalar">ENTER THE COLLECTION <b>↓</b></a></div>
    <div className="opening__side"><span>SCROLL</span><i><b/></i><span>02</span></div>
    <div className="opening__foot"><span>DESIGNED & ENGINEERED BY SAYBIR</span><span>↓ DIRECT THE SEQUENCE</span></div>
   </div>
 </div></section>
}