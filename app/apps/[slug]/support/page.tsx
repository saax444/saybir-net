import Link from "next/link";
import { notFound } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

type SupportConfig = { intro: string; topics: string[] };

const supportBySlug: Record<string, SupportConfig> = {
  "hushloom": {
    intro: "Hushloom için ses oynatma, reklam izni, Premium abonelik, satın alımları geri yükleme ve gizlilik desteği bu sayfa üzerinden sağlanır.",
    topics: ["Sesler ve ses katmanları", "Temalar ve favoriler", "Zamanlanmış oturumlar", "Reklam ve gizlilik seçenekleri", "Premium abonelik", "Satın alımları geri yükleme"],
  },
  "ne-secsem": {
    intro: "Ne Seçsem? için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Film, dizi ve kitap önerileri",
      "Ruh hâli ve filtreler",
      "Favoriler / İzledim / Okudum",
      "Ödüllü reklam",
      "Premium ve satın alma geri yükleme",
      "Günlük öneri bildirimleri",
        ],
  },
  "yemekolay": {
    intro: "Yemekolay için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Malzemeye göre tarif",
      "Bugün ne pişirsem / ne sipariş etsem",
      "Tarif sonuçları",
      "Ödüllü kullanım hakkı",
      "Premium ve satın alma geri yükleme",
      "Bildirimler",
        ],
  },
  "carsave-ai": {
    intro: "CarSave AI için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Araç ekleme ve düzenleme",
      "Yakıt/şarj kayıtları",
      "Bakım, servis ve masraflar",
      "Konum ve harita",
      "Hatırlatmalar",
      "Hesap ve giriş",
      "Premium / reklamlar",
        ],
  },
  "hilock": {
    intro: "HiLock için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Family Controls ve Screen Time izni",
      "Uygulama koruma",
      "PIN ve Face ID",
      "Managed Settings",
      "macOS izinleri",
      "Reklamlar",
        ],
  },
  "oduyorum": {
    intro: "Ödüyorum için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Gelir/gider kayıtları",
      "Fatura ve abonelikler",
      "Hatırlatmalar",
      "Veri silme",
      "Reklamlar",
        ],
  },
  "susadim": {
    intro: "Susadım için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Su tüketimi ve hedef",
      "Hatırlatmalar",
      "Apple Health izinleri",
      "Premium",
      "Satın alma geri yükleme",
      "Reklamlar",
        ],
  },
  "ezan-vakti": {
    intro: "Ezan Vakti: Namaz ve Kıble için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Namaz vakitleri",
      "Konum/şehir",
      "Kıble",
      "Bildirimler",
      "Yakındaki camiler",
      "Hicri takvim",
      "Ramazan/imsakiye",
      "Ayet ve hadis",
        ],
  },
  "melody-map": {
    intro: "Melody Map için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Müzik içeriklerinin yüklenmesi",
      "Harici müzik hizmeti bağlantıları",
      "Favoriler ve tercihler",
      "Yetkilendirme",
      "Ağ bağlantısı",
        ],
  },
  "history": {
    intro: "HiStory için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Günlük bilgiler",
      "İlgi alanları",
      "Ülke/dil seçimi",
      "Ödüllü reklam",
      "Premium",
      "Bildirimler",
        ],
  },
  "velomate": {
    intro: "VeloMate için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Temel uygulama özellikleri",
      "Cihaz izinleri",
      "Bildirimler",
      "Ağ bağlantısı",
      "Reklam/gizlilik seçenekleri",
        ],
  },
  "tartarot": {
    intro: "TarTarot için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Günlük tarot",
      "Üç kart açılımı",
      "Evet/Hayır",
      "Kart yorumları",
      "Premium",
      "Bildirimler",
        ],
  },
  "vibelens": {
    intro: "VibeLens için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Analiz özellikleri",
      "Kullanıcı girdileri",
      "Yerel geçmiş/tercihler",
      "Premium",
      "Harici hizmet bağlantısı",
        ],
  },
  "refrefref": {
    intro: "Ref!Ref!Ref! için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Oyun kontrolleri",
      "Skor ve ilerleme",
      "Tema/şehir kilitleri",
      "Reklamlar",
      "Reklam kaldırma satın alması",
      "Ses ve haptik",
        ],
  },
  "bold-block-arcade": {
    intro: "Bold Block Arcade için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Oyun kontrolleri",
      "Skor/ilerleme",
      "Performans",
      "Reklamlar",
      "Uygulama içi satın almalar",
        ],
  },
  "usenme-yap": {
    intro: "Üşenme Yap için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Görevlar ve alışkanlıklar",
      "Bildirimler",
      "Google/Firebase giriş",
      "Premium",
      "Satın alma geri yükleme",
      "Reklamlar",
        ],
  },
  "kedilik": {
    intro: "Kedilik için teknik destek, kullanım soruları ve geri bildirimler bu sayfa üzerinden yönetilir.",
    topics: [
      "Uygulama içerikleri",
      "Favoriler ve tercihler",
      "Cihaz izinleri",
      "Bildirimler",
      "Reklamlar",
        ],
  },
};

