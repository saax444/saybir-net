import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

export default async function SupportPage({
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
  const isYemekolay = app.slug === "yemekolay";

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
          <span className={styles.kicker}>Destek</span>

          <h1>{app.name} Destek</h1>

          {isEzanVakti ? (
            <>
              <p>
                Ezan Vakti uygulamasıyla ilgili teknik sorunlar, öneriler,
                geri bildirimler veya kullanım soruları için bu sayfadaki
                iletişim adresinden bize ulaşabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Namaz vakitlerinin görüntülenmesi</li>
                <li>Konum ve şehir belirleme sorunları</li>
                <li>Kıble pusulası</li>
                <li>Namaz vakti bildirimleri</li>
                <li>Yakındaki camiler</li>
                <li>Hicri takvim</li>
                <li>Ramazan ve imsakiye özellikleri</li>
                <li>Günün ayeti ve hadisi</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Konum Sorunları</h3>

              <p>
                Namaz vakitleri, kıble yönü ve yakındaki camiler için konum
                izni gerekebilir. Konum iznini iPhone Ayarlar bölümünden
                kontrol edebilirsiniz.
              </p>

              <h3>Bildirim Sorunları</h3>

              <p>
                Namaz vakti bildirimlerini alamıyorsanız iPhone Ayarlar →
                Bildirimler bölümünden Ezan Vakti için bildirim izninin açık
                olduğundan emin olun.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "Ezan Vakti Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>Ezan Vakti uygulama sürümü</li>
                <li>Sorunun kısa açıklaması</li>
                <li>Mümkünse ekran görüntüsü</li>
              </ul>

              <h3>Gizlilik</h3>

              <p>
                Ezan Vakti gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : isSusadim ? (
            <>
              <p>
                Susadım uygulamasıyla ilgili teknik sorunlar, öneriler,
                geri bildirimler, abonelik veya kullanım soruları için
                aşağıdaki iletişim adresinden destek alabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Su tüketimi kayıtları</li>
                <li>Günlük su hedefi</li>
                <li>Su içme hatırlatmaları ve bildirimler</li>
                <li>Apple Health entegrasyonu</li>
                <li>Premium abonelik</li>
                <li>Satın alma geri yükleme</li>
                <li>Reklamlarla ilgili sorunlar</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Su Verileri</h3>

              <p>
                Su tüketimi kayıtlarınız uygulamanın takip özelliklerini
                sağlamak amacıyla kullanılır. Kayıtlarınızla ilgili beklenmeyen
                bir durum yaşarsanız destek talebinizde uygulama sürümünü ve
                sorunun ne zaman oluştuğunu belirtin.
              </p>

              <h3>Bildirim Sorunları</h3>

              <p>
                Su içme hatırlatmalarını alamıyorsanız iPhone Ayarlar →
                Bildirimler bölümünden Susadım için bildirim izninin açık
                olduğundan emin olun.
              </p>

              <h3>Apple Health</h3>

              <p>
                Susadım, desteklenen özelliklerde Apple Health ile
                senkronizasyon sağlayabilir. Health erişimi yalnızca
                kullanıcının açık izniyle gerçekleşir.
              </p>

              <p>
                Apple Health bağlantısıyla ilgili sorun yaşıyorsanız Sağlık
                uygulamasındaki izinleri ve Susadım için verilen veri erişim
                izinlerini kontrol edin.
              </p>

              <h3>Premium Abonelik</h3>

              <p>
                Premium abonelik işlemleri Apple App Store üzerinden
                gerçekleştirilir. Aboneliklerinizi iPhone Ayarlar → Apple
                Hesabı → Abonelikler bölümünden görüntüleyebilir veya
                yönetebilirsiniz.
              </p>

              <p>
                Daha önce satın aldığınız Premium erişim görünmüyorsa
                uygulamadaki satın alma geri yükleme seçeneğini kullanın.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "Susadım Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>Susadım uygulama sürümü</li>
                <li>Sorunun kısa açıklaması</li>
                <li>Mümkünse ekran görüntüsü</li>
              </ul>

              <h3>Gizlilik</h3>

              <p>
                Susadım gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : isOduyorum ? (
            <>
              <p>
                Ödüyorum uygulamasıyla ilgili teknik sorunlar, öneriler,
                geri bildirimler veya kullanım soruları için aşağıdaki
                iletişim adresinden destek alabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Gelir ve gider kayıtları</li>
                <li>Fatura ve abonelik takibi</li>
                <li>Ödeme ve hatırlatma bildirimleri</li>
                <li>Finansal kayıtların görüntülenmesi</li>
                <li>Veri silme ve gizlilik seçenekleri</li>
                <li>Reklamlarla ilgili sorunlar</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Finansal Kayıtlar</h3>

              <p>
                Ödüyorum içerisindeki gelir, gider, fatura, abonelik ve diğer
                finansal kayıtlar uygulamanın temel özelliklerini sağlamak
                amacıyla cihazınızda tutulabilir.
              </p>

              <p>
                Bir kayıt görünmüyor, yanlış hesaplanıyor veya beklenmedik bir
                davranış oluşuyorsa destek mesajınızda sorunun hangi ekranda
                meydana geldiğini belirtin.
              </p>

              <h3>Bildirim Sorunları</h3>

              <p>
                Fatura veya ödeme hatırlatmalarını alamıyorsanız iPhone Ayarlar
                → Bildirimler bölümünden Ödüyorum için bildirim izninin açık
                olduğundan emin olun.
              </p>

              <h3>Verilerin Silinmesi</h3>

              <p>
                Uygulamada desteklenen veri yönetimi seçeneklerini kullanarak
                finansal kayıtlarınızı cihazınızdan silebilirsiniz.
              </p>

              <p>
                Veri silme işlemiyle ilgili sorun yaşıyorsanız hangi kayıtların
                silinemediğini açıkça belirtin. Destek talebinize kişisel veya
                finansal bilgi içeren ekran görüntüleri eklememenizi öneririz.
              </p>

              <h3>Gizlilik ve Finansal Bilgiler</h3>

              <p>
                Destek talebi gönderirken banka bilgileri, kart numaraları,
                hesap numaraları, kişisel finansal tutarlar veya diğer hassas
                finansal bilgileri e-posta mesajınıza eklemeyin.
              </p>

              <h3>Reklam Sorunları</h3>

              <p>
                Reklamların görüntülenmesi veya gizlilik seçenekleriyle ilgili
                teknik bir sorun yaşıyorsanız kullandığınız cihazı, iOS
                sürümünü ve Ödüyorum uygulama sürümünü belirtin.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "Ödüyorum Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>Ödüyorum uygulama sürümü</li>
                <li>Sorunun hangi ekranda meydana geldiği</li>
                <li>Sorunu tekrar oluşturma adımları</li>
                <li>
                  Mümkünse kişisel veya finansal bilgi içermeyen ekran görüntüsü
                </li>
              </ul>

              <h3>Gizlilik</h3>

              <p>
                Ödüyorum gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : isHiLock ? (
            <>
              <p>
                HiLock uygulamasıyla ilgili teknik sorunlar, uygulama koruma
                özellikleri, Screen Time izinleri veya diğer kullanım
                sorularınız için aşağıdaki iletişim adresinden destek
                alabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Uygulama kilitleme ve koruma sorunları</li>
                <li>Family Controls izinleri</li>
                <li>Screen Time ve Managed Settings</li>
                <li>PIN ve uygulama güvenliği</li>
                <li>Face ID ile ilgili sorunlar</li>
                <li>Korunan uygulamaların seçimi</li>
                <li>Reklamlarla ilgili sorunlar</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Önce Bunları Kontrol Edin</h3>

              <p>
                Teknik bir sorun yaşıyorsanız öncelikle App Store üzerinden
                HiLock'un güncel sürümünü kullandığınızdan emin olun.
              </p>

              <p>
                Sorun devam ediyorsa HiLock'u tamamen kapatıp tekrar açmayı ve
                gerekirse iPhone veya iPad'inizi yeniden başlatmayı deneyin.
              </p>

              <h3>Screen Time ve Family Controls</h3>

              <p>
                HiLock'un uygulama koruma özellikleri Apple tarafından sağlanan
                Family Controls, Managed Settings ve Screen Time
                teknolojilerine bağlı olabilir.
              </p>

              <p>
                Koruma özellikleri çalışmıyorsa iPhone Ayarlar bölümündeki
                Ekran Süresi ve HiLock için verilen ilgili izinleri kontrol
                edin.
              </p>

              <p>
                Gerekli sistem izni kaldırılmışsa HiLock'un koruma
                özelliklerinin yeniden etkinleştirilmesi gerekebilir.
              </p>

              <h3>PIN ve Face ID Sorunları</h3>

              <p>
                PIN veya Face ID ile ilgili sorun yaşıyorsanız destek
                mesajınızda PIN kodunuzu paylaşmayın.
              </p>

              <p>
                Face ID kullanımının cihazınızda etkin olduğundan ve HiLock
                için gerekli sistem izinlerinin açık olduğundan emin olun.
              </p>

              <h3>Uygulama Koruması Çalışmıyorsa</h3>

              <p>
                Korunan bir uygulama beklediğiniz şekilde engellenmiyorsa
                HiLock içerisindeki uygulama seçimini ve koruma ayarlarını
                kontrol edin.
              </p>

              <p>
                Sorun devam ediyorsa hangi uygulamada sorun yaşandığını ve
                sorunu tekrar oluşturmak için izlediğiniz adımları destek
                mesajınızda belirtin.
              </p>

              <h3>Gizlilik ve Güvenlik</h3>

              <p>
                Destek talebi gönderirken PIN kodunuzu, Apple Hesabı
                parolanızı, doğrulama kodlarınızı veya diğer hassas güvenlik
                bilgilerinizi paylaşmayın.
              </p>

              <p>
                HiLock desteği sizden e-posta üzerinden Apple Hesabı parolası
                veya PIN kodu göndermenizi istemez.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "HiLock Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>HiLock uygulama sürümü</li>
                <li>Sorunun hangi ekranda meydana geldiği</li>
                <li>Sorunu tekrar oluşturma adımları</li>
                <li>
                  Mümkünse hassas bilgi içermeyen ekran görüntüsü veya ekran
                  kaydı
                </li>
              </ul>

              <h3>Gizlilik</h3>

              <p>
                HiLock gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : isCarSave ? (
            <>
              <p>
                CarSave AI uygulamasıyla ilgili teknik sorunlar, araç kayıtları,
                yolculuk takibi, konum izinleri, bildirimler, reklamlar veya
                hesap işlemleri için aşağıdaki iletişim adresinden destek
                alabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Araç ekleme ve araç bilgileri</li>
                <li>Yakıt ve şarj kayıtları</li>
                <li>Bakım ve servis kayıtları</li>
                <li>Sigorta, muayene ve vergi hatırlatmaları</li>
                <li>Konum ve harita özellikleri</li>
                <li>Yolculuk ve hareket takibi</li>
                <li>Bildirimler</li>
                <li>Apple ile Giriş ve Google ile Giriş</li>
                <li>Premium abonelik ve satın alma işlemleri</li>
                <li>Reklamlarla ilgili sorunlar</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Araç Kayıtları</h3>

              <p>
                Araç, kilometre, yakıt, bakım, servis, sigorta ve muayene
                kayıtlarınızla ilgili bir sorun yaşıyorsanız hangi araçta ve
                hangi kayıt türünde sorun oluştuğunu destek mesajınızda
                belirtin.
              </p>

              <p>
                Destek talebinde plaka, şasi numarası veya başka hassas araç
                bilgilerini paylaşmanız gerekmiyorsa bu bilgileri mesajınıza
                eklemeyin.
              </p>

              <h3>Konum ve Harita Sorunları</h3>

              <p>
                Konuma bağlı özellikler çalışmıyorsa iPhone Ayarlar →
                Gizlilik ve Güvenlik → Konum Servisleri bölümünden CarSave AI
                için konum iznini kontrol edin.
              </p>

              <p>
                Konum iznini değiştirdikten sonra uygulamayı yeniden açmanız
                gerekebilir.
              </p>

              <h3>Yolculuk ve Hareket Takibi</h3>

              <p>
                Yolculuk algılama veya hareket özellikleri çalışmıyorsa
                CarSave AI için gerekli hareket ve konum izinlerinin açık
                olduğundan emin olun.
              </p>

              <p>
                Sorun devam ediyorsa yolculuk takibinin başlamadığı veya
                durmadığı durumu ve kullandığınız cihaz modelini destek
                mesajınızda belirtin.
              </p>

              <h3>Bildirim Sorunları</h3>

              <p>
                Bakım, sigorta, muayene, vergi veya diğer araç hatırlatmalarını
                alamıyorsanız iPhone Ayarlar → Bildirimler bölümünden CarSave
                AI için bildirim izninin açık olduğundan emin olun.
              </p>

              <h3>Hesap ve Giriş Sorunları</h3>

              <p>
                Apple ile Giriş veya Google ile Giriş sırasında sorun
                yaşıyorsanız kullandığınız giriş yöntemini ve ekranda görünen
                hata mesajını destek talebinizde belirtin.
              </p>

              <p>
                Apple Hesabı parolanızı, Google hesabı parolanızı, doğrulama
                kodlarınızı veya diğer hassas hesap bilgilerini bizimle
                paylaşmayın.
              </p>

              <h3>Premium ve Satın Alma</h3>

              <p>
                Premium abonelik ve satın alma işlemleri Apple App Store
                üzerinden yürütülür. Aboneliklerinizi iPhone Ayarlar → Apple
                Hesabı → Abonelikler bölümünden görüntüleyebilir ve
                yönetebilirsiniz.
              </p>

              <p>
                Daha önce satın aldığınız Premium erişim görünmüyorsa
                uygulamadaki satın alma geri yükleme seçeneğini kullanın.
              </p>

              <h3>Reklam Sorunları</h3>

              <p>
                Reklamların görüntülenmesi, reklam rızası veya gizlilik
                seçenekleriyle ilgili bir sorun yaşıyorsanız cihaz modelinizi,
                iOS sürümünüzü ve CarSave AI uygulama sürümünü belirtin.
              </p>

              <h3>Veri ve Gizlilik</h3>

              <p>
                Araç veya uygulama verilerinizin silinmesiyle ilgili bir sorun
                yaşıyorsanız hangi veri türünü kaldırmak istediğinizi destek
                mesajınızda belirtin.
              </p>

              <p>
                Destek mesajınıza gereksiz kişisel bilgi, hesap parolası,
                ödeme bilgisi veya hassas araç bilgisi eklemeyin.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "CarSave AI Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>CarSave AI uygulama sürümü</li>
                <li>Sorunun hangi ekranda meydana geldiği</li>
                <li>Sorunu tekrar oluşturma adımları</li>
                <li>Mümkünse hassas bilgi içermeyen ekran görüntüsü</li>
              </ul>

              <h3>Gizlilik</h3>

              <p>
                CarSave AI gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : isYemekolay ? (
            <>
              <p>
                Yemekolay uygulamasıyla ilgili teknik sorunlar, öneri sistemi,
                Premium abonelik, reklamlar veya kullanım soruları için
                aşağıdaki iletişim adresinden destek alabilirsiniz.
              </p>

              <h3>Destek Konuları</h3>

              <ul>
                <li>Malzemeye göre yemek önerileri</li>
                <li>Bugün ne pişirsem önerileri</li>
                <li>Ne sipariş etsem önerileri</li>
                <li>Önerilerin yüklenmemesi veya hatalı görünmesi</li>
                <li>Günlük kullanım hakkı</li>
                <li>Ödüllü reklam ile ek kullanım hakkı</li>
                <li>Premium abonelik</li>
                <li>Satın alma geri yükleme</li>
                <li>Bildirimler</li>
                <li>Reklamlarla ilgili sorunlar</li>
                <li>Uygulama içindeki diğer teknik sorunlar</li>
              </ul>

              <h3>Öneriler Çalışmıyorsa</h3>

              <p>
                Malzemeye göre yemek önerisi veya diğer öneri ekranlarında
                sonuç alamıyorsanız internet bağlantınızı kontrol edin ve
                uygulamanın güncel sürümünü kullandığınızdan emin olun.
              </p>

              <p>
                Sorun devam ediyorsa hangi öneri türünde sorun yaşadığınızı,
                hangi malzemeleri veya seçenekleri kullandığınızı ve ekranda
                görünen hata mesajını destek talebinizde belirtin.
              </p>

              <h3>Günlük Kullanım ve Ödüllü Reklam</h3>

              <p>
                Ücretsiz kullanım hakkınızın yenilenmediğini veya ödüllü reklam
                izledikten sonra ek kullanım hakkının tanımlanmadığını
                düşünüyorsanız uygulamayı tamamen kapatıp tekrar açmayı deneyin.
              </p>

              <p>
                Ödüllü reklam yüklenmiyorsa internet bağlantınızı kontrol edin.
                Reklam kullanılabilirliği bölgeye, reklam sağlayıcısına ve o
                andaki reklam envanterine göre değişebilir.
              </p>

              <h3>Premium Abonelik</h3>

              <p>
                Premium abonelik işlemleri Apple App Store üzerinden
                gerçekleştirilir. Aboneliklerinizi iPhone Ayarlar → Apple
                Hesabı → Abonelikler bölümünden görüntüleyebilir veya
                yönetebilirsiniz.
              </p>

              <p>
                Daha önce satın aldığınız Premium erişim görünmüyorsa
                uygulamadaki satın alma geri yükleme seçeneğini kullanın.
              </p>

              <h3>Bildirim Sorunları</h3>

              <p>
                Yemekolay bildirimlerini alamıyorsanız iPhone Ayarlar →
                Bildirimler bölümünden Yemekolay için bildirim izninin açık
                olduğundan emin olun.
              </p>

              <h3>Reklam Sorunları</h3>

              <p>
                Reklamların görüntülenmesi, ödüllü reklamlar veya reklam
                gizlilik seçenekleriyle ilgili sorun yaşıyorsanız cihaz
                modelinizi, iOS sürümünüzü ve Yemekolay uygulama sürümünü
                destek mesajınızda belirtin.
              </p>

              <h3>Gizlilik</h3>

              <p>
                Destek talebi gönderirken kişisel, finansal veya hassas
                bilgilerinizi paylaşmayın. Öneri sistemiyle ilgili destek
                taleplerinde sorunu anlamamız için yalnızca gerekli bilgileri
                iletin.
              </p>

              <h3>Destek ile İletişim</h3>

              <p>
                Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    "Yemekolay Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza Ekleyin</h3>

              <ul>
                <li>Kullandığınız iPhone veya iPad modeli</li>
                <li>iOS veya iPadOS sürümü</li>
                <li>Yemekolay uygulama sürümü</li>
                <li>Sorunun hangi ekranda meydana geldiği</li>
                <li>Sorunu tekrar oluşturma adımları</li>
                <li>Mümkünse hassas bilgi içermeyen ekran görüntüsü</li>
              </ul>

              <h3>Gizlilik Politikası</h3>

              <p>
                Yemekolay gizlilik politikası için{" "}
                <Link href={`/apps/${app.slug}/privacy`}>
                  Gizlilik Politikası
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </>
          ) : (
            <>
              <p>
                Uygulamayla ilgili teknik sorun, geri bildirim veya destek
                talebiniz için aşağıdaki adresten iletişime geçebilirsiniz.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                    app.name + " Destek"
                  )}`}
                >
                  hello@saybir.net
                </a>
              </div>

              <h3>Mesajınıza ekleyin</h3>

              <ul>
                <li>Kullandığınız cihaz ve iOS sürümü</li>
                <li>Uygulama sürümü</li>
                <li>Sorunun kısa açıklaması ve mümkünse ekran görüntüsü</li>
              </ul>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
