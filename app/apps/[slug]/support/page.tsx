import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

type SupportConfig = {
  intro: string;
  topics: string[];
  checks?: { title: string; text: string }[];
};

function appKey(name: string) {
  const value = name.toLocaleLowerCase("tr-TR");

  if (value.includes("ne seçsem")) return "ne-secsem";
  if (value.includes("yemekolay")) return "yemekolay";
  if (value.includes("carsave")) return "carsave";
  if (value.includes("hilock")) return "hilock";
  if (value.includes("ödüyorum")) return "oduyorum";
  if (value.includes("susadım")) return "susadim";
  if (value.includes("ezan vakti")) return "ezan-vakti";
  if (value.includes("melody map")) return "melody-map";
  if (value.includes("history")) return "history";
  if (value.includes("velomate")) return "velomate";
  if (value.includes("tartarot")) return "tartarot";
  if (value.includes("vibelens")) return "vibelens";
  if (value.includes("ref!ref!ref!") || value.includes("ref ref ref")) return "refrefref";
  if (value.includes("bold block arcade")) return "bold-block-arcade";
  if (value.includes("üşenme yap")) return "usenme-yap";
  if (value.includes("kedilik")) return "kedilik";

  return "generic";
}

const configs: Record<string, SupportConfig> = {
  "ne-secsem": {
    intro:
      "Ne Seçsem? uygulamasıyla ilgili teknik sorunlar, öneri sistemi, Premium abonelik, reklamlar veya kullanım soruları için destek alabilirsiniz.",
    topics: [
      "Film, dizi ve kitap önerileri",
      "Ruh hâline göre öneriler",
      "Filtreler ve Kararsızım özelliği",
      "Favoriler ve İzledim / Okudum kayıtları",
      "Günlük öneri bildirimleri",
      "Ödüllü reklamlar",
      "Premium abonelik ve satın alma geri yükleme",
    ],
    checks: [
      {
        title: "Öneriler Çalışmıyorsa",
        text: "İnternet bağlantınızı ve uygulamanın güncel sürümünü kontrol edin. Sorun devam ederse içerik türünü, kullandığınız filtreleri ve ekranda görünen hata mesajını destek talebinize ekleyin.",
      },
    ],
  },

  yemekolay: {
    intro:
      "Yemekolay ile ilgili teknik sorunlar, öneriler, Premium abonelik, ödüllü reklamlar veya kullanım sorunları için destek alabilirsiniz.",
    topics: [
      "Malzemeye göre yemek önerileri",
      "Bugün ne pişirsem / ne sipariş etsem",
      "6.000 tarif arşivi",
      "Günlük kullanım hakkı",
      "Ödüllü reklamlar",
      "Premium abonelik ve satın alma geri yükleme",
      "Bildirimler",
    ],
    checks: [
      {
        title: "Öneriler Çalışmıyorsa",
        text: "İnternet bağlantınızı ve uygulamanın güncel sürümünü kontrol edin. Sorun devam ederse kullandığınız malzemeleri veya seçeneği ve hata mesajını belirtin.",
      },
    ],
  },

  carsave: {
    intro:
      "CarSave AI ile ilgili araç kayıtları, yolculuk, konum, bildirim, hesap, Premium veya reklam sorunları için destek alabilirsiniz.",
    topics: [
      "Araç ekleme ve düzenleme",
      "Yakıt ve şarj kayıtları",
      "Bakım ve servis kayıtları",
      "Sigorta, muayene ve vergi hatırlatmaları",
      "Konum ve harita",
      "Yolculuk ve hareket takibi",
      "Apple / Google ile Giriş",
      "Premium ve satın alma geri yükleme",
    ],
    checks: [
      {
        title: "Konum veya Yolculuk Sorunları",
        text: "iPhone Ayarlar bölümünden CarSave AI için gerekli konum ve hareket izinlerini kontrol edin.",
      },
    ],
  },

  hilock: {
    intro:
      "HiLock ile ilgili uygulama koruma, PIN, Face ID, Screen Time, Family Controls veya Mac koruması sorunları için destek alabilirsiniz.",
    topics: [
      "Uygulama kilitleme ve koruma",
      "Family Controls ve Managed Settings",
      "Screen Time izinleri",
      "PIN ve Face ID",
      "Korunan uygulama seçimi",
      "Native macOS koruması",
      "Reklam sorunları",
    ],
    checks: [
      {
        title: "Güvenlik Bilgileri",
        text: "Destek talebinde PIN kodunuzu, Apple Hesabı parolanızı veya doğrulama kodlarınızı paylaşmayın.",
      },
    ],
  },

  oduyorum: {
    intro:
      "Ödüyorum ile ilgili finansal kayıtlar, faturalar, abonelikler, bildirimler veya reklam sorunları için destek alabilirsiniz.",
    topics: [
      "Gelir ve gider kayıtları",
      "Fatura ve abonelik takibi",
      "Hatırlatma bildirimleri",
      "Finansal kayıtların görüntülenmesi",
      "Veri silme",
      "Reklam sorunları",
    ],
    checks: [
      {
        title: "Finansal Gizlilik",
        text: "Destek mesajınıza kart numarası, banka hesabı bilgisi, parola veya gereksiz hassas finansal bilgi eklemeyin.",
      },
    ],
  },

  susadim: {
    intro:
      "Susadım ile ilgili su kayıtları, hatırlatmalar, Apple Health, Premium veya reklam sorunları için destek alabilirsiniz.",
    topics: [
      "Su tüketimi kayıtları",
      "Günlük su hedefi",
      "Su içme bildirimleri",
      "Apple Health",
      "Premium abonelik",
      "Satın alma geri yükleme",
      "Reklam sorunları",
    ],
    checks: [
      {
        title: "Bildirim Sorunları",
        text: "iPhone Ayarlar → Bildirimler bölümünden Susadım için bildirim izninin açık olduğunu kontrol edin.",
      },
    ],
  },

  "ezan-vakti": {
    intro:
      "Ezan Vakti: Namaz ve Kıble ile ilgili teknik sorunlar ve kullanım soruları için destek alabilirsiniz.",
    topics: [
      "Namaz vakitleri",
      "Konum ve şehir belirleme",
      "Kıble pusulası",
      "Namaz vakti bildirimleri",
      "Yakındaki camiler",
      "Hicri takvim",
      "Ramazan ve imsakiye",
      "Günün ayeti ve hadisi",
    ],
    checks: [
      {
        title: "Konum ve Bildirimler",
        text: "Konum veya bildirim özellikleri çalışmıyorsa iPhone Ayarlar bölümünden Ezan Vakti izinlerini kontrol edin.",
      },
    ],
  },

  "melody-map": {
    intro:
      "Melody Map ile ilgili müzik keşfi, Spotify bağlantısı veya diğer teknik sorunlar için destek alabilirsiniz.",
    topics: [
      "Spotify bağlantısı",
      "Müzik içeriklerinin yüklenmesi",
      "Favoriler ve tercihler",
      "Yetkilendirme sorunları",
      "Uygulama içindeki diğer teknik sorunlar",
    ],
    checks: [
      {
        title: "Spotify Bağlantısı",
        text: "Bağlantı sorunu yaşarsanız internet bağlantınızı kontrol edin ve gerekirse Spotify yetkilendirmesini yeniden gerçekleştirin. Parolanızı destek mesajında paylaşmayın.",
      },
    ],
  },

  history: {
    intro:
      "HiStory ile ilgili günlük bilgiler, ilgi alanları, ülke seçimi, Premium, reklamlar veya bildirimler için destek alabilirsiniz.",
    topics: [
      "Günlük bilgiler",
      "İlgi alanları ve ülke seçimi",
      "Ödüllü reklamlar",
      "Premium abonelik",
      "Bildirimler",
      "Dil ve uygulama tercihleri",
    ],
  },

  velomate: {
    intro:
      "VeloMate ile ilgili teknik sorunlar, cihaz izinleri, reklam veya uygulama özellikleri için destek alabilirsiniz.",
    topics: [
      "Uygulamanın temel özellikleri",
      "Cihaz izinleri",
      "Reklam ve gizlilik seçenekleri",
      "Bildirimler",
      "Diğer teknik sorunlar",
    ],
  },

  tartarot: {
    intro:
      "TarTarot ile ilgili tarot açılımları, günlük kartlar, Premium veya bildirim sorunları için destek alabilirsiniz.",
    topics: [
      "Günlük tarot",
      "3 kart açılımı",
      "Evet / Hayır özelliği",
      "Kart yorumları",
      "Favoriler veya günlük kayıtları",
      "Premium abonelik",
      "Bildirimler",
    ],
    checks: [
      {
        title: "Not",
        text: "Tarot içerikleri eğlence amaçlıdır. Teknik destek talebinizde yalnızca sorunu çözmek için gerekli bilgileri paylaşın.",
      },
    ],
  },

  vibelens: {
    intro:
      "VibeLens ile ilgili analiz özellikleri, Premium abonelik veya diğer teknik sorunlar için destek alabilirsiniz.",
    topics: [
      "Uygulama analiz özellikleri",
      "Kullanıcı girdileri",
      "Premium abonelik",
      "Satın alma geri yükleme",
      "Diğer teknik sorunlar",
    ],
  },

  refrefref: {
    intro:
      "Ref!Ref!Ref! ile ilgili oyun, skor, reklam veya satın alma sorunları için destek alabilirsiniz.",
    topics: [
      "Oyun kontrolleri",
      "Skor ve ilerleme",
      "Tema veya oyun ayarları",
      "Reklamlar",
      "Reklam kaldırma satın alması",
      "Ses ve titreşim",
    ],
  },

  "bold-block-arcade": {
    intro:
      "Bold Block Arcade ile ilgili oyun performansı, skor, reklam veya diğer teknik sorunlar için destek alabilirsiniz.",
    topics: [
      "Oyun kontrolleri",
      "Skor ve ilerleme",
      "Performans",
      "Reklamlar",
      "Uygulama içi satın almalar",
    ],
  },

  "usenme-yap": {
    intro:
      "Üşenme Yap ile ilgili görevler, motivasyon özellikleri, hesap, reklam veya Premium sorunları için destek alabilirsiniz.",
    topics: [
      "Görev ve alışkanlık özellikleri",
      "Bildirimler",
      "Google / Firebase giriş",
      "Reklamlar",
      "Premium abonelik",
      "Satın alma geri yükleme",
    ],
  },

  kedilik: {
    intro:
      "Kedilik ile ilgili içerikler, uygulama tercihleri, bildirimler veya diğer teknik sorunlar için destek alabilirsiniz.",
    topics: [
      "Uygulama içerikleri",
      "Favoriler ve tercihler",
      "Bildirimler",
      "Reklamlar",
      "Diğer teknik sorunlar",
    ],
  },

  generic: {
    intro:
      "Uygulamayla ilgili teknik sorun, geri bildirim veya kullanım soruları için destek alabilirsiniz.",
    topics: ["Teknik sorunlar", "Geri bildirim", "Uygulama özellikleri"],
  },
};