export default async function SupportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const config = supportBySlug[app.slug] ?? {
    intro: `${app.name} için teknik destek ve geri bildirim.`,
    topics: ["Teknik sorunlar", "Uygulama özellikleri", "Geri bildirim"],
  };

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BrandLogo />
          <Link className={styles.back} href={`/apps/${app.slug}`}>← {app.name}</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}>Destek</span>
          <h1>{app.name} Destek</h1>
          <p>{config.intro}</p>
          <p>
            Bir sorun yaşıyorsanız aşağıdaki adımları uygulayın. Sorun devam ederse
            sayfanın altındaki e-posta bağlantısıyla ayrıntıları gönderin.
          </p>

          <h3>Destek Verilen Konular</h3>
          <ul>
            {config.topics.map((topic) => <li key={topic}>{topic}</li>)}
            <li>Uygulamanın açılmaması, donması veya beklenmeyen şekilde kapanması</li>
            <li>Uygulama sürümüyle ilgili diğer teknik sorunlar</li>
          </ul>

          <h3>Önce Bunları Kontrol Edin</h3>
          <ul>
            <li>App Store üzerinden uygulamanın en güncel sürümünün kurulu olduğundan emin olun.</li>
            <li>İnternet gerektiren özelliklerde Wi-Fi veya mobil veri bağlantısını kontrol edin.</li>
            <li>Uygulamayı tamamen kapatıp yeniden açın.</li>
            <li>Gerekirse cihazı yeniden başlatın.</li>
            <li>Özellik bir sistem izni gerektiriyorsa iPhone/iPad Ayarlar bölümünden uygulama izinlarını kontrol edin.</li>
          </ul>

          <h3>Bildirimler Çalışmıyorsa</h3>
          <p>
            Ayarlar → Bildirimler → {app.name} bölümünden bildirim iznini kontrol edin.
            Odak modu, Sessiz Mod veya sistem bildirim ayarlarının teslimatı etkileyebileceğini
            unutmayın. Uygulama içindeki bildirim anahtarları varsa onların da etkin olduğundan
            emin olun.
          </p>

          <h3>Premium veya Satın Alma Sorunları</h3>
          <p>
            Uygulama Premium abonelik veya uygulama içi satın alma sunuyorsa işlemler Apple
            App Store üzerinden gerçekleştirilir. Satın alma tamamlandığı hâlde özellik
            açılmadıysa uygulamadaki “Satın Almaları Geri Yükle” seçeneğini kullanın.
            Aboneliklerinizi iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden
            yönetebilirsiniz.
          </p>
          <p>
            Destek ekibine Apple Hesabı parolanızı, doğrulama kodunuzu veya ödeme kartı
            bilgilerinizi hiçbir zaman göndermeyin.
          </p>

          <h3>Reklamlar veya Ödüllü Reklamlar</h3>
          <p>
            Reklam destekli özelliklerde reklam bulunabilirliği ülkeye, bağlantıya, reklam
            sağlayıcısına ve mevcut reklam envanterine göre değişebilir. Ödüllü reklam
            tamamlandığı hâlde hak tanımlanmadıysa uygulamayı yeniden açın ve sorun devam
            ederse yaklaşık zamanı ve yaptığınız işlemi destek mesajına ekleyin.
          </p>

          <h3>İzin Sorunları</h3>
          <p>
            Konum, bildirim, Health, Screen Time, kamera, fotoğraf veya diğer sistem izinleri
            yalnızca ilgili özelliği kullanan uygulamalarda gereklidir. İzinler Apple'ın
            Ayarlar/Sistem Ayarları ekranından değiştirilebilir. Bir izin kapalıysa yalnızca
            o izne bağlı özellik çalışmayabilir.
          </p>

          <h3>Veri ve Gizlilik Talepleri</h3>
          <p>
            Gizlilik, veri silme veya uygulamanın veri kullanımına ilişkin bir talebiniz
            varsa e-posta konu satırına “{app.name} - Gizlilik Talebi” yazın. Talebin
            anlaşılması için gerekli olmayan hassas bilgileri mesajınıza eklemeyin.
          </p>

          <h3>Destek Mesajına Neleri Eklemelisiniz?</h3>
          <ul>
            <li>iPhone/iPad/Mac modeli</li>
            <li>iOS, iPadOS veya macOS sürümü</li>
            <li>{app.name} uygulama sürümü ve mümkünse build numarası</li>
            <li>Sorunun hangi ekranda oluştuğu</li>
            <li>Sorunu tekrar oluşturmak için izlenen adımlar</li>
            <li>Ekranda görünen hata mesajının tam metni</li>
            <li>Mümkünse kişisel bilgi içermeyen ekran görüntüsü</li>
          </ul>

          <h3>İletişim</h3>
          <p>
            Destek talepleri için{" "}
            <a href={`mailto:hello@saybir.net?subject=${encodeURIComponent(app.name + " Destek")}`}>
              hello@saybir.net
            </a>{" "}
            adresini kullanabilirsiniz.
          </p>

          <div className={styles.actions}>
            <Link href={`/apps/${app.slug}/privacy`}>Gizlilik Politikası</Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
              Apple Standart EULA
            </a>
            <Link href={`/apps/${app.slug}`}>Resmî Uygulama Sayfası</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
