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
