"use client";
import Text from "@/components/Text";

import { CSSProperties,useEffect,useRef,useState } from "react";
import Link from "next/link";
import { apps } from "@/data/apps";
import "./Applications.css";

export default function Applications(){
 const root=useRef<HTMLElement>(null),featured=apps.slice(0,8); const [active,setActive]=useState(0);
 useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1),p=Math.max(0,Math.min(.9999,-r.top/d)),raw=p*featured.length,i=Math.min(featured.length-1,Math.floor(raw));el.style.setProperty("--seq",String(p));el.style.setProperty("--beat",String(raw-Math.floor(raw)));setActive(i)};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});addEventListener("resize",on);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on);removeEventListener("resize",on)}},[featured.length]);
 const app=featured[active];
 return <section ref={root} className="productFilm" id="uygulamalar" style={{"--accent":app.accent} as CSSProperties}><div className="productFilm__sticky">
   <div className="productFilm__color"/><div className="productFilm__beam"/>
   <div className="productFilm__ghost" key={"g"+app.slug}><img src={app.image} alt=""/></div>
   <div className="productFilm__visual" key={"v"+app.slug}><div className="productFilm__shadow"/><img src={app.image} alt=""/></div>
   <div className="productFilm__content container">
    <div className="productFilm__index"><span>{String(active+1).padStart(2,"0")}</span><i/><span>{String(featured.length).padStart(2,"0")}</span></div>
    <small><Text>{app.category}</Text><Text>{" / INDEPENDENT PRODUCT"}</Text></small><h2><Text>{app.name}</Text></h2><p><Text>{app.description}</Text></p><Link href={"/apps/"+app.slug}><Text>{"DISCOVER PRODUCT "}</Text><b>↗</b></Link>
   </div>
   <a className="film-skip" href="#koleksiyon"><Text>Tüm uygulamalar</Text> ↓</a><div className="productFilm__names">{featured.map((x,i)=><button type="button" key={x.slug} aria-pressed={i===active} onClick={()=>{const el=root.current;if(!el)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){setActive(i);return;}window.scrollTo({top:el.offsetTop+(el.offsetHeight-innerHeight)*(i+.5)/featured.length,behavior:"instant"})}} className={i===active?"active":""}>{String(i+1).padStart(2,"0")} <Text>{x.name}</Text></button>)}</div>
   <div className="productFilm__counter container"><span><Text>{"THE COLLECTION"}</Text></span><i><b style={{width:((active+1)/featured.length*100)+"%"}}/></i><span><Text>{"SCROLL"}</Text></span></div>
 </div></section>
}