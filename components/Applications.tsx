"use client";
import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import { apps, type AppInfo } from "@/data/apps";
import screens from "@/data/product-screens.json";
import { useSitePreferences } from "./SitePreferences";
import { useSceneProgress } from "./useSceneProgress";
import "./Applications.css";

function ProductStory({app,index}:{app:AppInfo;index:number}){
 const ref=useSceneProgress();const{lang}=useSitePreferences();const tr=lang==="tr";const images=(screens as Record<string,string[]>)[app.slug]??[];
 return <article ref={ref} id={`story-${app.slug}`} className={`story story--tone-${index%3}`}><div className="story__stage">
 <div className="story__number" aria-hidden="true">{String(index+1).padStart(2,"0")}</div>
 <div className="story__top"><span>{String(index+1).padStart(2,"0")} / <Text>{app.category}</Text></span><a href="#product-index">{tr?"TÜM UYGULAMALAR":"ALL APPS"} ↑</a></div>
 <div className="story__copy"><small>SAYBIR / {tr?"BAĞIMSIZ ÜRÜNLER":"INDEPENDENT PRODUCTS"}</small><h2>{app.name}</h2><p><Text>{app.description}</Text></p><Link href={`/apps/${app.slug}`}>{tr?"Uygulamayı keşfet":"Explore the app"}<span>↗</span></Link></div>
 {images.length>0?<div className="story__screens">{images.slice(0,2).map((src,i)=><figure className={`story__screen story__screen--${i}`} key={src}><Image src={src} alt={`${app.name} — ${tr?"uygulama ekranı":"app screenshot"} ${i+1}`} width={960} height={2078} sizes="(max-width:700px) 48vw,25vw"/></figure>)}</div>:<div className="story__identity"><Image src={app.image} alt="" width={80} height={80}/><span><Text>{app.category}</Text></span><strong>{app.name}</strong><p><Text>{app.status}</Text></p></div>}
 <div className="story__bottom"><span>{app.name}</span><span>{String(index+1).padStart(2,"0")} / {apps.length}</span></div>
 </div></article>
}
export default function Applications(){const{lang}=useSitePreferences();return <section id="uygulamalar" className="product-stories"><div className="product-index container" id="product-index"><span>{lang==="tr"?"ÜRÜNLER / 18 UYGULAMA":"PRODUCTS / 18 APPS"}</span><h2>{lang==="tr"?"Her biri, başka bir fikir.":"Each one, a different idea."}</h2><nav aria-label={lang==="tr"?"Ürün hikâyeleri":"Product stories"}>{apps.map((app,i)=><a key={app.slug} href={`#story-${app.slug}`}><small>{String(i+1).padStart(2,"0")}</small>{app.name}<span>↗</span></a>)}</nav></div>{apps.map((app,index)=><ProductStory key={app.slug} app={app} index={index}/>)}</section>}
