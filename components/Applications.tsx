"use client";
import Image from "next/image";
import Link from "next/link";
import { useSitePreferences } from "./SitePreferences";
import { useSceneProgress } from "./useSceneProgress";
import "./Applications.css";

const stories = [
  { slug: "velomate", name: "VeloMate", tag: ["HAREKETİN İZİ", "MADE TO MOVE"], title: ["Yol senin.", "Find your way."], text: ["Yeni rotalar keşfet. Her sürüşü kaydet. Yolculuğunu kendi ritminde yaşa.", "Discover new routes. Keep every ride. Make the journey your own."], screens: [0,1], meta: "01 / HEALTH & FITNESS" },
  { slug: "history", name: "HiStory", tag: ["MERAKIN İZİNDE", "FOLLOW YOUR CURIOSITY"], title: ["Geçmişe açılan\nbir pencere.", "A window\ninto the past."], text: ["Büyük hikâyeler, küçük keşiflerle başlar. Her gün tarihin başka bir yüzüyle tanış.", "Great stories begin with small discoveries. Meet another side of history, every day."], screens: [0,1], meta: "02 / EDUCATION" },
  { slug: "melodymap", name: "Melody Map", tag: ["KENDİ FREKANSINDA", "ON YOUR FREQUENCY"], title: ["Sıradaki şarkın,\nyeni bir dünya.", "Your next track.\nA new world."], text: ["Müzik zevkinden yola çık. Tanıdık hissettiren yeni sesler bul.", "Start with what you love. Find new sounds that feel like you."], screens: [0,2], meta: "03 / MUSIC" },
] as const;

function ProductStory({ story, index }: { story: typeof stories[number]; index: number }) {
  const ref = useSceneProgress();
  const { lang } = useSitePreferences();
  const l = lang === "tr" ? 0 : 1;
  return <article ref={ref} className={`story story--${story.slug}`}>
    <div className="story__stage">
      {index === 0 && <div className="story__landscape"><Image src="/films/velomate-landscape.webp" alt="" fill sizes="100vw" /></div>}
      <div className="story__number" aria-hidden="true">0{index + 1}</div>
      <div className="story__top"><span>{l === 0 ? ["01 / SAĞLIK VE FİTNESS", "02 / EĞİTİM", "03 / MÜZİK"][index] : story.meta}</span><span>SAYBIR / {l === 0 ? "SEÇİLİ İŞLER" : "SELECTED WORK"}</span></div>
      <div className="story__copy"><small>{story.tag[l]}</small><h2>{story.title[l].split("\n").map((line,i)=><span key={line}>{i>0&&<br/>}{line}</span>)}</h2><p>{story.text[l]}</p><Link href={`/apps/${story.slug}`}>{story.name} <span>↗</span></Link></div>
      <div className="story__screens">{story.screens.map((screen,i)=><figure className={`story__screen story__screen--${i}`} key={screen}><Image src={`/films/${story.slug}-${screen}.webp`} alt={`${story.name} — ${l===0 ? "uygulama ekranı" : "app screenshot"} ${i+1}`} width={960} height={2078} sizes="(max-width: 700px) 48vw, 25vw" /></figure>)}</div>
      <div className="story__bottom"><span>{story.name}</span><span>{l===0 ? "TASARLANDI. GELİŞTİRİLDİ. HAYATA GEÇTİ." : "DESIGNED. ENGINEERED. BROUGHT TO LIFE."}</span></div>
    </div>
  </article>;
}
export default function Applications() {
  return <section id="uygulamalar" className="product-stories">{stories.map((story,index)=><ProductStory key={story.slug} story={story} index={index}/>)}</section>;
}
