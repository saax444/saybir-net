"use client";

import { useEffect, useRef } from "react";
import { apps } from "@/data/apps";
import "./Hero.css";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const featured = apps.slice(0, 7);
  useEffect(() => {
    const stage=stageRef.current; if(!stage) return;
    const move=(e:PointerEvent)=>{stage.style.setProperty("--mx",`${(e.clientX/window.innerWidth-.5)*24}px`);stage.style.setProperty("--my",`${(e.clientY/window.innerHeight-.5)*18}px`)};
    window.addEventListener("pointermove",move,{passive:true}); return()=>window.removeEventListener("pointermove",move);
  },[]);
  return <section className="hero" id="top">
    <div className="cinema-vignette"/><div className="cinema-grain"/><div className="cinema-beam"/>
    <div className="hero-copy container">
      <div className="hero-kicker"><span>Independent software studio</span><b>Est. 2026</b></div>
      <h1>Ideas become<br/><em>experiences.</em></h1>
      <p>iOS, macOS ve Android için tasarım, mühendislik ve ürün düşüncesini tek bir deneyimde buluşturan bağımsız yazılım stüdyosu.</p>
      <div className="hero-actions"><a href="#uygulamalar">Explore the work <span>↘</span></a><a href="#iletisim">Start a project ↗</a></div>
    </div>
    <div className="stage" ref={stageRef}>
      <div className="stage-halo"/><div className="stage-disc disc-a"/><div className="stage-disc disc-b"/>
      <div className="device device-back"><div className="device-screen"><span>macOS</span><strong>SAYBIR</strong><small>DESIGNED FOR FOCUS</small></div></div>
      <div className="device device-front"><div className="phone-island"/><div className="phone-screen"><span className="screen-label">SAYBIR / MOBILE</span><strong>Make<br/>something<br/><i>meaningful.</i></strong><small>iOS · ANDROID</small></div></div>
      {featured.map((app,i)=><div className={`floating-app fa-${i+1}`} key={app.slug}><img src={app.image} alt=""/></div>)}
    </div>
    <div className="hero-platform-strip"><span>Native experiences</span><div>iOS</div><i/><div>macOS</div><i/><div>Android</div></div>
    <div className="scroll-cue"><span>SCROLL</span><b/></div>
  </section>;
}