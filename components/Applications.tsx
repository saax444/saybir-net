"use client";
import { CSSProperties,useEffect,useRef,useState } from "react";
import Link from "next/link";
import { apps } from "@/data/apps";
import "./Applications.css";

export default function Applications(){
 const root=useRef<HTMLElement>(null),featured=apps.slice(0,8); const [active,setActive]=useState(0);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1),p=Math.max(0,Math.min(.9999,-r.top/d)),raw=p*featured.length,i=Math.min(featured.length-1,Math.floor(raw));el.style.setProperty("--seq",String(p));el.style.setProperty("--beat",String(raw-Math.floor(raw)));setActive(i)};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on)}},[featured.length]);
 const app=featured[active];
 return <section ref={root} className="productFilm" id="uygulamalar" style={{"--accent":app.accent} as CSSProperties}><div className="productFilm__sticky">
   <div className="productFilm__color"/><div className="productFilm__beam"/>
   <div className="productFilm__ghost" key={"g"+app.slug}><img src={app.image} alt=""/></div>
   <div className="productFilm__visual" key={"v"+app.slug}><div className="productFilm__shadow"/><img src={app.image} alt=""/></div>
   <div className="productFilm__content container" key={"c"+app.slug}>
    <div className="productFilm__index"><span>{String(active+1).padStart(2,"0")}</span><i/><span>{String(featured.length).padStart(2,"0")}</span></div>
    <small>{app.category} / INDEPENDENT PRODUCT</small><h2>{app.name}</h2><p>{app.description}</p><Link href={"/apps/"+app.slug}>DISCOVER PRODUCT <b>↗</b></Link>
   </div>
   <div className="productFilm__names">{featured.map((x,i)=><span key={x.slug} className={i===active?"active":""}>{String(i+1).padStart(2,"0")} {x.name}</span>)}</div>
   <div className="productFilm__counter container"><span>THE COLLECTION</span><i><b style={{width:((active+1)/featured.length*100)+"%"}}/></i><span>SCROLL</span></div>
 </div></section>
}