"use client";
import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import ProductArtwork from "./ProductArtwork";
import { apps, type AppInfo } from "@/data/apps";
import screens from "@/data/product-screens.json";
import { useSitePreferences } from "./SitePreferences";
import { useSceneProgress } from "./useSceneProgress";
import "./Applications.css";

function ProductStory({ app, index }: { app: AppInfo; index: number }) {
 const ref=useSceneProgress();const{lang}=useSitePreferences();const tr=lang==="tr";
 const images=(screens as Record<string,string[]>)[app.slug]??[];
 const next=apps[index+1];
 return <article ref={ref} id={`story-${app.slug}`} className={`story story--${index%3} ${images.length?"story--screen":"story--art"}`}>
 <div className="story__stage">
  <div className="story__rail"><span>{String(index+1).padStart(2,"0")} / {String(apps.length).padStart(2,"0")}</span><span><Text>{app.category}</Text></span><a href="#product-index">{tr?"DİZİN":"INDEX"} ↗</a></div>
  <div className="story__camera" aria-hidden="true">
   <div className="story__primary">{images.length?<Image src={images[0]} alt="" width={960} height={2078} sizes="(max-width:700px) 90vw,60vw"/>:<ProductArtwork slug={app.slug}/>}</div>
   {images[1]&&<div className="story__secondary"><Image src={images[1]} alt="" width={960} height={2078} sizes="(max-width:700px) 50vw,25vw"/></div>}
  </div>
  <div className="story__opening"><span>{tr?"BAĞIMSIZ BİR SAYBIR ÜRÜNÜ":"AN INDEPENDENT SAYBIR PRODUCT"}</span><strong>{app.name}</strong><button type="button" className="story__scroll" onClick={()=>{const el=ref.current;if(el)window.scrollTo({top:el.getBoundingClientRect().top+scrollY+(el.offsetHeight-innerHeight)*.72,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}}>{tr?"İÇERİ GİR":"LOOK INSIDE"} ↓</button></div>
  <div className="story__copy"><small>{String(index+1).padStart(2,"0")} — <Text>{app.category}</Text></small><h2>{app.name}</h2><p><Text>{app.description}</Text></p><Link href={`/apps/${app.slug}`}>{tr?"Ürünü keşfet":"Discover the product"}<span>↗</span></Link><span className="story__source">{images.length?(tr?"UYGULAMADAN GERÇEK EKRANLAR":"ACTUAL APP SCREENS"):(tr?"ÜRÜNE ÖZEL GÖRSEL YORUM":"ORIGINAL PRODUCT ARTWORK")}</span></div>
  <div className="story__foot"><span>{tr?"FİKİR → DENEYİM":"IDEA → EXPERIENCE"}</span><i><b/></i><a href={next?`#story-${next.slug}`:"#koleksiyon"}>{next?`${tr?"SONRAKİ":"NEXT"} / ${next.name}`:(tr?"TÜM ÜRÜNLER":"ALL PRODUCTS")} ↓</a></div>
 </div></article>;
}
export default function Applications(){const{lang}=useSitePreferences();return <section id="uygulamalar" className="product-stories"><div className="product-index container" id="product-index"><div className="product-index__heading"><span>01 — {lang==="tr"?"BAĞIMSIZ ÜRÜNLER":"INDEPENDENT PRODUCTS"}</span><h2>{lang==="tr"?<>Bir fikirden.<br/>Hayatın içine.</>:<>From an idea.<br/>Into everyday life.</>}</h2><p>{lang==="tr"?"Bir ürün seç. Hikâyesinin içine gir.":"Choose a product. Step inside its story."}</p></div><nav aria-label={lang==="tr"?"Ürün hikâyeleri":"Product stories"}>{apps.map((app,i)=><a key={app.slug} href={`#story-${app.slug}`}><small>{String(i+1).padStart(2,"0")}</small>{app.name}<span>↘</span></a>)}</nav></div>{apps.map((app,index)=><ProductStory key={app.slug} app={app} index={index}/>)}</section>}
