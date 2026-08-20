import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom Gizlilik Politikası — saybir.net",
  description: "Hushloom uygulamasının gizlilik politikası.",
};

export default function HushloomPrivacyPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link>
          <Link className={styles.back} href="/apps/hushloom">← Hushloom</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}>Gizlilik</span>
          <h1>Hushloom Gizlilik Politikası</h1>
          <p>Son güncelleme: 20 Ağustos 2026</p>

          <p>
            Hushloom; yağmur, ateş, rüzgâr, fırtına, orman, okyanus ve benzeri ortam seslerini
            karıştırarak kişisel ambiyanslar oluşturmanıza yardımcı olan bir iOS uygulamasıdır.
            Bu politika Hushloom'un verileri nasıl kullandığını açıklar.
          </p>

          <h3>Yerel Tercihler ve Uygulama Verileri</h3>
          <p>
            Seçtiğiniz sesler, ses seviyeleri, favoriler, kayıtlı karışımlar, tema, dil ve zamanlayıcı
            tercihleri gibi uygulama ayarları cihaz üzerinde saklanabilir. Bu bilgiler Hushloom'un
            temel özelliklerini sağlamak ve deneyiminizi hatırlamak için kullanılır.
          </p>

          <h3>Ses İçeriği</h3>
          <p>
            Uygulamadaki ambiyans kayıtları yalnızca ses oynatma işlevi için kullanılır. Hushloom
            mikrofonunuzdan ortam kaydı yapmaz ve temel kullanım için mikrofon izni gerektirmez.
          </p>

          <h3>Reklamlar — Google AdMob</h3>
          <p>
            Ücretsiz sürüm Google AdMob üzerinden banner ve geçiş reklamları gösterebilir. Google
            Mobile Ads SDK; cihaz bilgileri, yaklaşık konum, reklam etkileşimleri, tanımlayıcılar ve
            benzeri reklam/teknik verileri Google'ın kendi politikaları kapsamında işleyebilir.
            iOS tarafından gerekli görülen durumlarda App Tracking Transparency izni istenebilir.
            İzin vermemek Hushloom'un temel ambiyans özelliklerini engellemez.
          </p>
          <p>
            Premium kullanıcılar için Hushloom içindeki reklam gösterimi devre dışı bırakılır.
          </p>

          <h3>Premium ve App Store Satın Almaları</h3>
          <p>
            Premium abonelik, satın alma durumu ve satın almaları geri yükleme işlemleri Apple
            App Store ve StoreKit altyapısı üzerinden yürütülür. Geliştirici banka kartı veya kredi
            kartı bilgilerinize erişmez ve bu bilgileri saklamaz.
          </p>

          <h3>Arka Planda Ses</h3>
          <p>
            Hushloom, kullanıcı tarafından başlatılan ambiyansın ekran kilitlendiğinde veya başka
            bir uygulamaya geçildiğinde devam edebilmesi için iOS arka plan ses özelliklerini kullanabilir.
            Bu işlev kişisel verilerin toplanmasını gerektirmez.
          </p>

          <h3>Üçüncü Taraf Hizmetler</h3>
          <p>
            Hushloom; Google AdMob, Apple App Store/StoreKit ve iOS sistem hizmetlerinden yararlanabilir.
            Bu sağlayıcıların veri işleme uygulamaları kendi gizlilik politikalarına tabidir.
          </p>

          <h3>Çocukların Gizliliği</h3>
          <p>
            Hushloom çocuklardan bilerek doğrudan kişisel bilgi istemez. Bir ebeveyn veya vasi,
            bir çocuğa ait kişisel verinin yanlışlıkla tarafımıza iletildiğini düşünüyorsa bizimle
            iletişime geçebilir.
          </p>

          <h3>Veri Saklama ve Silme</h3>
          <p>
            Cihaz üzerinde tutulan tercihler uygulama içindeki ilgili seçeneklerden silinebilir veya
            uygulamanın cihazdan kaldırılmasıyla temizlenebilir. Üçüncü taraf hizmetlerde tutulan veriler
            ilgili hizmet sağlayıcının saklama politikalarına tabidir.
          </p>

          <h3>İletişim</h3>
          <p>
            Gizlilik veya veri kullanımıyla ilgili sorular için{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Gizlilik%20Talebi">hello@saybir.net</a>
            {" "}adresine e-posta gönderebilirsiniz.
          </p>

          <div className={styles.actions}>
            <Link href="/apps/hushloom/support">Destek</Link>
            <Link href="/apps/hushloom/terms">Kullanım Koşulları</Link>
            <Link href="/apps/hushloom">Hushloom</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
