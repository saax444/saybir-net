"use client";
import { useSitePreferences } from "./SitePreferences";
import { useSceneProgress } from "./useSceneProgress";
import "./Hero.css";
export default function Hero(){
 const ref=useSceneProgress();const{lang}=useSitePreferences();const tr=lang==="tr";
 return <section ref={ref} className="opening" id="top"><div className="opening__sticky">
 <div className="opening__rule" aria-hidden="true"/><div className="opening__edition"><span>{tr?"BAĞIMSIZ YAZILIM STÜDYOSU":"INDEPENDENT SOFTWARE STUDIO"}</span><span>iOS / macOS / Android</span></div>
 <div className="opening__title"><span className="opening__eyebrow">{tr?"FİKİRDEN HAYATA.":"FROM IDEA TO LIFE."}</span><h1>SAYBIR</h1><div className="opening__intro"><p>{tr?"İyi düşünülmüş.\nÖzenle geliştirilmiş.":"Thoughtfully designed.\nCarefully engineered."}</p><p>{tr?"Gündelik hayatın bir parçası olan bağımsız uygulamalar tasarlıyor ve geliştiriyorum.":"I design and build independent apps that become part of everyday life."}</p></div></div>
 <div className="opening__bottom"><span>DESIGN + ENGINEERING</span><a href="#uygulamalar">{tr?"UYGULAMALARI KEŞFET":"EXPLORE THE APPS"} <span>↓</span></a></div>
 </div></section>
}
