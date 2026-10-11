"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { apps } from "@/data/apps";

export default function ProductArtwork({slug,paused}:{slug:string;paused:boolean}) {
 const host=useRef<HTMLDivElement>(null);
 const app=apps.find(item=>item.slug===slug)!;
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
 return <div ref={host} className="product-artwork brand-artwork" data-world={slug} data-paused={paused} style={{'--product-accent':app.accent} as CSSProperties}>
  <div className="artwork-light" aria-hidden="true"/>
  <div className="artwork-wordmark" aria-hidden="true">{app.name}</div>
  <div className="artwork-composition">
   <div className="artwork-orbit" aria-hidden="true"/>
   <div className="artwork-identity"><div className="artwork-emblem"><Image src={app.image} alt={app.name} width={512} height={512} sizes="(max-width:800px) 46vw, 23vw" loading="eager"/></div></div>
   <div className="artwork-horizon" aria-hidden="true"/>
  </div>
 </div>
}
