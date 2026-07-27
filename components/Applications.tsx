"use client";

import { CSSProperties, PointerEvent, useRef } from "react";
import "./Applications.css";

const apps = [
  {
    name: "VibeLens",
    image: "/apps/vibelens.png",
    accent: "116 91 255",
    category: "Yaşam",
    description: "Sohbet ekran görüntülerindeki iletişim sinyallerini gizlilik odaklı analiz edin.",
    status: "App Store’da"
  },
  {
    name: "HiLock",
    image: "/apps/hilock.png",
    accent: "60 118 255",
    category: "Verimlilik",
    description: "Uygulamalarınızı PIN ve biyometrik doğrulamayla koruyun, odağınızı güçlendirin.",
    status: "App Store’da"
  },
  {
    name: "Ödüyorum",
    image: "/apps/oduyorum.png",
    accent: "37 161 255",
    category: "Finans",
    description: "Gelir, gider, fatura ve hedeflerinizi tek bir sade finans merkezinde yönetin.",
    status: "App Store’da",
    url: "https://apps.apple.com/tr/app/%C3%B6d%C3%BCyorum/id6793859068"
  },
  {
    name: "Ref!Ref!Ref!",
    image: "/apps/refrefref.png",
    accent: "255 52 190",
    category: "Oyun",
    description: "Reflekslerinizi 50 neon şehir ve binlerce el yapımı bölümde sınayın.",
    status: "App Store’da",
    url: "https://apps.apple.com/tr/app/ref-ref-ref/id6788466051"
  },
  {
    name: "Kedilik",
    image: "/apps/kedilik.png",
    accent: "255 123 90",
    category: "Yaşam",
    description: "Kedinizin sağlık, bakım ve önemli kayıtlarını düzenli biçimde takip edin.",
    status: "App Store’da",
    url: "https://apps.apple.com/tr/app/kedilik/id6792054901"
  },
  {
    name: "Ezan Vakti",
    image: "/apps/ezan-vakti.png",
    accent: "229 184 71",
    category: "Araçlar",
    description: "Namaz vakitleri, kıble, dualar ve günlük ibadet araçlarına kolayca ulaşın.",
    status: "App Store’da",
    url: "https://apps.apple.com/tr/app/ezan-vakti-namaz-ve-k%C4%B1ble/id6790400156"
  },
  {
    name: "Üşenme Yap",
    image: "/apps/usenme-yap.png",
    accent: "139 83 255",
    category: "Verimlilik",
    description: "Ertelemeyi bırakın, küçük adımlarla görevlerinizi harekete dönüştürün.",
    status: "App Store’da"
  },
  {
    name: "TarTarot",
    image: "/apps/tartarot.png",
    accent: "218 180 79",
    category: "Yaşam",
    description: "Modern bir tarot deneyimiyle kartları keşfedin ve yorumlarınıza odaklanın.",
    status: "App Store’da"
  },
  {
    name: "Susadım",
    image: "/apps/susadim.png",
    accent: "38 219 255",
    category: "Sağlık",
    description: "Günlük su hedefinizi takip edin ve düzenli içme alışkanlığı oluşturun.",
    status: "App Store’da"
  }
];

function AppCard({ app, index }: { app: typeof apps[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);

  const move = (event: PointerEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };

  const leave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  };

  return (
    <article
      ref={ref}
      className="app-card"
      onPointerMove={move}
      onPointerLeave={leave}
      style={{
        "--accent": app.accent,
        "--delay": `${index * 70}ms`
      } as CSSProperties}
    >
      <div className="app-card-glow" />
      <div className="app-card-topline">
        <span className="app-category">{app.category}</span>
        <span className="app-status">{app.status}</span>
      </div>
      <img className="app-icon" src={app.image} alt={`${app.name} uygulama ikonu`} />
      <div className="app-card-copy">
        <h3>{app.name}</h3>
        <p>{app.description}</p>
      </div>
      {"url" in app && (
        <a className="app-link" href={app.url} target="_blank" rel="noreferrer">
          App Store’da Gör
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}

export default function Applications() {
  return (
    <section className="applications" id="uygulamalar">
      <div className="container">
        <div className="section-head applications-head">
          <span className="section-kicker">iOS Uygulamalarım</span>
          <h2 className="section-title">Uygulamalar</h2>
          <p className="section-copy">
            App Store&apos;daki ve yayın yolculuğundaki tüm ürünlerimi keşfedin.
          </p>
        </div>

        <div className="apps-grid">
          {apps.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
