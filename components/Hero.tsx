"use client";
import Text from "@/components/Text";

import { CSSProperties,useEffect,useRef,useState } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null); const [secondFrame,setSecondFrame]=useState(false); const reel=apps.slice(0,5);
 useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1),p=Math.max(0,Math.min(1,-r.top/d));el.style.setProperty("--film",String(p));setSecondFrame(p>.6)};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});addEventListener("resize",on);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on);removeEventListener("resize",on)}},[]);
 return <section ref={root} className="opening" id="top"><div className="opening__sticky">
   <div className="opening__wash"/><div className="opening__flare"/>
   <div className="opening__reel" aria-hidden="true">
    {reel.map((app,i)=><div className={"opening__plate opening__plate--"+i} key={app.slug} style={{"--tone":app.accent} as CSSProperties}><div className="opening__plateGlow"/><img src={app.image} alt=""/></div>)}
   </div>
   <div className="opening__frame container">
    <div className="opening__top"><span><Text>{"SAYBIR"}</Text></span><span><Text>{"INDEPENDENT SOFTWARE STUDIO"}</Text></span><span><Text>{"PRODUCTS / EXPERIENCES / SYSTEMS"}</Text></span></div>
    <div className="opening__copy opening__copy--a"><small><Text>{"01 — OPENING FRAME"}</Text></small><h1><Text>{"Software"}</Text><br/><Text>{"should feel"}</Text><br/><em><Text>{"alive."}</Text></em></h1><p><Text>{"We create independent digital products with a point of view — from first idea to release."}</Text></p></div>
    <div className="opening__copy opening__copy--b" aria-hidden={!secondFrame} inert={!secondFrame}><small><Text>{"02 — THE WORK"}</Text></small><h2><Text>{"Independent"}</Text><br/><Text>{"products."}</Text><br/><em><Text>{"One studio."}</Text></em></h2><a href="#koleksiyon"><Text>{"ENTER THE COLLECTION "}</Text><b>↓</b></a></div>
    <div className="opening__side"><span><Text>{"SCROLL"}</Text></span><i><b/></i><span>02</span></div>
    <div className="opening__foot"><span><Text>{"DESIGNED & ENGINEERED BY SAYBIR"}</Text></span><span><Text>{"↓ DIRECT THE SEQUENCE"}</Text></span></div>
   </div>
 </div></section>
}