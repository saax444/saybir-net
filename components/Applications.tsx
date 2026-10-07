"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "./Text";
import { apps } from "@/data/apps";
import screens from "@/data/product-screens.json";
import { useSitePreferences } from "./SitePreferences";
import "./Applications.css";

export default function Applications(){
 const{lang}=useSitePreferences();const tr=lang==="tr";
 const[active,setActive]=useState(0),[indexOpen,setIndexOpen]=useState(false),[paused,setPaused]=useState(false),[showScreens,setShowScreens]=useState(false);
 const section=useRef<HTMLElement>(null),stage=useRef<HTMLDivElement>(null),indexButton=useRef<HTMLButtonElement>(null);
 const app=apps[active];const images=(screens as Record<string,string[]>)[app.slug]??[];
 const primary=app.slug==="kedilik"?images[2]:images[0];
 const secondary=app.slug==="kedilik"?images[1]:images[images.length-1];
 useEffect(()=>{const hash=()=>{const slug=location.hash.replace("#story-","");const i=apps.findIndex(a=>a.slug===slug);if(i>=0){setActive(i);setShowScreens(false);setIndexOpen(false);section.current?.scrollIntoView({behavior:"instant"})}};hash();addEventListener("hashchange",hash);return()=>removeEventListener("hashchange",hash)},[]);
 useEffect(()=>{
   const media=matchMedia("(prefers-reduced-motion: reduce)");
   let frame=0;
   const update=()=>{frame=0;const el=section.current,scene=stage.current;if(!el||!scene)return;
     const rect=el.getBoundingClientRect();
     const p=media.matches||paused?1:Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height-innerHeight)));
     scene.style.setProperty("--travel",String(p));
     scene.style.setProperty("--zoom",String(1.3-p*.3));
     scene.style.setProperty("--turn",`${-18+p*14}deg`);
     scene.style.setProperty("--spread",`${30+p*85}px`);
     scene.style.setProperty("--copy",String(.5+p*.5));
   };
   const request=()=>{if(!frame)frame=requestAnimationFrame(update)};
   update();addEventListener("scroll",request,{passive:true});addEventListener("resize",request);media.addEventListener("change",request);
   return()=>{cancelAnimationFrame(frame);removeEventListener("scroll",request);removeEventListener("resize",request);media.removeEventListener("change",request)};
 },[paused,active]);
 function choose(i:number){const next=(i+apps.length)%apps.length;setActive(next);setIndexOpen(false);setShowScreens(false);if(indexOpen)indexButton.current?.focus();history.replaceState(null,"",`#story-${apps[next].slug}`)}
 useEffect(()=>{
   if(!indexOpen&&!showScreens)return;
   const panel=document.getElementById(indexOpen?"work-index":"work-screens");
   const previous=document.activeElement as HTMLElement|null;
   panel?.querySelector<HTMLButtonElement>("button")?.focus();
   const keyboard=(e:KeyboardEvent)=>{
     if(e.key==="Escape"){setIndexOpen(false);setShowScreens(false);previous?.focus();}
     if(e.key==="Tab"&&panel){const buttons=Array.from(panel.querySelectorAll<HTMLElement>('button,a[href]'));const first=buttons[0],last=buttons[buttons.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}
   };addEventListener("keydown",keyboard);return()=>removeEventListener("keydown",keyboard);
 },[indexOpen,showScreens]);
 return <section className="work-theatre" id="uygulamalar" ref={section} aria-label={tr?"Uygulama deneyimleri":"App experiences"}>
  <div className="work-stage" ref={stage} data-paused={paused}>
   <div className="work-backdrop-name" aria-hidden="true" key={`name-${app.slug}`}>{app.name}</div>
   <div className="work-light" aria-hidden="true"/>
   <div className={`work-product-visual ${images.length?"":"work-product-visual--icon"} ${["ne-secsem","vibelens","kedilik"].includes(app.slug)?"work-product-visual--excerpt":""}`} key={`visual-${app.slug}`}>
    {images.length>1&&<div className="work-support" aria-hidden="true"><Image src={secondary} alt="" width={960} height={2078} sizes="(max-width:800px) 40vw,22vw"/></div>}
    <div className="work-float"><Image src={primary??app.image} alt={images.length?`${app.name} — ${tr?"uygulama ekranı":"app screen"}`:app.name} width={images.length?960:256} height={images.length?2078:256} sizes="(max-width:800px) 65vw,30vw"/></div>
   </div>
   <div className="work-vignette" aria-hidden="true"/>
   <header className="work-toolbar"><span>SAYBIR / {tr?"ÜRÜN DÜNYALARI":"PRODUCT WORLDS"}</span><div><button type="button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?(tr?"Hareketi başlat":"Play motion"):(tr?"Hareketi durdur":"Pause motion")}</button><button ref={indexButton} type="button" aria-expanded={indexOpen} aria-controls="work-index" onClick={()=>setIndexOpen(!indexOpen)}>{tr?"Tüm uygulamalar":"All apps"} <b>{indexOpen?"−":"+"}</b></button></div></header>
   <div className="work-scroll-cue" aria-hidden="true"><span>{tr?"KEŞFETMEK İÇİN KAYDIR":"SCROLL TO EXPLORE"}</span><i><b/></i><span>↓</span></div>
   <div className="work-selector"><button type="button" onClick={()=>choose(active-1)} aria-label={tr?"Önceki uygulama":"Previous app"}>←</button><span>{String(active+1).padStart(2,"0")} <i>/ {apps.length}</i></span><button type="button" onClick={()=>choose(active+1)} aria-label={tr?"Sonraki uygulama":"Next app"}>→</button></div>
   <div className="work-caption" key={`caption-${app.slug}`} aria-live="polite"><span className="work-category"><Text>{app.category}</Text> — {tr?"BAĞIMSIZ ÜRÜN":"INDEPENDENT PRODUCT"}</span><h2>{app.name}</h2><div className="work-description"><p><Text>{app.description}</Text></p><div className="work-actions"><Link href={`/apps/${app.slug}`}>{tr?"Ürünü keşfet":"Explore product"} ↗</Link>{images.length>0&&<button type="button" onClick={()=>setShowScreens(!showScreens)} aria-expanded={showScreens} aria-controls="work-screens">{showScreens?(tr?"Ekranları kapat":"Close screens"):(tr?"Uygulama ekranları":"App screens")} {showScreens?"−":"+"}</button>}</div></div></div>
   <div id="work-index" className="work-index" role="dialog" aria-modal="true" aria-label={tr?"Uygulama seç":"Choose an app"} hidden={!indexOpen}><div className="work-index-heading"><span>{tr?"BİR DÜNYA SEÇ":"CHOOSE A WORLD"}</span><button type="button" onClick={()=>{setIndexOpen(false);indexButton.current?.focus()}}>{tr?"Kapat":"Close"} ×</button></div><div className="work-index-grid">{apps.map((a,i)=><button type="button" key={a.slug} onClick={()=>choose(i)} aria-pressed={i===active}><small>{String(i+1).padStart(2,"0")}</small><span>{a.name}</span><b>↗</b></button>)}</div></div>
   <div className="work-screens" id="work-screens" role="dialog" aria-modal="true" aria-label={tr?"Uygulama ekranları":"App screens"} hidden={!showScreens}><div><span>{app.name} / {tr?"GERÇEK UYGULAMA EKRANLARI":"ACTUAL APP SCREENS"}</span><button type="button" onClick={()=>setShowScreens(false)}>{tr?"Kapat":"Close"} ×</button></div><div className="work-screen-strip">{images.map((src,i)=><Image key={src} src={src} width={960} height={2078} alt={`${app.name} — ${tr?"ekran":"screen"} ${i+1}`} sizes="(max-width:700px) 60vw,25vw"/>)}</div></div>
  </div>
 </section>
}