export default async function SupportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug);

  if (!app) {
    notFound();
  }

  const config = configs[appKey(app.name)] ?? configs.generic;

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

          <p>{config.intro}</p>

          <h3>Destek Konuları</h3>
          <ul>
            {config.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>

          {config.checks?.map((item) => (
            <section key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </section>
          ))}

          <h3>Destek ile İletişim</h3>
          <p>Destek talebinizi aşağıdaki e-posta adresine gönderebilirsiniz.</p>

          <div className={styles.actions}>
            <a
              href={`mailto:hello@saybir.net?subject=${encodeURIComponent(
                app.name + " Destek"
              )}`}
            >
              hello@saybir.net
            </a>
          </div>

          <h3>Mesajınıza Ekleyin</h3>
          <ul>
            <li>Kullandığınız iPhone veya iPad modeli</li>
            <li>iOS veya iPadOS sürümü</li>
            <li>{app.name} uygulama sürümü</li>
            <li>Sorunun hangi ekranda meydana geldiği</li>
            <li>Sorunu tekrar oluşturma adımları</li>
            <li>Mümkünse hassas bilgi içermeyen ekran görüntüsü</li>
          </ul>

          <h3>Gizlilik Politikası</h3>
          <p>
            {app.name} gizlilik politikası için{" "}
            <Link href={`/apps/${app.slug}/privacy`}>
              Gizlilik Politikası
            </Link>{" "}
            sayfasını ziyaret edebilirsiniz.
          </p>
        </section>
      </main>
    </div>
  );
}
