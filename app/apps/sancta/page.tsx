import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Text from "@/components/Text";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "../[slug]/app-page.module.css";
export const metadata: Metadata = {title: "Sancta — SAYBIR", description: "Sancta: prayer and reflection for iPhone and iPad. In development.", alternates: {canonical: "/apps/sancta"}};
export default function Page() {
 return <div className={styles.page}>
  <nav className={styles.nav}><div className={styles.navInner}><BrandLogo/><PreferenceControls/><Link className={styles.back} href="/#koleksiyon"><Text>← Tüm uygulamalar</Text></Link></div></nav>
  <main className={styles.main}>
   <section className={styles.hero}><img className={styles.icon} src="/apps/sancta.svg" alt="Sancta"/>
    <div><span className={styles.kicker}><Text>Geliştirme aşamasında</Text></span><h1>Sancta</h1><p><Text>Sancta, günlük yaşamda dua ve tefekküre yer açmak için geliştirilen bir iPhone ve iPad uygulamasıdır.</Text></p>
     <div className={styles.meta}><span>iPhone · iPad</span><span>iOS 18+</span></div>
     <div className={styles.actions}><Link href="/apps/sancta/privacy"><Text>Gizlilik</Text></Link><Link href="/apps/sancta/terms"><Text>Kullanım Koşulları</Text></Link><Link href="/apps/sancta/support"><Text>Destek</Text></Link></div>
    </div>
   </section>
   <section className={styles.content}><h2><Text>Sessiz bir an. Küçük bir başlangıç.</Text></h2><p><Text>Sabah, akşam ve barış için özgün dualar; kısa bir Rosary rehberi ve tamamlanan dua sayacı.</Text></p><h3><Text>Mevcut sürüm</Text></h3><p><Text>Tam Kutsal Kitap metni henüz sunulmuyor; lisanslı içerik entegrasyonu bekleniyor. Uygulama henüz App Store’da yayımlanmadı.</Text></p><a href="/app-ads.txt"><Text>Reklam yayıncı kaydı</Text></a></section>
  </main>
 </div>;
}
