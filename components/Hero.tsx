"use client";
import { useEffect,useRef } from "react";
import "./Hero.css";

export default function Hero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{let raf=0;const update=()=>{const el=root.current;if(!el)return;const r=el.getBoundingClientRect(),d=Math.max(el.offsetHeight-innerHeight,1);el.style.setProperty("--p",String(Math.max(0,Math.min(1,-r.top/d))))};const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(update)};update();addEventListener("scroll",on,{passive:true});addEventListener("resize",on);return()=>{cancelAnimationFrame(raf);removeEventListener("scroll",on);removeEventListener("resize",on)}},[]);
 return <section ref={root} className="filmHero" id="top"><div className="filmHero__sticky">
   <div className="filmHero__world" aria-hidden="true">
    <div className="filmHero__horizon"/><div className="filmHero__sun"/>
    <div className="filmHero__plane filmHero__plane--a"/><div className="filmHero__plane filmHero__plane--b"/><div className="filmHero__plane filmHero__plane--c"/>
    <div className="filmHero__portal"><div className="filmHero__portalInner"><span>S</span></div></div>
   </div>
   <div className="filmHero__ui container">
    <div className="filmHero__meta"><span>SAYBIR®</span><span>INDEPENDENT SOFTWARE STUDIO</span><span>2026 / DIGITAL PRODUCTS</span></div>
    <div className="filmHero__shot filmHero__shot--1"><small>CHAPTER 01 / ORIGIN</small><h1>We build<br/>digital <em>worlds.</em></h1><p>Independent software conceived, designed and engineered as one continuous experience.</p></div>
    <div className="filmHero__shot filmHero__shot--2"><small>CHAPTER 02 / PRODUCTS</small><h2>Step inside<br/><em>the work.</em></h2><a href="#uygulamalar">ENTER THE ARCHIVE <b>↓</b></a></div>
    <div className="filmHero__rail"><span>01</span><i><b/></i><span>02</span></div>
    <div className="filmHero__scroll">SCROLL TO MOVE THROUGH THE FILM <i>↓</i></div>
   </div>
 </div></section>
}