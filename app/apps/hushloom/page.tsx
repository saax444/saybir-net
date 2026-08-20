import type { Metadata } from "next";
import Link from "next/link";
import styles from "../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom — saybir.net",
  description: "Yağmur, ateş, rüzgâr, fırtına, orman ve diğer gerçek ambiyansları karıştırarak kişisel uyku ve odak ortamları oluşturun.",
};

export default function HushloomPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link>
          <Link className={styles.back} href="/#uygulamalar">← Tüm uygulamalar</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <img className={styles.icon} src="/apps/hushloom.svg" alt="Hushloom uygulama ikonu" />
          <div>
            <span className={styles.kicker}>Sağlık ve Fitness</span>
            <h1>Hushloom</h1>
            <p>
              Yağmur, şömine, rüzgâr, fırtına, orman, okyanus ve diğer gerçek ortam seslerini
              katmanlayarak uyku, dinlenme ve odaklanma için kendi ambiyansınızı oluşturun.
            </p>
            <div className={styles.meta}>
              <span>Sürüm 1.0</span>
              <span>iPhone ve iPad</span>
              <span>Free + Premium</span>
            </div>
            <div className={styles.actions}>
              <Link className={styles.secondary} href="/apps/hushloom/support">Destek</Link>
              <Link className={styles.secondary} href="/apps/hushloom/privacy">Gizlilik</Link>
              <Link className={styles.secondary} href="/apps/hushloom/terms">Kullanım Koşulları</Link>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Gerçek seslerle kişisel ambiyans</h2>
          <p>
            Hushloom farklı ortam kayıtlarını aynı anda çalmanıza, her katmanın ses seviyesini
            ayrı ayrı ayarlamanıza ve bir zamanlayıcıyla uzun süreli ambiyanslar oluşturmanıza
            yardımcı olur. Ücretsiz sürümde aynı anda en fazla üç ses ve en fazla bir saatlik
            oturum kullanılabilir. Premium sürüm reklamsız kullanım, daha fazla katman ve 24 saate
            kadar zamanlayıcı sunar.
          </p>
          <h3>İletişim</h3>
          <p>
            Hushloom ile ilgili destek ve gizlilik talepleri için{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Destek">hello@saybir.net</a>
            {" "}adresini kullanabilirsiniz.
          </p>
        </section>
      </main>
    </div>
  );
}
