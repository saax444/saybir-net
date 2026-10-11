"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { apps } from "@/data/apps";
import screens from "@/data/product-screens.json";
import { useSitePreferences } from "./SitePreferences";

export default function ProductArtwork({slug,paused}:{slug:string;paused:boolean}) {
 const host=useRef<HTMLDivElement>(null);
 const {lang}=useSitePreferences();
 const app=apps.find(item=>item.slug===slug)!;
 const images=(screens as Record<string,string[]>)[slug]??[];
 useEffect(()=>{
  const el=host.current;if(!el)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
  const update=()=>{cancelAnimationFrame(frame);if(paused||reduced.matches)return;frame=requestAnimationFrame(()=>{
   const section=el.closest('.work-theatre');if(!section)return;
   const progress=Math.max(0,Math.min(1,-section.getBoundingClientRect().top/Math.max(1,section.clientHeight-innerHeight)));
   el.style.setProperty('--travel',`${progress*36}px`);el.style.setProperty('--zoom',`${1+progress*.065}`);
  })};
  update();addEventListener('scroll',update,{passive:true});reduced.addEventListener('change',update);
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',update);reduced.removeEventListener('change',update)};
 },[paused,slug]);
 return <div ref={host} className={`product-artwork ${images.length?`has-screens ${images.length===1?'single-screen':''}`:'brand-artwork'}`} data-world={slug} data-paused={paused} style={{'--product-accent':app.accent} as CSSProperties}>
  <div className="artwork-light" aria-hidden="true"/>
  <div className="artwork-composition">
   {images.length?<div className="artwork-prints">{images.slice(0,3).map((src,i)=><figure key={src} className={`artwork-print artwork-print--${i}`}><Image src={src} alt={`${app.name} — ${lang==='tr'?'uygulama ekranı':'app screen'} ${i+1}`} width={960} height={2078} sizes="(max-width:800px) 45vw, 24vw" loading={i===0?'eager':'lazy'}/></figure>)}</div>:<div className="artwork-identity"><div className="artwork-identity-ring"/><Image src={app.image} alt={app.name} width={512} height={512} sizes="(max-width:800px) 48vw, 25vw"/><span>{app.name}</span><small>{lang==='tr'?'SAYBIR KOLEKSİYONU':'THE SAYBIR COLLECTION'}</small></div>}
  </div>
  <div className="artwork-note"><span>{images.length?(lang==='tr'?'UYGULAMANIN İÇİNDEN':'INSIDE THE APP'):(lang==='tr'?'ÜRÜN KİMLİĞİ':'PRODUCT IDENTITY')}</span><span>SAYBIR</span></div>
 </div>
}
