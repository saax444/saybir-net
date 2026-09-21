import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
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
  "melodymap": {
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
  "ref-ref-ref": {
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
      "Görevler ve alışkanlıklar",
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: `${app.name} Destek — SAYBIR`, description: `${app.name} teknik destek, yardım ve iletişim sayfası.` } : {};
}

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
          <BrandLogo /><PreferenceControls/>
          <Link className={styles.back} href={`/apps/${app.slug}`}>← <Text>{app.name}</Text></Link>
        </div>
      </nav>

      <PageTitle name={app.name} title="Destek"/><main className={styles.main}>
        <section className={styles.content}>
          <span className={styles.kicker}><Text>{"Destek"}</Text></span>
          <h1><Text>{app.name}</Text><Text>{" Destek"}</Text></h1>
          <p><Text>{config.intro}</Text></p>
          <p><Text>{"Bir sorun yaşıyorsanız aşağıdaki adımları uygulayın. Sorun devam ederse sayfanın altındaki e-posta bağlantısıyla ayrıntıları gönderin."}</Text></p>

          <h3><Text>{"Destek Verilen Konular"}</Text></h3>
          <ul>
            {config.topics.map((topic) => <li key={topic}><Text>{topic}</Text></li>)}
            <li><Text>{"Uygulamanın açılmaması, donması veya beklenmeyen şekilde kapanması"}</Text></li>
            <li><Text>{"Uygulama sürümüyle ilgili diğer teknik sorunlar"}</Text></li>
          </ul>

          <h3><Text>{"Önce Bunları Kontrol Edin"}</Text></h3>
          <ul>
            <li><Text>{"App Store üzerinden uygulamanın en güncel sürümünün kurulu olduğundan emin olun."}</Text></li>
            <li><Text>{"İnternet gerektiren özelliklerde Wi-Fi veya mobil veri bağlantısını kontrol edin."}</Text></li>
            <li><Text>{"Uygulamayı tamamen kapatıp yeniden açın."}</Text></li>
            <li><Text>{"Gerekirse cihazı yeniden başlatın."}</Text></li>
            <li><Text>{"Özellik bir sistem izni gerektiriyorsa iPhone/iPad Ayarlar bölümünden uygulama izinlerini kontrol edin."}</Text></li>
          </ul>

          <h3><Text>{"Bildirimler Çalışmıyorsa"}</Text></h3>
          <p><Text>{"Ayarlar → Bildirimler → "}</Text><Text>{app.name}</Text><Text>{" bölümünden bildirim iznini kontrol edin. Odak modu, Sessiz Mod veya sistem bildirim ayarlarının teslimatı etkileyebileceğini unutmayın. Uygulama içindeki bildirim anahtarları varsa onların da etkin olduğundan emin olun."}</Text></p>

          <h3><Text>{"Premium veya Satın Alma Sorunları"}</Text></h3>
          <p><Text>{"Uygulama Premium abonelik veya uygulama içi satın alma sunuyorsa işlemler Apple App Store üzerinden gerçekleştirilir. Satın alma tamamlandığı hâlde özellik açılmadıysa uygulamadaki “Satın Almaları Geri Yükle” seçeneğini kullanın. Aboneliklerinizi iPhone/iPad Ayarlar → Apple Hesabı → Abonelikler bölümünden yönetebilirsiniz."}</Text></p>
          <p><Text>{"Destek ekibine Apple Hesabı parolanızı, doğrulama kodunuzu veya ödeme kartı bilgilerinizi hiçbir zaman göndermeyin."}</Text></p>

          <h3><Text>{"Reklamlar veya Ödüllü Reklamlar"}</Text></h3>
          <p><Text>{"Reklam destekli özelliklerde reklam bulunabilirliği ülkeye, bağlantıya, reklam sağlayıcısına ve mevcut reklam envanterine göre değişebilir. Ödüllü reklam tamamlandığı hâlde hak tanımlanmadıysa uygulamayı yeniden açın ve sorun devam ederse yaklaşık zamanı ve yaptığınız işlemi destek mesajına ekleyin."}</Text></p>

          <h3><Text>{"İzin Sorunları"}</Text></h3>
          <p><Text>{"Konum, bildirim, Health, Screen Time, kamera, fotoğraf veya diğer sistem izinleri yalnızca ilgili özelliği kullanan uygulamalarda gereklidir. İzinler Apple'ın Ayarlar/Sistem Ayarları ekranından değiştirilebilir. Bir izin kapalıysa yalnızca o izne bağlı özellik çalışmayabilir."}</Text></p>

          <h3><Text>{"Veri ve Gizlilik Talepleri"}</Text></h3>
          <p><Text>{"Gizlilik, veri silme veya uygulamanın veri kullanımına ilişkin bir talebiniz varsa e-posta konu satırına “"}</Text><Text>{app.name}</Text><Text>{" - Gizlilik Talebi” yazın. Talebin anlaşılması için gerekli olmayan hassas bilgileri mesajınıza eklemeyin."}</Text></p>

          <h3><Text>{"Destek Mesajına Neleri Eklemelisiniz?"}</Text></h3>
          <ul>
            <li><Text>{"iPhone/iPad/Mac modeli"}</Text></li>
            <li><Text>{"iOS, iPadOS veya macOS sürümü"}</Text></li>
            <li><Text>{app.name}</Text><Text>{" uygulama sürümü ve mümkünse build numarası"}</Text></li>
            <li><Text>{"Sorunun hangi ekranda oluştuğu"}</Text></li>
            <li><Text>{"Sorunu tekrar oluşturmak için izlenen adımlar"}</Text></li>
            <li><Text>{"Ekranda görünen hata mesajının tam metni"}</Text></li>
            <li><Text>{"Mümkünse kişisel bilgi içermeyen ekran görüntüsü"}</Text></li>
          </ul>

          <h3><Text>{"İletişim"}</Text></h3>
          <p><Text>{"Destek talepleri için"}</Text>{" "}
            <a href={`mailto:hello@saybir.net?subject=${encodeURIComponent(app.name + " Destek")}`}><Text>{"hello@saybir.net"}</Text></a>{" "}<Text>{"adresini kullanabilirsiniz."}</Text></p>

          <div className={styles.actions}>
            <Link href={`/apps/${app.slug}/privacy`}><Text>{"Gizlilik Politikası"}</Text></Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"><Text>{"Apple Standart EULA"}</Text></a>
            <Link href={`/apps/${app.slug}`}><Text>{"Resmî Uygulama Sayfası"}</Text></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
