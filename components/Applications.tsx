"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Text from "./Text";
import { apps } from "@/data/apps";
import screens from "@/data/product-screens.json";
import { useSitePreferences } from "./SitePreferences";
import "./Applications.css";

const ProductWorld=dynamic(()=>import("./ProductWorld"),{ssr:false,loading:()=> <div className="world-loading" aria-hidden="true"><i/></div>});

export default function Applications(){
 const{lang}=useSitePreferences();const tr=lang==="tr";
 const[active,setActive]=useState(0),[indexOpen,setIndexOpen]=useState(false),[paused,setPaused]=useState(false),[ready,setReady]=useState(false),[showScreens,setShowScreens]=useState(false);
 const section=useRef<HTMLElement>(null),indexButton=useRef<HTMLButtonElement>(null);
 const app=apps[active];const images=(screens as Record<string,string[]>)[app.slug]??[];
 useEffect(()=>{const el=section.current;if(!el)return;const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){setReady(true);observer.disconnect()}},{rootMargin:"500px"});observer.observe(el);return()=>observer.disconnect()},[]);
 useEffect(()=>{const hash=()=>{const slug=location.hash.replace("#story-","");const i=apps.findIndex(a=>a.slug===slug);if(i>=0){setActive(i);setReady(true);section.current?.scrollIntoView({behavior:"instant"})}};hash();addEventListener("hashchange",hash);return()=>removeEventListener("hashchange",hash)},[]);
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
  <div className="work-stage">
   {ready&&<ProductWorld slug={app.slug} paused={paused}/>}
   <div className="work-vignette" aria-hidden="true"/>
   <header className="work-toolbar"><span>SAYBIR / {tr?"ÜRÜN DÜNYALARI":"PRODUCT WORLDS"}</span><div><button type="button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?(tr?"Hareketi başlat":"Play motion"):(tr?"Hareketi durdur":"Pause motion")}</button><button ref={indexButton} type="button" aria-expanded={indexOpen} aria-controls="work-index" onClick={()=>setIndexOpen(!indexOpen)}>{tr?"Tüm uygulamalar":"All apps"} <b>{indexOpen?"−":"+"}</b></button></div></header>
   <div className="work-selector"><button type="button" onClick={()=>choose(active-1)} aria-label={tr?"Önceki uygulama":"Previous app"}>←</button><span>{String(active+1).padStart(2,"0")} <i>/ {apps.length}</i></span><button type="button" onClick={()=>choose(active+1)} aria-label={tr?"Sonraki uygulama":"Next app"}>→</button></div>
   <div className="work-caption" key={app.slug} aria-live="polite"><span className="work-category"><Text>{app.category}</Text> — {tr?"BAĞIMSIZ ÜRÜN":"INDEPENDENT PRODUCT"}</span><h2>{app.name}</h2><div className="work-description"><p><Text>{app.description}</Text></p><div className="work-actions"><Link href={`/apps/${app.slug}`}>{tr?"Ürünü keşfet":"Explore product"} ↗</Link>{images.length>0&&<button type="button" onClick={()=>setShowScreens(!showScreens)} aria-expanded={showScreens} aria-controls="work-screens">{showScreens?(tr?"Ekranları kapat":"Close screens"):(tr?"Uygulama ekranları":"App screens")} {showScreens?"−":"+"}</button>}</div></div></div>
   <div className="work-bottom"><span>{tr?"ÜRÜNDEN İLHAM ALAN 3D SAHNE":"3D SCENE INSPIRED BY THE PRODUCT"}</span><span>{tr?"BAKIŞ AÇISINI DEĞİŞTİRMEK İÇİN KAYDIR":"SCROLL TO CHANGE THE PERSPECTIVE"} ↓</span></div>
   <div id="work-index" className="work-index" role="dialog" aria-modal="true" aria-label={tr?"Uygulama seç":"Choose an app"} hidden={!indexOpen}><div className="work-index-heading"><span>{tr?"BİR DÜNYA SEÇ":"CHOOSE A WORLD"}</span><button type="button" onClick={()=>{setIndexOpen(false);indexButton.current?.focus()}}>{tr?"Kapat":"Close"} ×</button></div><div className="work-index-grid">{apps.map((a,i)=><button type="button" key={a.slug} onClick={()=>choose(i)} aria-pressed={i===active}><small>{String(i+1).padStart(2,"0")}</small><span>{a.name}</span><b>↗</b></button>)}</div></div>
   <div className="work-screens" id="work-screens" role="dialog" aria-modal="true" aria-label={tr?"Uygulama ekranları":"App screens"} hidden={!showScreens}><div><span>{app.name} / {tr?"GERÇEK UYGULAMA EKRANLARI":"ACTUAL APP SCREENS"}</span><button type="button" onClick={()=>setShowScreens(false)}>{tr?"Kapat":"Close"} ×</button></div><div className="work-screen-strip">{images.map((src,i)=><Image key={src} src={src} width={960} height={2078} alt={`${app.name} — ${tr?"ekran":"screen"} ${i+1}`} sizes="(max-width:700px) 60vw,25vw"/>)}</div></div>
  </div>
 </section>
}
