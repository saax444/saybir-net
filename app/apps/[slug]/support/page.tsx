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
