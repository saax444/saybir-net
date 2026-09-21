import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "../../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom Gizlilik Politikası — SAYBIR",
  description: "Hushloom uygulamasının gizlilik politikası.",
};

export default function HushloomPrivacyPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo /><PreferenceControls/>
          <Link className={styles.back} href="/apps/hushloom"><Text>{"← Hushloom"}</Text></Link>
        </div>
      </nav>

      <PageTitle name="Hushloom" title="Gizlilik Politikası"/><main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}><Text>{"Gizlilik"}</Text></span>
          <h1><Text>{"Hushloom Gizlilik Politikası"}</Text></h1>
          <p><Text>{"Son güncelleme: 20 Ağustos 2026"}</Text></p>

          <p><Text>{"Hushloom; yağmur, ateş, rüzgâr, fırtına, orman, okyanus ve benzeri ortam seslerini karıştırarak kişisel ambiyanslar oluşturmanıza yardımcı olan bir iOS uygulamasıdır. Bu politika Hushloom'un verileri nasıl kullandığını açıklar."}</Text></p>

          <h3><Text>{"Yerel Tercihler ve Uygulama Verileri"}</Text></h3>
          <p><Text>{"Seçtiğiniz sesler, ses seviyeleri, favoriler, kayıtlı karışımlar, tema, dil ve zamanlayıcı tercihleri gibi uygulama ayarları cihaz üzerinde saklanabilir. Bu bilgiler Hushloom'un temel özelliklerini sağlamak ve deneyiminizi hatırlamak için kullanılır."}</Text></p>

          <h3><Text>{"Ses İçeriği"}</Text></h3>
          <p><Text>{"Uygulamadaki ambiyans kayıtları yalnızca ses oynatma işlevi için kullanılır. Hushloom mikrofonunuzdan ortam kaydı yapmaz ve temel kullanım için mikrofon izni gerektirmez."}</Text></p>

          <h3><Text>{"Reklamlar — Google AdMob"}</Text></h3>
          <p><Text>{"Ücretsiz sürüm Google AdMob üzerinden banner ve geçiş reklamları gösterebilir. Google Mobile Ads SDK; cihaz bilgileri, yaklaşık konum, reklam etkileşimleri, tanımlayıcılar ve benzeri reklam/teknik verileri Google'ın kendi politikaları kapsamında işleyebilir. iOS tarafından gerekli görülen durumlarda App Tracking Transparency izni istenebilir. İzin vermemek Hushloom'un temel ambiyans özelliklerini engellemez."}</Text></p>
          <p><Text>{"Premium kullanıcılar için Hushloom içindeki reklam gösterimi devre dışı bırakılır."}</Text></p>

          <h3><Text>{"Premium ve App Store Satın Almaları"}</Text></h3>
          <p><Text>{"Premium abonelik, satın alma durumu ve satın almaları geri yükleme işlemleri Apple App Store ve StoreKit altyapısı üzerinden yürütülür. Geliştirici banka kartı veya kredi kartı bilgilerinize erişmez ve bu bilgileri saklamaz."}</Text></p>

          <h3><Text>{"Arka Planda Ses"}</Text></h3>
          <p><Text>{"Hushloom, kullanıcı tarafından başlatılan ambiyansın ekran kilitlendiğinde veya başka bir uygulamaya geçildiğinde devam edebilmesi için iOS arka plan ses özelliklerini kullanabilir. Bu işlev kişisel verilerin toplanmasını gerektirmez."}</Text></p>

          <h3><Text>{"Üçüncü Taraf Hizmetler"}</Text></h3>
          <p><Text>{"Hushloom; Google AdMob, Apple App Store/StoreKit ve iOS sistem hizmetlerinden yararlanabilir. Bu sağlayıcıların veri işleme uygulamaları kendi gizlilik politikalarına tabidir."}</Text></p>

          <h3><Text>{"Çocukların Gizliliği"}</Text></h3>
          <p><Text>{"Hushloom çocuklardan bilerek doğrudan kişisel bilgi istemez. Bir ebeveyn veya vasi, bir çocuğa ait kişisel verinin yanlışlıkla tarafımıza iletildiğini düşünüyorsa bizimle iletişime geçebilir."}</Text></p>

          <h3><Text>{"Veri Saklama ve Silme"}</Text></h3>
          <p><Text>{"Cihaz üzerinde tutulan tercihler uygulama içindeki ilgili seçeneklerden silinebilir veya uygulamanın cihazdan kaldırılmasıyla temizlenebilir. Üçüncü taraf hizmetlerde tutulan veriler ilgili hizmet sağlayıcının saklama politikalarına tabidir."}</Text></p>

          <h3><Text>{"İletişim"}</Text></h3>
          <p><Text>{"Gizlilik veya veri kullanımıyla ilgili sorular için"}</Text>{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Gizlilik%20Talebi"><Text>{"hello@saybir.net"}</Text></a>
            {" "}<Text>{"adresine e-posta gönderebilirsiniz."}</Text></p>

          <div className={styles.actions}>
            <Link href="/apps/hushloom/support"><Text>{"Destek"}</Text></Link>
            <Link href="/apps/hushloom/terms"><Text>{"Kullanım Koşulları"}</Text></Link>
            <Link href="/apps/hushloom"><Text>{"Hushloom"}</Text></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
