"use client";
import Image from "next/image";
import { useSitePreferences } from "./SitePreferences";
import "./Hero.css";
const featured=[{slug:"velomate",name:"VeloMate"},{slug:"yemekolay",name:"Yemekolay"},{slug:"susadim",name:"Susadım"},{slug:"hilock",name:"HiLock"}];
export default function Hero(){
 const{lang}=useSitePreferences();const tr=lang==="tr";
 return <section className="opening" id="top">
  <div className="opening__intro"><span className="opening__label">SAYBIR — {tr?"BAĞIMSIZ DİJİTAL STÜDYO":"INDEPENDENT DIGITAL STUDIO"}</span><span className="opening__edition">iOS / macOS / Android</span></div>
  <div className="opening__headline"><h1>{tr?<>Gündelik hayat.<br/><span>Biraz daha iyi.</span></>:<>Everyday life.<br/><span>A little better.</span></>}</h1><div className="opening__lower"><p>{tr?"İyi düşünülmüş fikirler. Kullanmayı seveceğin uygulamalar. Her ayrıntısında bağımsız bir bakış.":"Thoughtful ideas. Apps you’ll love to use. An independent perspective in every detail."}</p><a href="#uygulamalar"><span>{tr?"İşleri keşfet":"Explore the work"}</span><b>↓</b></a></div></div>
  <div className="opening__screens">{featured.map((app,i)=><a key={app.slug} href={`#story-${app.slug}`} aria-label={app.name} className={`opening__project opening__project--${i}`}><div className="opening__project-top"><span>0{i+1} / {app.name}</span><b>↗</b></div><div className="opening__image"><Image src={`/films/${app.slug}-0.webp`} alt={app.name} width={960} height={2078} priority={i<2} sizes="(max-width:700px) 50vw,25vw"/></div></a>)}</div>
  <div className="opening__footer"><span>{tr?"FİKİRDEN EKRANA. ÖZENLE.":"FROM IDEA TO SCREEN. WITH CARE."}</span><span>{tr?"KAYDIR VE KEŞFET":"SCROLL TO EXPLORE"} ↓</span></div>
 </section>
}
