import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import { apps, getApp } from "@/data/apps";
import styles from "./app-page.module.css";

export function generateStaticParams() { return apps.map((app) => ({ slug: app.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: `${app.name} — SAYBIR`, description: app.description } : {};
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  return <div className={styles.page}>
    <nav className={styles.nav}><div className={styles.navInner}><BrandLogo /><PreferenceControls/><Link className={styles.back} href="/#koleksiyon"><Text>{"← Tüm uygulamalar"}</Text></Link></div></nav>
    <PageTitle title={app.name}/><main className={styles.main}>
      <section className={styles.hero} style={{"--accent": app.accent} as React.CSSProperties}>
        <img className={styles.icon} src={app.image} alt={app.name} />
        <div><span className={styles.kicker}><Text>{app.category}</Text></span><h1><Text>{app.name}</Text></h1><p><Text>{app.description}</Text></p>
          <div className={styles.meta}>{app.version && <span><Text>{"Sürüm "}</Text><Text>{app.version}</Text></span>}<span><Text>{app.status}</Text></span></div>
          <div className={styles.actions}>{app.appStoreUrl && <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer"><Text>{"App Store’da görüntüle ↗"}</Text></a>}<Link className={styles.secondary} href={`/apps/${app.slug}/support`}><Text>{"Destek"}</Text></Link><Link className={styles.secondary} href={`/apps/${app.slug}/privacy`}><Text>{"Gizlilik"}</Text></Link>{["hushloom", "retro-snake"].includes(app.slug) && <Link className={styles.secondary} href={`/apps/${app.slug}/terms`}><Text>{"Kullanım Koşulları"}</Text></Link>}{app.slug === "retro-snake" && <><Link className={styles.secondary} href="/apps/retro-snake/eula"><Text>{"EULA"}</Text></Link><Link className={styles.secondary} href="/apps/retro-snake/purchases"><Text>{"Satın Alma ve İade"}</Text></Link></>}</div>
        </div>
      </section>
      <section className={styles.content}><span className={styles.kicker}><Text>{"SAYBIR / PRODUCT FILE"}</Text></span><h2><Text>{"Resmî uygulama sayfası"}</Text></h2><p><Text>{"Bu sayfa "}</Text><Text>{app.name}</Text><Text>{" için ürün bilgileri, App Store bağlantısı, destek ve gizlilik belgelerinin güncel merkezidir."}</Text></p></section>
    </main>
  </div>;
}
