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
  const isOduyorum = app.slug === "oduyorum";
  const isHiLock = app.slug === "hilock";
  const isCarSave = app.slug === "carsave-ai";

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
          ) : isOduyorum ? (
            <>
              <h3>Genel</h3>
              <p>
                Ödüyorum, gelir, gider, fatura, abonelik ve diğer finansal
                kayıtlarınızı takip etmenize yardımcı olan bir iOS
                uygulamasıdır.
              </p>

              <p>
                Uygulamaya girdiğiniz finansal kayıtlar temel olarak cihazınızda
                saklanır ve uygulamanın temel özelliklerini sunmak amacıyla
                cihaz üzerinde işlenir.
              </p>

              <h3>Finansal Kayıtlar</h3>
              <p>
                Gelir, gider, fatura, abonelik, varlık ve diğer finansal
                bilgileriniz uygulamanın yerel veri alanında saklanabilir.
              </p>

              <p>
                Ödüyorum geliştiricisi bu finansal kayıtları kendi sunucularına
                aktarmak amacıyla toplamaz.
              </p>

              <h3>Bildirimler</h3>
              <p>
                Kullanıcı bildirimlere izin verdiğinde fatura, abonelik ve
                ilgili ödeme hatırlatmaları iOS bildirim sistemi kullanılarak
                cihaz üzerinde planlanabilir.
              </p>

              <p>
                Bildirim izinlerini istediğiniz zaman iPhone Ayarlar bölümünden
                değiştirebilir veya kapatabilirsiniz.
              </p>

              <h3>Reklamlar ve Google AdMob</h3>
              <p>
                Ödüyorum uygulamasının ücretsiz sürümü reklam göstermek amacıyla
                Google AdMob hizmetini kullanabilir.
              </p>

              <p>
                Google ve reklam iş ortakları; reklam sunma, reklam
                performansını ölçme, sahtekârlığı önleme ve kullanıcının izin
                verdiği durumlarda kişiselleştirme amacıyla cihaz bilgileri,
                reklam etkileşimleri, yaklaşık konum ve benzeri teknik verileri
                kendi politikaları doğrultusunda işleyebilir.
              </p>

              <h3>Finansal Verilerin Reklam Amaçlı Kullanımı</h3>
              <p>
                Ödüyorum içerisine girdiğiniz gelir, gider, fatura, abonelik ve
                diğer finansal kayıtlar reklam hedefleme amacıyla kullanılmaz
                ve reklam sağlayıcılarıyla paylaşılmaz.
              </p>

              <h3>Veri Paylaşımı</h3>
              <p>
                Kullanıcının uygulamaya girdiği finansal kayıtlar geliştirici
                tarafından üçüncü taraflara satılmaz.
              </p>

              <p>
                Reklam sağlayıcılarının kendi sistemleri üzerinden topladığı
                teknik veya reklam verileri ilgili hizmet sağlayıcının kendi
                gizlilik politikalarına tabidir.
              </p>

              <h3>Verilerin Silinmesi</h3>
              <p>
                Ödüyorum uygulamasındaki desteklenen veri silme seçeneklerini
                kullanarak finansal kayıtlarınızı cihazınızdan
                kaldırabilirsiniz.
              </p>

              <p>
                Uygulamadaki Ayarlar ve veri yönetimi seçeneklerinden yerel
                kayıtlarınızı silebilirsiniz. Uygulamanın cihazdan kaldırılması
                da uygulamanın yerel verilerinin kaldırılmasına neden olabilir.
              </p>

              <h3>Veri Güvenliği</h3>
              <p>
                Finansal kayıtlar mümkün olduğu ölçüde cihazın yerel uygulama
                alanında tutulur. iOS tarafından sağlanan sistem güvenliği ve
                veri koruma mekanizmaları kullanılabilir.
              </p>

              <h3>Çocukların Gizliliği</h3>
              <p>
                Ödüyorum özellikle çocuklara yönelik bir uygulama değildir.
                Geliştirici bilerek çocuklardan kişisel veya finansal bilgi
                toplamaz.
              </p>

              <h3>Üçüncü Taraf Hizmetler</h3>
              <p>
                Uygulamada kullanılan üçüncü taraf hizmetlerin kendi gizlilik
                politikaları ve veri işleme uygulamaları bulunabilir. Bu
                hizmetlerin işlediği bilgiler ilgili hizmet sağlayıcının kendi
                koşullarına tabidir.
              </p>

              <h3>Politika Değişiklikleri</h3>
              <p>
                Bu gizlilik politikası uygulama özellikleri, kullanılan
                hizmetler veya yasal gereklilikler değiştiğinde
                güncellenebilir. Güncel politika bu sayfada yayımlanır.
              </p>

              <h3>İletişim</h3>
              <p>
                Ödüyorum gizlilik politikasıyla ilgili sorularınızı{" "}
                <a href="mailto:hello@saybir.net">hello@saybir.net</a>{" "}
                adresine iletebilirsiniz.
              </p>
            </>
          ) : isHiLock ? (
            <>
              <h3>Genel</h3>
              <p>
                HiLock, seçtiğiniz uygulamalara erişimi yönetmenize ve cihaz
                kullanımınızı daha kontrollü hale getirmenize yardımcı olan bir
                iOS uygulamasıdır.
              </p>

              <p>
                HiLock mümkün olan verileri cihaz üzerinde tutacak şekilde
                tasarlanmıştır.
              </p>

              <h3>PIN ve Güvenlik Bilgileri</h3>
              <p>
                HiLock, uygulama güvenliği için belirlediğiniz PIN kodunun açık
                halini saklamaz.
              </p>

              <p>
                PIN doğrulaması için kullanılan tek yönlü özet gibi gerekli
                güvenlik bilgileri Apple Keychain içerisinde saklanabilir.
              </p>

              <p>
                HiLock üçüncü taraf uygulamalardaki hesaplarınıza,
                parolalarınıza veya uygulama içeriklerinize erişmez.
              </p>

              <h3>Güvenlik Ayarları ve Olay Günlüğü</h3>
              <p>
                Uygulamadaki güvenlik tercihleri, seçilen koruma politikaları ve
                desteklenen güvenlik olayları cihazınızda saklanabilir.
              </p>

              <p>
                Bu bilgiler HiLock'un uygulama koruma ve güvenlik özelliklerini
                sağlayabilmesi amacıyla kullanılır.
              </p>

              <h3>Family Controls ve Managed Settings</h3>
              <p>
                HiLock, uygulama erişim kontrollerini sağlamak için Apple
                tarafından sunulan Family Controls, Managed Settings ve ilgili
                Screen Time teknolojilerini kullanabilir.
              </p>

              <p>
                Bu özelliklerin kullanılması kullanıcı izni gerektirir.
                Uygulama seçimleri Apple'ın gizlilik korumalı sistemleri ve
                belirteçleri üzerinden yönetilebilir.
              </p>

              <p>
                HiLock, koruma amacıyla seçtiğiniz üçüncü taraf uygulamaların
                hesap bilgilerine veya içeriklerine erişmez.
              </p>

              <h3>Reklamlar ve Google AdMob</h3>
              <p>
                HiLock'un reklam destekli sürümü reklam göstermek amacıyla
                Google AdMob hizmetini kullanabilir.
              </p>

              <p>
                Google ve reklam iş ortakları; cihaz bilgileri, reklam
                etkileşimleri ve benzeri teknik bilgileri kendi gizlilik
                politikaları doğrultusunda işleyebilir.
              </p>

              <p>
                Gerekli olduğu bölgelerde reklam kişiselleştirme ve ilgili
                işlemler için kullanıcı rızası istenebilir.
              </p>

              <h3>Screen Time Verilerinin Reklam Amaçlı Kullanımı</h3>
              <p>
                HiLock'un Family Controls, Managed Settings veya diğer Apple
                Screen Time teknolojileri üzerinden kullandığı koruma
                bilgileri reklam hedefleme amacıyla kullanılmaz.
              </p>

              <h3>Verilerin Silinmesi</h3>
              <p>
                Uygulama tarafından desteklenen güvenlik günlüğü ve yerel
                kayıtlar HiLock içerisindeki ilgili ayarlardan temizlenebilir.
              </p>

              <p>
                Uygulamanın cihazdan kaldırılması uygulamanın yerel verilerini
                kaldırabilir. Apple Keychain içerisinde tutulan verilerin
                saklanması ve silinmesi Apple'ın platform davranışlarına
                tabidir.
              </p>

              <h3>Veri Güvenliği</h3>
              <p>
                HiLock, güvenlikle ilgili bilgileri mümkün olduğu ölçüde
                cihazınızda tutar ve desteklenen durumlarda iOS tarafından
                sağlanan Keychain ve diğer sistem güvenliği mekanizmalarını
                kullanır.
              </p>

              <h3>Üçüncü Taraf Hizmetler</h3>
              <p>
                Uygulamada kullanılan üçüncü taraf hizmetlerin kendi gizlilik
                politikaları ve veri işleme uygulamaları bulunabilir. Bu
                hizmetlerin işlediği bilgiler ilgili hizmet sağlayıcının kendi
                politikalarına tabidir.
              </p>

              <h3>Politika Değişiklikleri</h3>
              <p>
                Bu gizlilik politikası uygulamanın özellikleri, kullanılan
                hizmetler veya yasal gereklilikler değiştiğinde
                güncellenebilir. Güncel sürüm bu sayfada yayımlanır.
              </p>

              <h3>İletişim</h3>
              <p>
                HiLock gizlilik politikasıyla ilgili sorularınızı{" "}
                <a href="mailto:hello@saybir.net">hello@saybir.net</a>{" "}
                adresine iletebilirsiniz.
              </p>
            </>
          ) : isCarSave ? (
            <>
              <h3>Genel</h3>
              <p>
                CarSave AI, araç bilgilerinizi, bakım kayıtlarınızı, yakıt
                işlemlerinizi, önemli tarihleri ve araçla ilgili diğer
                bilgileri düzenlemenize yardımcı olan bir iOS uygulamasıdır.
              </p>

              <h3>Hesap ve Kimlik Doğrulama</h3>
              <p>
                CarSave AI, desteklenen durumlarda Apple ile Giriş ve Google
                ile Giriş seçeneklerini kullanabilir. Kimlik doğrulama
                işlemlerinde Firebase Authentication gibi hizmetler
                kullanılabilir.
              </p>

              <p>
                Bu işlemler sırasında hesabın doğrulanması için gerekli hesap
                kimliği ve temel hesap bilgileri ilgili hizmet sağlayıcılar
                tarafından işlenebilir.
              </p>

              <h3>Araç Bilgileri</h3>
              <p>
                Kullanıcı tarafından eklenen araç bilgileri; marka, model,
                kilometre, yakıt türü, bakım bilgileri, sigorta, muayene ve
                benzeri araç kayıtlarını içerebilir.
              </p>

              <p>
                Bu bilgiler CarSave AI'nin araç yönetimi ve hatırlatma
                özelliklerini sağlamak amacıyla kullanılır.
              </p>

              <h3>Yakıt, Bakım ve Harcama Kayıtları</h3>
              <p>
                Yakıt veya şarj kayıtları, bakım ve servis işlemleri, kilometre
                bilgileri ve kullanıcı tarafından girilen ilgili maliyetler
                uygulama içindeki takip ve istatistik özelliklerini sağlamak
                amacıyla işlenebilir.
              </p>

              <p>
                Kullanıcının girdiği araç ve maliyet kayıtları reklam hedefleme
                amacıyla kullanılmaz.
              </p>

              <h3>Konum Bilgisi</h3>
              <p>
                CarSave AI, yalnızca kullanıcı izin verdiğinde cihazın konum
                bilgisine erişebilir.
              </p>

              <p>
                Konum bilgisi; yolculuk özellikleri, yakın çevredeki araçla
                ilgili hizmet noktalarının gösterilmesi veya konuma bağlı
                özelliklerin sağlanması amacıyla kullanılabilir.
              </p>

              <p>
                Konum izni iOS tarafından yönetilir ve kullanıcı istediği zaman
                iPhone Ayarlar bölümünden bu izni değiştirebilir veya
                kapatabilir.
              </p>

              <h3>Hareket ve Yolculuk Bilgileri</h3>
              <p>
                Kullanıcı izin verdiğinde CarSave AI, desteklenen yolculuk veya
                sürüş özelliklerini sağlamak amacıyla cihazın hareket
                sensörlerinden gelen bilgileri kullanabilir.
              </p>

              <p>
                Hareket bilgileri yalnızca ilgili uygulama özelliklerini
                sağlamak amacıyla kullanılır.
              </p>

              <h3>Bildirimler</h3>
              <p>
                Kullanıcı izin verdiğinde CarSave AI; bakım, sigorta, muayene,
                vergi ve kullanıcı tarafından oluşturulan diğer araç
                hatırlatmaları için bildirim gönderebilir.
              </p>

              <p>
                Bildirim izinleri iOS tarafından yönetilir ve kullanıcı
                tarafından istenildiği zaman değiştirilebilir.
              </p>

              <h3>Reklamlar ve Google AdMob</h3>
              <p>
                CarSave AI reklam göstermek amacıyla Google AdMob hizmetini
                kullanabilir.
              </p>

              <p>
                Google ve reklam iş ortakları; reklam sunma, performans ölçümü,
                sahtekârlığı önleme ve kullanıcının izin verdiği durumlarda
                kişiselleştirme amacıyla cihaz bilgileri, reklam etkileşimleri
                ve benzeri teknik bilgileri kendi politikaları doğrultusunda
                işleyebilir.
              </p>

              <h3>Uygulama Takibi Şeffaflığı</h3>
              <p>
                iOS tarafından gerekli görüldüğü durumlarda CarSave AI, reklam
                veya ölçüm amaçlı cihaz tanımlayıcılarının kullanılabilmesi için
                App Tracking Transparency izni isteyebilir.
              </p>

              <p>
                Kullanıcının bu izni vermesi zorunlu değildir ve tercih iOS
                Ayarlar bölümünden değiştirilebilir.
              </p>

              <h3>Araç Verilerinin Reklam Amaçlı Kullanımı</h3>
              <p>
                Kullanıcının CarSave AI içerisine girdiği araç, kilometre,
                yakıt, bakım, servis, sigorta, muayene ve maliyet kayıtları
                reklam hedefleme amacıyla kullanılmaz.
              </p>

              <h3>Üçüncü Taraf Hizmetler</h3>
              <p>
                CarSave AI; Apple hizmetleri, Google hizmetleri, Firebase ve
                Google AdMob gibi üçüncü taraf teknolojileri kullanabilir.
              </p>

              <p>
                Bu hizmetlerin kendi gizlilik politikaları ve veri işleme
                uygulamaları bulunur. İlgili hizmetlerin kendi sistemleri
                üzerinden işlediği bilgiler kendi politikalarına tabidir.
              </p>

              <h3>Verilerin Silinmesi</h3>
              <p>
                Uygulamada desteklenen veri yönetimi seçenekleri kullanılarak
                araç ve ilgili yerel kayıtlar silinebilir.
              </p>

              <p>
                Hesap veya veri silme işlemleriyle ilgili destek için{" "}
                <a href="mailto:hello@saybir.net">hello@saybir.net</a>{" "}
                adresinden iletişime geçebilirsiniz.
              </p>

              <h3>Veri Güvenliği</h3>
              <p>
                CarSave AI, uygulama verilerini yalnızca özelliklerin
                sağlanması için gerekli olduğu ölçüde kullanmayı ve
                desteklenen verileri iOS tarafından sağlanan güvenlik
                mekanizmalarıyla korumayı amaçlar.
              </p>

              <h3>Politika Değişiklikleri</h3>
              <p>
                Bu gizlilik politikası uygulamanın özellikleri, kullanılan
                hizmetler veya yasal gereklilikler değiştiğinde
                güncellenebilir. Güncel sürüm bu sayfada yayımlanır.
              </p>

              <h3>İletişim</h3>
              <p>
                CarSave AI gizlilik politikasıyla ilgili sorularınızı{" "}
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
                işlemleri ilgili olduğunda Apple'ın sistemleri üzerinden
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
