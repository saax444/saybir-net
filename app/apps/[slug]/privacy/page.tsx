import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug);

  if (!app) {
    notFound();
  }

  const isEzanVakti = app.slug === "ezan-vakti";

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/">
            Aziz Ahmet Saybir
          </Link>

          <Link className={styles.back} href={`/apps/${app.slug}`}>
            ← {app.name}
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}>Gizlilik</span>

          <h1>{app.name} Gizlilik Politikası</h1>

          <p>Son güncelleme: 16 Ağustos 2026</p>

          {isEzanVakti ? (
            <>
              <h3>Genel</h3>
              <p>
                Ezan Vakti uygulaması, kullanıcıların hesap oluşturmasını
                gerektirmez. Uygulama yalnızca sunduğu özelliklerin çalışması
                için gerekli olan izinleri ve verileri kullanır.
              </p>

              <h3>Konum Bilgisi</h3>
              <p>
                Ezan Vakti, kullanıcı izin verdiğinde cihazın konum bilgisine
                erişebilir. Konum bilgisi yalnızca namaz vakitlerini
                hesaplamak, kıble yönünü belirlemek ve yakındaki camileri
                göstermek amacıyla kullanılır.
              </p>

              <p>
                Konum izni iOS tarafından kullanıcıya açıkça sorulur ve
                kullanıcı bu izni istediği zaman iPhone Ayarlar bölümünden
                değiştirebilir veya kapatabilir.
              </p>

              <h3>Reklamlar ve Google AdMob</h3>
              <p>
                Ezan Vakti uygulaması reklam göstermek amacıyla Google AdMob
                hizmetini kullanabilir.
              </p>

              <p>
                Google ve reklam iş ortakları; cihaz bilgileri, reklam
                etkileşimleri ve benzeri teknik bilgileri kendi gizlilik
                politikaları doğrultusunda işleyebilir.
              </p>

              <h3>Bildirimler</h3>
              <p>
                Bildirim izni yalnızca kullanıcı tarafından etkinleştirilmesi
                halinde kullanılır. Bildirimler namaz vakitleri ve uygulamadaki
                ilgili hatırlatmalar için gönderilebilir.
              </p>

              <p>
                Kullanıcı bildirim izinlerini istediği zaman iPhone Ayarlar
                bölümünden değiştirebilir.
              </p>

              <h3>Hesap ve Kişisel Bilgiler</h3>
              <p>
                Ezan Vakti uygulamasını kullanmak için kullanıcı hesabı
                oluşturulması zorunlu değildir. Uygulama doğrudan isim,
                soyisim, adres veya telefon numarası talep etmez.
              </p>

              <h3>Apple Hizmetleri</h3>
              <p>
                App Store dağıtımı ve Apple tarafından sağlanan diğer sistem
                hizmetleri ilgili olduğunda işlemler Apple’ın kendi sistemleri
                ve politikaları kapsamında yürütülür.
              </p>

              <h3>Üçüncü Taraf Hizmetler</h3>
              <p>
                Uygulamada kullanılan üçüncü taraf hizmetlerin kendi gizlilik
                politikaları ve veri işleme uygulamaları bulunabilir. Bu
                hizmetlerin işlediği bilgiler ilgili hizmet sağlayıcının kendi
                politikalarına tabidir.
              </p>

              <h3>İletişim</h3>
              <p>
                Ezan Vakti gizlilik politikasıyla ilgili sorularınızı{" "}
                <a href="mailto:hello@saybir.net">hello@saybir.net</a>{" "}
                adresine iletebilirsiniz.
              </p>
            </>
          ) : (
            <>
              <h3>Verilerin kullanımı</h3>

              <p>
                {app.name}, yalnızca sunduğu özelliklerin çalışması için gerekli
                bilgileri işler. Cihaz izinleri gerektiğinde iOS tarafından
                açıkça istenir ve kullanıcı tarafından yönetilebilir.
              </p>

              <h3>Apple hizmetleri</h3>

              <p>
                App Store dağıtımı, uygulama içi satın alma ve abonelik
                işlemleri ilgili olduğunda Apple’ın sistemleri üzerinden
                yürütülür.
              </p>

              <h3>İletişim</h3>

              <p>
                Gizlilikle ilgili sorularınızı{" "}
                <a href="mailto:hello@saybir.net">hello@saybir.net</a>{" "}
                adresine iletebilirsiniz.
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
