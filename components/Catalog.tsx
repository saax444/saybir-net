import Link from "next/link";
import { apps } from "@/data/apps";
import Text from "./Text";
import "./Catalog.css";

export default function Catalog() {
  return <section id="koleksiyon" className="catalog">
    <div className="container">
      <div className="section-head">
        <span className="section-kicker"><Text>Tüm uygulamalar</Text> / {String(apps.length).padStart(2, "0")}</span>
        <h2 className="section-title"><Text>Koleksiyonun tamamı.</Text></h2>
        <p className="section-copy"><Text>Günlük yaşam, üretkenlik ve oyun için bağımsız uygulamalar.</Text></p>
      </div>
      <div className="catalog-grid">{apps.map(app => <Link key={app.slug} href={`/apps/${app.slug}`} className="catalog-card">
        <img src={app.image} alt="" width={80} height={80} loading="lazy" />
        <div><small><Text>{app.category}</Text></small><h3>{app.name}</h3><p><Text>{app.description}</Text></p><span><Text>Ürün sayfası</Text> ↗</span></div>
      </Link>)}</div>
    </div>
  </section>;
}
