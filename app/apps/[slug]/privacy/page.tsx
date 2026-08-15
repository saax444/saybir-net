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
  const isSusadim = app.slug === "susadim";

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
          ) : isSusadim ? (
            <>
              <h3>Genel</h3>
              <p>
                Susadım, günlük su tüketiminizi takip etmenize yardımcı olan
                bir iOS uygulamasıdır. Uygulama yalnızca özelliklerin çalışması
                için gerekli olan verileri ve izinleri kullanır.
              </p>

              <h3>Su Tüketimi Kayıtları</h3>
              <p>
                Günlük su tüketimi, hedefler ve ilgili kullanım kayıtları
                uygulamanın takip özelliklerini sağlamak amacıyla işlenebilir.
                Bu veriler temel olarak cihazınızda saklanır.
              </p>

              <h3>Bildirim Tercihleri</h3>
              <p>
                Kullanıcı izin verdiğinde Susadım, su içme hatırlatmaları ve
                ilgili bildirimleri gönderebilir.
              </p>

              <p>
                Bildirim izinleri iOS tarafından yönetilir ve kullanıcı
                istediği zaman iPhone Ayarlar bölümünden değiştirilebilir veya
                kapatılabilir.
              </p>

              <h3>Dil ve Uygulama Tercihleri</h3>
              <p>
                Uygulama deneyimini kişiselleştirmek amacıyla dil ayarı ve
                uygulama içindeki bazı tercihler cihaz üzerinde saklanabilir.
              </p>

              <h3>Apple Health</h3>
              <p>
                Susadım, desteklenen özelliklerde Apple Health ile entegrasyon
                sağlayabilir.
              </p>

              <p>
                Apple Health verilerine yalnızca kullanıcının açık izniyle
                erişilir. İzin verildiğinde uygulama, desteklenen sağlık
                verilerini okuyabilir veya yazabilir.
              </p>

              <p>
                Apple Health üzerinden erişilen sağlık verileri reklam amacıyla
                kullanılmaz, satılmaz ve reklam sağlayıcılarıyla paylaşılmaz.
              </p>

              <p>
                Kullanıcı Apple Health izinlerini istediği zaman iPhone Sağlık
                uygulaması veya iOS Ayarlar bölümünden yönetebilir.
              </p>

              <h3>Premium Abonelik</h3>
              <p>
                Premium abonelik durumu, uygulamadaki ücretli özelliklere
                erişimi belirlemek amacıyla kullanılabilir.
              </p>

              <p>
                Abonelik satın alma, yenileme ve ödeme işlemleri Apple App
                Store üzerinden gerçekleştirilir. Geliştirici kredi kartı veya
                banka kartı bilgilerinize erişmez.
              </p>

              <h3>Reklamlar ve Google AdMob</h3>
              <p>
                Susadım uygulamasının ücretsiz sürümü reklam göstermek amacıyla
                Google AdMob hizmetini kullanabilir.
              </p>

              <p>
                Google ve reklam iş ortakları; cihaz bilgileri, reklam
                etkileşimleri ve benzeri teknik bilgileri kendi gizlilik
                politikaları doğrultusunda işleyebilir.
              </p>

              <p>
                Apple Health üzerinden elde edilen sağlık verileri reklam
                hedefleme veya reklam profili oluşturma amacıyla kullanılmaz.
              </p>

              <h3>Veri Güvenliği</h3>
              <p>
                Uygulama içindeki kullanım verileri mümkün olduğu ölçüde cihaz
                üzerinde saklanır. Desteklenen özelliklerde Apple tarafından
                sağlanan sistem servisleri kullanılabilir.
              </p>

              <h3>Üçüncü Taraf Hizmetler</h3>
              <p>
                Uygulamada kullanılan üçüncü taraf hizmetlerin kendi gizlilik
                politikaları bulunabilir. Bu hizmetlerin işlediği bilgiler
                ilgili hizmet sağlayıcının kendi koşullarına tabidir.
              </p>

              <h3>İletişim</h3>
              <p>
                Susadım gizlilik politikasıyla ilgili sorularınızı{" "}
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
