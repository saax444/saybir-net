import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "../../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom Kullanım Koşulları — SAYBIR",
  description: "Hushloom kullanım koşulları ve Premium abonelik bilgileri.",
};

export default function HushloomTermsPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo /><PreferenceControls/>
          <Link className={styles.back} href="/apps/hushloom"><Text>{"← Hushloom"}</Text></Link>
        </div>
      </nav>

      <PageTitle name="Hushloom" title="Kullanım Koşulları"/><main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}><Text>{"Koşullar"}</Text></span>
          <h1><Text>{"Hushloom Kullanım Koşulları"}</Text></h1>
          <p><Text>{"Son güncelleme: 20 Ağustos 2026"}</Text></p>

          <p><Text>{"Hushloom'u indirerek veya kullanarak bu kullanım koşullarını kabul etmiş olursunuz. Uygulamayı kullanmak istemiyorsanız kullanımı durdurabilir ve uygulamayı cihazınızdan kaldırabilirsiniz."}</Text></p>

          <h3><Text>{"Hizmetin Amacı"}</Text></h3>
          <p><Text>{"Hushloom, kullanıcıların yağmur, ateş, rüzgâr, fırtına, orman, okyanus ve benzeri ortam seslerini dinlemesine ve birden fazla sesi karıştırarak kişisel ambiyanslar oluşturmasına yardımcı olur. Uygulama tıbbi tedavi, tanı veya profesyonel sağlık hizmetinin yerine geçmez."}</Text></p>

          <h3><Text>{"Ücretsiz Sürüm"}</Text></h3>
          <p><Text>{"Free sürümde aynı anda en fazla üç ses katmanı kullanılabilir ve bir ambiyans oturumu en fazla bir saat olarak ayarlanabilir. Free sürüm banner ve geçiş reklamları içerebilir. Özellik ve reklam sıklıkları uygulama güncellemeleriyle değiştirilebilir."}</Text></p>

          <h3><Text>{"Hushloom Premium"}</Text></h3>
          <p><Text>{"Premium sürümde desteklenen ses katmanları genişletilir, reklam gösterimi kaldırılır ve zamanlayıcı 24 saate kadar kullanılabilir. Premium erişim Apple App Store üzerinden sunulan otomatik yenilenen abonelik kapsamında sağlanabilir."}</Text></p>
          <p><Text>{"Planın yerel fiyatı, vergiler ve para birimi App Store ülkenize göre değişebilir. Satın alma onaylanmadan önce geçerli fiyat Apple tarafından gösterilir."}</Text></p>

          <h3><Text>{"Otomatik Yenileme ve İptal"}</Text></h3>
          <p><Text>{"Otomatik yenilenen abonelikler, kullanıcı tarafından App Store abonelik ayarlarından iptal edilmediği sürece ilgili abonelik döneminin sonunda yenilenebilir. Aboneliklerinizi iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden görüntüleyebilir, değiştirebilir veya iptal edebilirsiniz."}</Text></p>

          <h3><Text>{"Satın Almaları Geri Yükleme"}</Text></h3>
          <p><Text>{"Aynı Apple Hesabı ile daha önce edinilmiş uygun satın almalar uygulamadaki “Satın Almaları Geri Yükle” özelliği kullanılarak tekrar etkinleştirilebilir. Ödeme ve iade işlemleri Apple'ın ödeme ve iade politikalarına tabidir."}</Text></p>

          <h3><Text>{"Reklamlar ve Üçüncü Taraf Hizmetler"}</Text></h3>
          <p><Text>{"Free sürüm Google AdMob gibi üçüncü taraf reklam hizmetlerini kullanabilir. Uygulama ayrıca Apple App Store, StoreKit ve iOS sistem hizmetlerinden yararlanır. Bu hizmetlerin kullanımı ilgili sağlayıcıların kendi koşul ve politikalarına tabidir."}</Text></p>

          <h3><Text>{"Ses İçeriğinin Kullanımı"}</Text></h3>
          <p><Text>{"Hushloom içindeki sesler kişisel uygulama deneyimi kapsamında dinlenmek üzere sunulur. Uygulama içeriğini izinsiz şekilde kopyalamak, yeniden dağıtmak, satmak veya ayrı bir ses kütüphanesi olarak yayınlamak yasaktır; üçüncü taraf lisanslı içerikler için ayrıca ilgili lisans koşulları geçerlidir."}</Text></p>

          <h3><Text>{"Kesintiler ve Değişiklikler"}</Text></h3>
          <p><Text>{"Uygulamanın belirli özellikleri cihaz, işletim sistemi, ağ bağlantısı, reklam envanteri veya üçüncü taraf servislerin kullanılabilirliğine bağlı olabilir. Hushloom özellikleri, ses kataloğu veya kullanım limitleri gelecekteki sürümlerde geliştirilebilir ya da değiştirilebilir."}</Text></p>

          <h3><Text>{"Sorumluluk"}</Text></h3>
          <p><Text>{"Hushloom rahatlama, uyku rutini ve odaklanmayı desteklemek amacıyla tasarlanmıştır; belirli bir sağlık sonucu garanti etmez. Kullanıcı, uygulamayı güvenli bir ses seviyesinde kullanmak ve çevresel farkındalığın gerekli olduğu durumlarda uygulamayı uygun şekilde durdurmakla sorumludur."}</Text></p>

          <h3><Text>{"Apple Standart EULA"}</Text></h3>
          <p><Text>{"Hushloom için ayrıca Apple'ın Standart Son Kullanıcı Lisans Sözleşmesi geçerlidir. Apple Standart EULA metnine aşağıdaki bağlantıdan ulaşabilirsiniz."}</Text></p>

          <h3><Text>{"İletişim"}</Text></h3>
          <p><Text>{"Kullanım koşulları veya aboneliklerle ilgili sorular için"}</Text>{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Kullanim%20Kosullari"><Text>{"hello@saybir.net"}</Text></a>
            {" "}<Text>{"adresine e-posta gönderebilirsiniz."}</Text></p>

          <div className={styles.actions}>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer"><Text>{"Apple Standart EULA"}</Text></a>
            <Link href="/apps/hushloom/privacy"><Text>{"Gizlilik Politikası"}</Text></Link>
            <Link href="/apps/hushloom/support"><Text>{"Destek"}</Text></Link>
            <Link href="/apps/hushloom"><Text>{"Hushloom"}</Text></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
