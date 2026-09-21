import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom — SAYBIR",
  description: "Yağmur, ateş, rüzgâr, fırtına, orman ve diğer gerçek ambiyansları karıştırarak kişisel uyku ve odak ortamları oluşturun.",
};

export default function HushloomPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo /><PreferenceControls/>
          <Link className={styles.back} href="/#koleksiyon"><Text>{"← Tüm uygulamalar"}</Text></Link>
        </div>
      </nav>

      <PageTitle title="Hushloom"/><main className={styles.main}>
        <section className={styles.hero} style={{"--accent":"78 119 255"} as React.CSSProperties}>
          <img className={styles.icon} src="/apps/hushloom.png" alt="Hushloom" />
          <div>
            <span className={styles.kicker}><Text>{"Sağlık ve Fitness"}</Text></span>
            <h1><Text>{"Hushloom"}</Text></h1>
            <p><Text>{"Yağmur, şömine, rüzgâr, fırtına, orman, okyanus ve diğer gerçek ortam seslerini katmanlayarak uyku, dinlenme ve odaklanma için kendi ambiyansınızı oluşturun."}</Text></p>
            <div className={styles.meta}>
              <span><Text>{"Sürüm 1.0"}</Text></span>
              <span><Text>{"iOS"}</Text></span>
              <span><Text>{"Free + Premium"}</Text></span>
            </div>
            <div className={styles.actions}>
              <Link className={styles.secondary} href="/apps/hushloom/support"><Text>{"Destek"}</Text></Link>
              <Link className={styles.secondary} href="/apps/hushloom/privacy"><Text>{"Gizlilik"}</Text></Link>
              <Link className={styles.secondary} href="/apps/hushloom/terms"><Text>{"Kullanım Koşulları"}</Text></Link>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2><Text>{"Gerçek seslerle kişisel ambiyans"}</Text></h2>
          <p><Text>{"Hushloom, farklı ambiyans seslerini keşfetmenize, ortam kayıtlarını aynı anda çalmanıza, her katmanın ses seviyesini ayrı ayrı ayarlamanıza ve bir zamanlayıcıyla ambiyanslar oluşturmanıza yardımcı olur. Ücretsiz sürümde aynı anda en fazla üç ses ve en fazla bir saatlik oturum kullanılabilir. Premium sürüm reklamsız kullanım, daha fazla katman ve 24 saate kadar zamanlayıcı sunar."}</Text></p>
          <h3><Text>{"İletişim"}</Text></h3>
          <p><Text>{"Hushloom ile ilgili destek ve gizlilik talepleri için"}</Text>{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Destek"><Text>{"hello@saybir.net"}</Text></a>
            {" "}<Text>{"adresini kullanabilirsiniz."}</Text></p>
        </section>
      </main>
    </div>
  );
}
