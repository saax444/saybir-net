import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import styles from "../../[slug]/app-page.module.css";

export const metadata: Metadata = {
  title: "Hushloom Destek — saybir.net",
  description: "Hushloom teknik destek ve yardım sayfası.",
};

export default function HushloomSupportPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo /><PreferenceControls/>
          <Link className={styles.back} href="/apps/hushloom"><Text>{"← Hushloom"}</Text></Link>
        </div>
      </nav>

      <PageTitle name="Hushloom" title="Destek"/><main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}><Text>{"Destek"}</Text></span>
          <h1><Text>{"Hushloom Destek"}</Text></h1>
          <p><Text>{"Hushloom ile ilgili teknik sorunlar, Premium, reklamlar, ses oynatma ve geri bildirimler için bu sayfayı kullanabilirsiniz."}</Text></p>

          <h3><Text>{"Destek Verilen Konular"}</Text></h3>
          <ul>
            <li><Text>{"Yağmur, ateş, rüzgâr, orman, okyanus ve diğer ambiyans sesleri"}</Text></li>
            <li><Text>{"Birden fazla sesi aynı anda karıştırma ve ses seviyeleri"}</Text></li>
            <li><Text>{"Zamanlayıcı ve arka planda ses oynatma"}</Text></li>
            <li><Text>{"Hazır sahneler, favoriler ve kayıtlı karışımlar"}</Text></li>
            <li><Text>{"Free sürümde 3 ses / 1 saat sınırı"}</Text></li>
            <li><Text>{"Premium, 24 saate kadar zamanlayıcı ve reklamsız kullanım"}</Text></li>
            <li><Text>{"Satın almaları geri yükleme"}</Text></li>
            <li><Text>{"Banner ve geçiş reklamları"}</Text></li>
            <li><Text>{"Dil ve açık/koyu tema ayarları"}</Text></li>
          </ul>

          <h3><Text>{"Ses Çalmıyorsa"}</Text></h3>
          <ul>
            <li><Text>{"Cihazın medya ses seviyesini kontrol edin."}</Text></li>
            <li><Text>{"Bluetooth veya AirPlay çıkışının başka bir cihaza yönlenmediğinden emin olun."}</Text></li>
            <li><Text>{"Aktif karışımda en az bir sesin seçili ve ses seviyesinin sıfırdan yüksek olduğunu kontrol edin."}</Text></li>
            <li><Text>{"Uygulamayı tamamen kapatıp yeniden açın."}</Text></li>
            <li><Text>{"Sorun devam ederse iPhone veya iPad'i yeniden başlatın."}</Text></li>
          </ul>

          <h3><Text>{"Arka Planda Ses Duruyorsa"}</Text></h3>
          <p><Text>{"Ambiyansı Hushloom içinden başlattıktan sonra ekranı kilitleyin. Başka bir medya uygulaması ses oturumunu devralırsa iOS, Hushloom sesini duraklatabilir. Böyle bir durumda Hushloom'a dönüp oturumu yeniden başlatın."}</Text></p>

          <h3><Text>{"Premium veya Satın Alma Sorunları"}</Text></h3>
          <p><Text>{"Premium işlemleri Apple App Store üzerinden yapılır. Ödeme tamamlandığı hâlde Premium açılmadıysa uygulamadaki “Satın Almaları Geri Yükle” seçeneğini kullanın. Aboneliklerinizi iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden yönetebilirsiniz."}</Text></p>
          <p><Text>{"Destek mesajlarında Apple Hesabı parolanızı, doğrulama kodunuzu veya kart bilgilerinizi hiçbir zaman paylaşmayın."}</Text></p>

          <h3><Text>{"Reklam Sorunları"}</Text></h3>
          <p><Text>{"Free sürümde reklam bulunabilirliği ülke, bağlantı ve mevcut reklam envanterine göre değişebilir. Premium aktif olduğu hâlde reklam görüyorsanız satın almaları geri yüklemeyi deneyin ve sorun devam ederse uygulama sürümünüzle birlikte bize bildirin."}</Text></p>

          <h3><Text>{"Destek Mesajına Ekleyin"}</Text></h3>
          <ul>
            <li><Text>{"iPhone modeli"}</Text></li>
            <li><Text>{"iOS sürümü"}</Text></li>
            <li><Text>{"Hushloom sürümü ve mümkünse build numarası"}</Text></li>
            <li><Text>{"Sorunun oluştuğu ekran"}</Text></li>
            <li><Text>{"Sorunu tekrar oluşturmak için izlediğiniz adımlar"}</Text></li>
            <li><Text>{"Varsa hata mesajının tam metni"}</Text></li>
          </ul>

          <h3><Text>{"İletişim"}</Text></h3>
          <p><Text>{"Destek talepleri için"}</Text>{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Destek"><Text>{"hello@saybir.net"}</Text></a>
            {" "}<Text>{"adresine e-posta gönderebilirsiniz."}</Text></p>

          <div className={styles.actions}>
            <Link href="/apps/hushloom/privacy"><Text>{"Gizlilik Politikası"}</Text></Link>
            <Link href="/apps/hushloom/terms"><Text>{"Kullanım Koşulları"}</Text></Link>
            <Link href="/apps/hushloom"><Text>{"Hushloom"}</Text></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
