import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

export default async function PrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const app = getApp((await params).slug); if (!app) notFound();
  return <div className={styles.page}><nav className={styles.nav}><div className={styles.navInner}><Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link><Link className={styles.back} href={`/apps/${app.slug}`}>← {app.name}</Link></div></nav><main className={styles.main}><section className={styles.content}><span className={styles.kicker}>Gizlilik</span><h1>{app.name} Gizlilik Politikası</h1><p>Son güncelleme: 1 Ağustos 2026</p><h3>Verilerin kullanımı</h3><p>{app.name}, yalnızca sunduğu özelliklerin çalışması için gerekli bilgileri işler. Cihaz izinleri gerektiğinde iOS tarafından açıkça istenir ve kullanıcı tarafından yönetilebilir.</p><h3>Apple hizmetleri</h3><p>App Store dağıtımı, uygulama içi satın alma ve abonelik işlemleri ilgili olduğunda Apple’ın sistemleri üzerinden yürütülür.</p><h3>İletişim</h3><p>Gizlilikle ilgili sorularınızı <a href="mailto:hello@saybir.net">hello@saybir.net</a> adresine iletebilirsiniz.</p></section></main></div>;
}
