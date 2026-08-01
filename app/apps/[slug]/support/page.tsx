import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

export default async function SupportPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug); if (!app) notFound();
  return <div className={styles.page}><nav className={styles.nav}><div className={styles.navInner}><Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link><Link className={styles.back} href={`/apps/${app.slug}`}>← {app.name}</Link></div></nav><main className={styles.main}><section className={styles.content}><span className={styles.kicker}>Destek</span><h1>{app.name} Destek</h1><p>Uygulamayla ilgili teknik sorun, geri bildirim veya hesap talebiniz için aşağıdaki adresten iletişime geçebilirsiniz.</p><div className={styles.actions}><a href={`mailto:hello@saybir.net?subject=${encodeURIComponent(app.name + " Destek")}`}>hello@saybir.net</a></div><h3>Mesajınıza ekleyin</h3><ul><li>Kullandığınız cihaz ve iOS sürümü</li><li>Uygulama sürümü</li><li>Sorunun kısa açıklaması ve mümkünse ekran görüntüsü</li></ul></section></main></div>;
}
