import type { Metadata } from "next";
import Link from "next/link";
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
          <Link className={styles.brand} href="/">Aziz Ahmet Saybir</Link>
          <Link className={styles.back} href="/apps/hushloom">← Hushloom</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}>Destek</span>
          <h1>Hushloom Destek</h1>
          <p>
            Hushloom ile ilgili teknik sorunlar, Premium, reklamlar, ses oynatma ve geri bildirimler
            için bu sayfayı kullanabilirsiniz.
          </p>

          <h3>Destek Verilen Konular</h3>
          <ul>
            <li>Yağmur, ateş, rüzgâr, orman, okyanus ve diğer ambiyans sesleri</li>
            <li>Birden fazla sesi aynı anda karıştırma ve ses seviyeleri</li>
            <li>Zamanlayıcı ve arka planda ses oynatma</li>
            <li>Hazır sahneler, favoriler ve kayıtlı karışımlar</li>
            <li>Free sürümde 3 ses / 1 saat sınırı</li>
            <li>Premium, 24 saate kadar zamanlayıcı ve reklamsız kullanım</li>
            <li>Satın almaları geri yükleme</li>
            <li>Banner ve geçiş reklamları</li>
            <li>Dil ve açık/koyu tema ayarları</li>
          </ul>

          <h3>Ses Çalmıyorsa</h3>
          <ul>
            <li>Cihazın medya ses seviyesini kontrol edin.</li>
            <li>Bluetooth veya AirPlay çıkışının başka bir cihaza yönlenmediğinden emin olun.</li>
            <li>Aktif karışımda en az bir sesin seçili ve ses seviyesinin sıfırdan yüksek olduğunu kontrol edin.</li>
            <li>Uygulamayı tamamen kapatıp yeniden açın.</li>
            <li>Sorun devam ederse iPhone veya iPad'i yeniden başlatın.</li>
          </ul>

          <h3>Arka Planda Ses Duruyorsa</h3>
          <p>
            Ambiyansı Hushloom içinden başlattıktan sonra ekranı kilitleyin. Başka bir medya uygulaması
            ses oturumunu devralırsa iOS, Hushloom sesini duraklatabilir. Böyle bir durumda Hushloom'a
            dönüp oturumu yeniden başlatın.
          </p>

          <h3>Premium veya Satın Alma Sorunları</h3>
          <p>
            Premium işlemleri Apple App Store üzerinden yapılır. Ödeme tamamlandığı hâlde Premium
            açılmadıysa uygulamadaki “Satın Almaları Geri Yükle” seçeneğini kullanın. Aboneliklerinizi
            iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden yönetebilirsiniz.
          </p>
          <p>
            Destek mesajlarında Apple Hesabı parolanızı, doğrulama kodunuzu veya kart bilgilerinizi
            hiçbir zaman paylaşmayın.
          </p>

          <h3>Reklam Sorunları</h3>
          <p>
            Free sürümde reklam bulunabilirliği ülke, bağlantı ve mevcut reklam envanterine göre
            değişebilir. Premium aktif olduğu hâlde reklam görüyorsanız satın almaları geri yüklemeyi
            deneyin ve sorun devam ederse uygulama sürümünüzle birlikte bize bildirin.
          </p>

          <h3>Destek Mesajına Ekleyin</h3>
          <ul>
            <li>iPhone veya iPad modeli</li>
            <li>iOS/iPadOS sürümü</li>
            <li>Hushloom sürümü ve mümkünse build numarası</li>
            <li>Sorunun oluştuğu ekran</li>
            <li>Sorunu tekrar oluşturmak için izlediğiniz adımlar</li>
            <li>Varsa hata mesajının tam metni</li>
          </ul>

          <h3>İletişim</h3>
          <p>
            Destek talepleri için{" "}
            <a href="mailto:hello@saybir.net?subject=Hushloom%20Destek">hello@saybir.net</a>
            {" "}adresine e-posta gönderebilirsiniz.
          </p>

          <div className={styles.actions}>
            <Link href="/apps/hushloom/privacy">Gizlilik Politikası</Link>
            <Link href="/apps/hushloom/terms">Kullanım Koşulları</Link>
            <Link href="/apps/hushloom">Hushloom</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
