"use client";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { apps } from "@/data/apps";
import "./Applications.css";
export default function Applications(){
 const section=useRef<HTMLElement>(null); const [active,setActive]=useState(0); const featured=apps.slice(0,8);
 useEffect(()=>{let raf=0;const update=()=>{const el=section.current;if(!el)return;const r=el.getBoundingClientRect();const travel=Math.max(el.offsetHeight-innerHeight,1);const p=Math.max(0,Math.min(1,-r.top/travel));el.style.setProperty("--progress",String(p));setActive(Math.min(featured.length-1,Math.floor(p*featured.length)));};const scroll=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",scroll,{passive:true});addEventListener("resize",scroll);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",scroll);removeEventListener("resize",scroll)}},[featured.length]);
 const app=featured[active];
 return <section ref={section} className="applications" id="uygulamalar"><div className="app-cinema-sticky">
 <div className="app-cinema-bg" style={{"--accent":app.accent} as CSSProperties}/><div className="app-cinema-grid"/>
 <div className="app-story-copy"><div className="story-count"><span>{String(active+1).padStart(2,"0")}</span><i/><span>{String(featured.length).padStart(2,"0")}</span></div><div className="story-meta">{app.category} · SAYBIR ORIGINAL</div><h2 key={"h"+app.slug}>{app.name}</h2><p key={"p"+app.slug}>{app.description}</p><Link href={"/apps/"+app.slug}>Explore application <b>↗</b></Link></div>
 <div className="phone-stage"><div className="phone-aura"/><div className="cinema-phone"><div className="cinema-phone-island"/><div className="cinema-phone-screen" style={{"--accent":app.accent} as CSSProperties}><div className="screen-top"><span>SAYBIR</span><small>{String(active+1).padStart(2,"0")}</small></div><div className="screen-app" key={app.slug}><img src={app.image} alt={app.name+" ikonu"}/><small>{app.category}</small><strong>{app.name}</strong><p>{app.description}</p></div><div className="screen-bottom"><span>Designed by Saybir</span><i/></div></div></div>
 {featured.map((item,i)=><div key={item.slug} className={"app-particle particle-"+i+" "+(i===active?"particle-active":"")} style={{"--accent":item.accent} as CSSProperties}><img src={item.image} alt=""/></div>)}</div>
 <div className="story-rail">{featured.map((item,i)=><span key={item.slug} className={i===active?"active":""}><i/></span>)}</div><div className="scroll-story-label">SCROLL TO DISCOVER <span>↓</span></div>
 </div></section>
}