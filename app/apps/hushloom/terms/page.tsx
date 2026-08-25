import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import styles from "../../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom Kullanım Koşulları — saybir.net",
  description: "Hushloom kullanım koşulları ve Premium abonelik bilgileri.",
};

export default function HushloomTermsPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo />
          <Link className={styles.back} href="/apps/hushloom">← Hushloom</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}>Koşullar</span>
          <h1>Hushloom Kullanım Koşulları</h1>
          <p>Son güncelleme: 20 Ağustos 2026</p>

          <p>
            Hushloom'u indirerek veya kullanarak bu kullanım koşullarını kabul etmiş olursunuz.
            Uygulamayı kullanmak istemiyorsanız kullanımı durdurabilir ve uygulamayı cihazınızdan kaldırabilirsiniz.
          </p>

          <h3>Hizmetin Amacı</h3>
          <p>
            Hushloom, kullanıcıların yağmur, ateş, rüzgâr, fırtına, orman, okyanus ve benzeri
            ortam seslerini dinlemesine ve birden fazla sesi karıştırarak kişisel ambiyanslar
            oluşturmasına yardımcı olur. Uygulama tıbbi tedavi, tanı veya profesyonel sağlık hizmetinin
            yerine geçmez.
          </p>

          <h3>Ücretsiz Sürüm</h3>
          <p>
            Free sürümde aynı anda en fazla üç ses katmanı kullanılabilir ve bir ambiyans oturumu
            en fazla bir saat olarak ayarlanabilir. Free sürüm banner ve geçiş reklamları içerebilir.
            Özellik ve reklam sıklıkları uygulama güncellemeleriyle değiştirilebilir.
          </p>

          <h3>Hushloom Premium</h3>
          <p>
            Premium sürümde desteklenen ses katmanları genişletilir, reklam gösterimi kaldırılır ve
            zamanlayıcı 24 saate kadar kullanılabilir. Premium erişim Apple App Store üzerinden sunulan
            otomatik yenilenen abonelik kapsamında sağlanabilir.
          </p>
          <p>
            Planın yerel fiyatı, vergiler ve para birimi App Store ülkenize göre değişebilir. Satın alma
            onaylanmadan önce geçerli fiyat Apple tarafından gösterilir.
          </p>

          <h3>Otomatik Yenileme ve İptal</h3>
          <p>
            Otomatik yenilenen abonelikler, kullanıcı tarafından App Store abonelik ayarlarından iptal
            edilmediği sürece ilgili abonelik döneminin sonunda yenilenebilir. Aboneliklerinizi
            iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden görüntüleyebilir, değiştirebilir
            veya iptal edebilirsiniz.
          </p>

          <h3>Satın Almaları Geri Yükleme</h3>
          <p>
            Aynı Apple Hesabı ile daha önce edinilmiş uygun satın almalar uygulamadaki “Satın Almaları
            Geri Yükle” özelliği kullanılarak tekrar etkinleştirilebilir. Ödeme ve iade işlemleri Apple'ın
            ödeme ve iade politikalarına tabidir.
          </p>

          <h3>Reklamlar ve Üçüncü Taraf Hizmetler</h3>
          <p>
            Free sürüm Google AdMob gibi üçüncü taraf reklam hizmetlerini kullanabilir. Uygulama ayrıca
            Apple App Store, StoreKit ve iOS sistem hizmetlerinden yararlanır. Bu hizmetlerin kullanımı
            ilgili sağlayıcıların kendi koşul ve politikalarına tabidir.
          </p>

          <h3>Ses İçeriğinin Kullanımı</h3>
          <p>
            Hushloom içindeki sesler kişisel uygulama deneyimi kapsamında dinlenmek üzere sunulur.
            Uygulama içeriğini izinsiz şekilde kopyalamak, yeniden dağıtmak, satmak veya ayrı bir ses
            kütüphanesi olarak yayınlamak yasaktır; üçüncü taraf lisanslı içerikler için ayrıca ilgili
            lisans koşulları geçerlidir.
          </p>

          <h3>Kesintiler ve Değişiklikler</h3>
          <p>
            Uygulamanın belirli özellikleri cihaz, işletim sistemi, ağ bağlantısı, reklam envanteri veya
            üçüncü taraf servislerin kullanılabilirliğine bağlı olabilir. Hushloom özellikleri, ses
            kataloğu veya kullanım limitleri gelecekteki sürümlerde geliştirilebilir ya da değiştirilebilir.
          </p>

          <h3>Sorumluluk</h3>
          <p>
            Hushloom rahatlama, uyku rutini ve odaklanmayı desteklemek amacıyla tasarlanmıştır; belirli
            bir sağlık sonucu garanti etmez. Kullanıcı, uygulamayı güvenli bir ses seviyesinde kullanmak
            ve çevresel farkındalığın gerekli olduğu durumlarda uygulamayı uygun şekilde durdurmakla sorumludur.
          </p>

          <h3>Apple Standart EULA</h3>
          <p>
            Hushloom için ayrıca Apple'ın Standart Son Kullanıcı Lisans Sözleşmesi geçerlidir. Apple
            Standart EULA metnine aşağıdaki bağlantıdan ulaşabilirsiniz.
          </p>

          <h3>İletişim</h3>
          <p>
            Kullanım koşulları veya aboneliklerle ilgili sorular için{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Ko%C5%9Fullar">hello@saybir.net</a>
            {" "}adresine e-posta gönderebilirsiniz.
          </p>

          <div className={styles.actions}>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple Standart EULA</a>
            <Link href="/apps/hushloom/privacy">Gizlilik Politikası</Link>
            <Link href="/apps/hushloom/support">Destek</Link>
            <Link href="/apps/hushloom">Hushloom</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
