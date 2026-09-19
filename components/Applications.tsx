"use client";
import { CSSProperties,useEffect,useRef,useState } from "react";
import Link from "next/link";
import { apps } from "@/data/apps";
import "./Applications.css";
export default function Applications(){
 const root=useRef<HTMLElement>(null),featured=apps.slice(0,8);const [active,setActive]=useState(0);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1),p=Math.max(0,Math.min(.9999,-r.top/d)),i=Math.min(featured.length-1,Math.floor(p*featured.length));el.style.setProperty("--ap",String(p));el.style.setProperty("--local",String((p*featured.length)%1));setActive(i)};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on)}},[featured.length]);
 const app=featured[active];
 return <section ref={root} className="archive" id="uygulamalar" style={{"--accent":app.accent} as CSSProperties}><div className="archive__sticky">
   <div className="archive__ambient"/><div className="archive__grid"/>
   <div className="archive__top container"><span>THE PRODUCT ARCHIVE</span><span>{String(active+1).padStart(2,"0")} / {String(featured.length).padStart(2,"0")}</span></div>
   <div className="archive__copy container" key={app.slug}><small>{app.category} / SAYBIR PRODUCT</small><h2>{app.name}</h2><p>{app.description}</p><Link href={"/apps/"+app.slug}>VIEW PRODUCT <b>↗</b></Link></div>
   <div className="archive__stage" aria-hidden="true">
    <div className="archive__halo"/>
    <div className="archive__card archive__card--rear"><span>{String(active+1).padStart(2,"0")}</span></div>
    <div className="archive__card archive__card--main" key={"card"+app.slug}><img src={app.image} alt=""/><i/><strong>{app.name}</strong><small>{app.category}</small></div>
    <div className="archive__card archive__card--front"><span>SAYBIR®</span></div>
   </div>
   <div className="archive__strip">{featured.map((x,i)=><div key={x.slug} className={i===active?"is-active":""}><span>{String(i+1).padStart(2,"0")}</span><b>{x.name}</b></div>)}</div>
   <div className="archive__progress"><i style={{width:((active+1)/featured.length*100)+"%"}}/></div>
 </div></section>
}