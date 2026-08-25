import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/data/apps";
import styles from "./app-page.module.css";

export function generateStaticParams() { return apps.map((app) => ({ slug: app.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: `${app.name} — saybir.net`, description: app.description } : {};
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  return <div className={styles.page}>
    <nav className={styles.nav}><div className={styles.navInner}><Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link><Link className={styles.back} href="/#uygulamalar">← Tüm uygulamalar</Link></div></nav>
    <main className={styles.main}>
      <section className={styles.hero}>
        <img className={styles.icon} src={app.image} alt={`${app.name} ikonu`} />
        <div><span className={styles.kicker}>{app.category}</span><h1>{app.name}</h1><p>{app.description}</p>
          <div className={styles.meta}>{app.version && <span>Sürüm {app.version}</span>}<span>{app.slug === "hushloom" ? "iPhone" : "iPhone ve iPad"}</span></div>
          <div className={styles.actions}>{app.appStoreUrl && <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store’da görüntüle ↗</a>}<Link className={styles.secondary} href={`/apps/${app.slug}/support`}>Destek</Link><Link className={styles.secondary} href={`/apps/${app.slug}/privacy`}>Gizlilik</Link>{app.slug === "hushloom" && <Link className={styles.secondary} href={`/apps/${app.slug}/terms`}>Kullanım Koşulları</Link>}</div>
        </div>
      </section>
      <section className={styles.content}><h2>Resmî uygulama sayfası</h2><p>Bu sayfa {app.name} için ürün bilgileri, App Store bağlantısı, destek ve gizlilik belgelerinin güncel merkezidir.</p></section>
    </main>
  </div>;
}
