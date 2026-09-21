"use client";

import { useEffect, useRef, useState } from "react";
import { PreferenceControls, useSitePreferences } from "./SitePreferences";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const { lang } = useSitePreferences();
  const tr = lang === "tr";
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => { if (window.innerWidth > 720) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    window.addEventListener("resize", resize);
    return () => { document.removeEventListener("keydown", closeOnEscape); document.removeEventListener("pointerdown", closeOutside); window.removeEventListener("resize", resize); };
  }, [open]);
  return <header className="site-header" ref={header}>
    <div className="container header-inner">
      <a className="cinematic-logo" href="#top" aria-label="SAYBIR"><span className="logo-mark">S</span><strong>SAYBIR</strong></a>
      <PreferenceControls />
      <button ref={toggle} type="button" className="menu-toggle" aria-label={tr ? (open ? "Menüyü kapat" : "Menüyü aç") : (open ? "Close menu" : "Open menu")} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      <nav id="site-navigation" aria-label={tr ? "Ana menü" : "Main navigation"} className={open ? "nav nav-open" : "nav"} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
        <a href="#uygulamalar" onClick={() => setOpen(false)}>{tr ? "Uygulamalar" : "Apps"}</a>
        <a href="#platformlar" onClick={() => setOpen(false)}>{tr ? "Platformlar" : "Platforms"}</a>
        <a href="#hizmetler" onClick={() => setOpen(false)}>{tr ? "Stüdyo" : "Studio"}</a>
        <a className="nav-cta" href="#iletisim" onClick={() => setOpen(false)}>{tr ? "İletişim" : "Contact"} <span>↗</span></a>
      </nav>
    </div>
  </header>;
}
