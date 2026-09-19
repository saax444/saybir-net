"use client";

import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="cinematic-logo" href="#top" aria-label="SAYBIR ana sayfa">
          <span className="logo-mark">S</span><strong>SAYBIR</strong>
        </a>
        <button className="menu-toggle" aria-label="Menüyü aç" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "nav nav-open" : "nav"}>
          <a href="#uygulamalar" onClick={() => setOpen(false)}>Apps</a>
          <a href="#platformlar" onClick={() => setOpen(false)}>Platforms</a>
          <a href="#hizmetler" onClick={() => setOpen(false)}>Studio</a>
          <a className="nav-cta" href="#iletisim" onClick={() => setOpen(false)}>Contact <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
