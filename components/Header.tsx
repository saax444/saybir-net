"use client";

import Image from "next/image";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Aziz Ahmet Saybir ana sayfa">
          <span className="brand-mark">
            <Image
              src="/brand/logo-saybir.png"
              alt=""
              width={128}
              height={128}
              priority
            />
          </span>
          <span>Aziz Ahmet Saybir</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={open ? "nav nav-open" : "nav"}>
          <a href="#top" onClick={() => setOpen(false)}>Ana Sayfa</a>
          <a href="#uygulamalar" onClick={() => setOpen(false)}>Uygulamalar</a>
          <a href="#hizmetler" onClick={() => setOpen(false)}>Hizmetler</a>
          <a href="#surec" onClick={() => setOpen(false)}>Çalışma Süreci</a>
          <a className="nav-cta" href="#iletisim" onClick={() => setOpen(false)}>İletişime Geç</a>
        </nav>
      </div>
    </header>
  );
}
