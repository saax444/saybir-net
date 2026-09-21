import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Text from "@/components/Text";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "./apps/[slug]/app-page.module.css";

export default function NotFound() {
  return <div className={styles.page}>
    <nav className={styles.nav}><div className={styles.navInner}><BrandLogo /><PreferenceControls /></div></nav>
    <PageTitle title="Sayfa bulunamadı"/><main className={styles.main}><section className={styles.content}>
      <span className={styles.kicker}>404</span>
      <h1><Text>Sayfa bulunamadı</Text></h1>
      <p><Text>Aradığınız sayfa taşınmış veya mevcut olmayabilir.</Text></p>
      <div className={styles.actions}><Link href="/"><Text>Ana sayfaya dön</Text></Link></div>
    </section></main>
  </div>;
}
