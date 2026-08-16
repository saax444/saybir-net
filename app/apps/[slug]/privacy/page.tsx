import Link from "next/link";
import { notFound } from "next/navigation";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
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

const commonContact: Section = {
  title: "İletişim",
  paragraphs: [
    "Gizlilik politikasıyla ilgili sorularınızı hello@saybir.net adresine iletebilirsiniz.",
  ],
};

const policies: Record<string, Section[]> = {
  "ne-secsem": [
    {
      title: "Genel",
      paragraphs: [
        "Ne Seçsem?, film, dizi ve kitap önerileri sunarak kullanıcıların ne izleyeceğine veya ne okuyacağına karar vermesine yardımcı olan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Tercihler ve Öneri Bilgileri",
      paragraphs: [
        "İçerik türü, ruh hâli, süre, ülke ve benzeri filtre tercihleri öneri özelliklerini sağlamak amacıyla işlenebilir veya cihaz üzerinde saklanabilir.",
        "Bu tercihler reklam hedefleme amacıyla kullanılmaz.",
      ],
    },
    {
      title: "Favoriler ve İzledim / Okudum Kayıtları",
      paragraphs: [
        "Favoriler ile izledim veya okudum olarak işaretlenen içerikler, uygulamanın takip özelliklerini sağlamak amacıyla cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Premium ve Apple Hizmetleri",
      paragraphs: [
        "Premium abonelik satın alma, yenileme ve ödeme işlemleri Apple App Store üzerinden yürütülür. Geliştirici kredi kartı veya banka kartı bilgilerinize erişmez.",
      ],
    },
    {
      title: "Reklamlar ve Google AdMob",
      paragraphs: [
        "Ücretsiz sürüm reklam veya ödüllü reklam göstermek amacıyla Google AdMob kullanabilir. Google ve reklam iş ortakları cihaz bilgileri, reklam etkileşimleri ve benzeri teknik bilgileri kendi politikaları doğrultusunda işleyebilir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde günlük öneriler ve ilgili hatırlatmalar için bildirimler gönderilebilir. Bildirim izinleri iOS Ayarlar bölümünden değiştirilebilir.",
      ],
    },
    commonContact,
  ],

  yemekolay: [
    {
      title: "Genel",
      paragraphs: [
        "Yemekolay, malzemelere göre yemek önerileri sunan ve kullanıcıların ne pişireceğine veya ne sipariş edeceğine karar vermesine yardımcı olan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Malzemeler ve Tercihler",
      paragraphs: [
        "Kullanıcının girdiği malzemeler ve yemek tercihleri öneri özelliklerini sağlamak amacıyla işlenebilir. Bu bilgiler reklam hedefleme amacıyla kullanılmaz.",
      ],
    },
    {
      title: "Öneri Özellikleri",
      paragraphs: [
        "Desteklenen öneri özelliklerinde üçüncü taraf veya yapay zekâ tabanlı hizmetlerden yararlanılabilir. Kullanıcıların bu alanlara kişisel, finansal veya hassas bilgi girmemesi önerilir.",
      ],
    },
    {
      title: "Premium ve Apple Hizmetleri",
      paragraphs: [
        "Premium abonelik işlemleri Apple App Store üzerinden gerçekleştirilir. Geliştirici ödeme kartı bilgilerinize erişmez.",
      ],
    },
    {
      title: "Reklamlar ve Google AdMob",
      paragraphs: [
        "Ücretsiz kullanım ve ödüllü reklam özellikleri için Google AdMob kullanılabilir. Reklam sağlayıcıları kendi politikaları kapsamında teknik ve reklam etkileşim verilerini işleyebilir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde öneriler veya uygulama hatırlatmaları için bildirim gönderilebilir.",
      ],
    },
    commonContact,
  ],

  carsave: [
    {
      title: "Genel",
      paragraphs: [
        "CarSave AI; araç, kilometre, yakıt, bakım, servis, sigorta, muayene ve araçla ilgili diğer kayıtların yönetilmesine yardımcı olur.",
      ],
    },
    {
      title: "Hesap ve Kimlik Doğrulama",
      paragraphs: [
        "Desteklenen sürümlerde Apple ile Giriş, Google ile Giriş ve Firebase Authentication kullanılabilir. Kimlik doğrulama için gerekli temel hesap bilgileri ilgili hizmet sağlayıcılar tarafından işlenebilir.",
      ],
    },
    {
      title: "Araç ve Harcama Kayıtları",
      paragraphs: [
        "Kullanıcının eklediği araç, kilometre, yakıt, bakım, servis ve maliyet bilgileri uygulamanın takip özellikleri için kullanılır. Bu kayıtlar reklam hedefleme amacıyla kullanılmaz.",
      ],
    },
    {
      title: "Konum ve Hareket Bilgileri",
      paragraphs: [
        "Kullanıcı izin verdiğinde konum ve desteklenen hareket verileri; harita, yakındaki hizmet noktaları veya yolculuk özellikleri için kullanılabilir. İzinler iOS Ayarlar bölümünden yönetilebilir.",
      ],
    },
    {
      title: "Reklamlar ve App Tracking Transparency",
      paragraphs: [
        "CarSave AI Google AdMob kullanabilir. iOS tarafından gerekli görüldüğünde reklam veya ölçüm amaçlı tanımlayıcılar için App Tracking Transparency izni istenebilir.",
      ],
    },
    {
      title: "Verilerin Silinmesi",
      paragraphs: [
        "Desteklenen veri yönetimi seçenekleri kullanılarak yerel araç ve ilgili kayıtlar silinebilir. Hesap veya veri silme desteği için hello@saybir.net adresine başvurabilirsiniz.",
      ],
    },
    commonContact,
  ],

  hilock: [
    {
      title: "Genel",
      paragraphs: [
        "HiLock, seçilen uygulamalara erişimi yönetmeye ve cihaz kullanımını daha kontrollü hâle getirmeye yardımcı olan bir güvenlik uygulamasıdır.",
      ],
    },
    {
      title: "PIN ve Güvenlik Bilgileri",
      paragraphs: [
        "PIN kodunun açık hâli saklanmaz. Doğrulama için gerekli tek yönlü özet gibi güvenlik bilgileri Apple Keychain içinde saklanabilir.",
      ],
    },
    {
      title: "Family Controls ve Managed Settings",
      paragraphs: [
        "iOS ve iPadOS sürümleri, kullanıcı izniyle Apple Family Controls, Managed Settings ve ilgili Screen Time teknolojilerini kullanabilir. HiLock korunan üçüncü taraf uygulamaların hesap içeriğine erişmez.",
      ],
    },
    {
      title: "macOS",
      paragraphs: [
        "Native macOS sürümünde koruma işlevleri macOS tarafından sağlanan uygulama çalışma bildirimleri ve yerel güvenlik mekanizmalarıyla yürütülebilir.",
      ],
    },
    {
      title: "Reklamlar",
      paragraphs: [
        "Reklam destekli sürüm Google AdMob kullanabilir. Screen Time veya uygulama koruma bilgileri reklam hedefleme amacıyla kullanılmaz.",
      ],
    },
    {
      title: "Verilerin Silinmesi",
      paragraphs: [
        "Desteklenen güvenlik günlüğü ve yerel veriler uygulama içinden temizlenebilir. Keychain verilerinin yaşam döngüsü Apple platform davranışlarına tabidir.",
      ],
    },
    commonContact,
  ],

  oduyorum: [
    {
      title: "Genel",
      paragraphs: [
        "Ödüyorum; gelir, gider, fatura, abonelik ve diğer finansal kayıtların takip edilmesine yardımcı olur.",
      ],
    },
    {
      title: "Finansal Kayıtlar",
      paragraphs: [
        "Kullanıcının girdiği finansal kayıtlar temel olarak cihaz üzerinde tutulur ve uygulamanın özelliklerini sağlamak için kullanılır. Bu kayıtlar reklam hedefleme amacıyla kullanılmaz veya bu amaçla reklam sağlayıcılarıyla paylaşılmaz.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde fatura, abonelik ve ödeme hatırlatmaları cihaz üzerinde planlanabilir.",
      ],
    },
    {
      title: "Reklamlar",
      paragraphs: [
        "Ücretsiz sürüm Google AdMob kullanabilir. Reklam sağlayıcıları kendi sistemleri üzerinden teknik ve reklam etkileşim verilerini işleyebilir.",
      ],
    },
    {
      title: "Verilerin Silinmesi",
      paragraphs: [
        "Desteklenen veri yönetimi seçenekleriyle yerel finansal kayıtlar silinebilir.",
      ],
    },
    commonContact,
  ],

  susadim: [
    {
      title: "Genel",
      paragraphs: [
        "Susadım, günlük su tüketimi ve su içme hedeflerinin takip edilmesine yardımcı olur.",
      ],
    },
    {
      title: "Su Tüketimi Kayıtları",
      paragraphs: [
        "Su tüketimi, günlük hedef ve ilgili kullanım kayıtları temel olarak cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Apple Health",
      paragraphs: [
        "Desteklenen özelliklerde Apple Health entegrasyonu yalnızca kullanıcının açık izniyle kullanılır. Health verileri reklam hedefleme amacıyla kullanılmaz veya reklam sağlayıcılarıyla paylaşılmaz.",
      ],
    },
    {
      title: "Premium ve Reklamlar",
      paragraphs: [
        "Premium satın alma işlemleri Apple App Store üzerinden yürütülür. Ücretsiz sürüm Google AdMob kullanabilir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde su içme hatırlatmaları gönderilebilir.",
      ],
    },
    commonContact,
  ],

  "ezan-vakti": [
    {
      title: "Genel",
      paragraphs: [
        "Ezan Vakti: Namaz ve Kıble, namaz vakitleri, kıble yönü ve ilgili İslami özellikleri sunan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Konum Bilgisi",
      paragraphs: [
        "Kullanıcı izin verdiğinde konum; namaz vakitlerini hesaplamak, kıble yönünü belirlemek ve desteklenen yakındaki cami özelliklerini sağlamak amacıyla kullanılabilir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde namaz vakitleri ve ilgili hatırlatmalar için bildirim gönderilebilir.",
      ],
    },
    {
      title: "Reklamlar",
      paragraphs: [
        "Uygulama Google AdMob kullanabilir. Reklam sağlayıcıları teknik ve reklam etkileşim verilerini kendi politikalarına göre işleyebilir.",
      ],
    },
    {
      title: "Hesap",
      paragraphs: [
        "Uygulamanın temel özelliklerini kullanmak için hesap oluşturulması zorunlu değildir.",
      ],
    },
    commonContact,
  ],

  "melody-map": [
    {
      title: "Genel",
      paragraphs: [
        "Melody Map, müzik keşfi ve desteklenen müzik hizmetleriyle bağlantılı özellikler sunan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Müzik Hizmetleri ve Spotify",
      paragraphs: [
        "Desteklenen özelliklerde Spotify gibi üçüncü taraf müzik hizmetleri kullanılabilir. Bu hizmetlere erişim, ilgili sağlayıcının yetkilendirme ve gizlilik kurallarına tabidir.",
        "Melody Map, üçüncü taraf müzik hesabınızın parolasını doğrudan saklamaz.",
      ],
    },
    {
      title: "Uygulama Tercihleri",
      paragraphs: [
        "Favoriler, keşif tercihleri ve uygulama ayarları desteklenen özellikleri sağlamak amacıyla cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Spotify, Apple ve uygulamanın kullandığı diğer hizmetlerin kendi gizlilik politikaları geçerlidir.",
      ],
    },
    commonContact,
  ],

  history: [
    {
      title: "Genel",
      paragraphs: [
        "HiStory, günlük tarih, kültür ve eğlenceli bilgi içerikleri sunan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "İlgi Alanları ve Ülke Tercihi",
      paragraphs: [
        "İlgi alanları, ülke tercihi, dil ve benzeri seçimler önerileri kişiselleştirmek amacıyla cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Premium ve Reklamlar",
      paragraphs: [
        "Premium satın alma işlemleri Apple App Store üzerinden yürütülebilir. Ücretsiz kullanıcılar için Google AdMob ve ödüllü reklam özellikleri kullanılabilir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde günlük bilgi veya içerik hatırlatmaları gönderilebilir.",
      ],
    },
    commonContact,
  ],

  velomate: [
    {
      title: "Genel",
      paragraphs: [
        "VeloMate, uygulamanın sunduğu özellikleri kullanabilmek için gerekli kullanıcı tercihlerini ve cihaz izinlerini yalnızca ilgili özellikleri sağlamak amacıyla işler.",
      ],
    },
    {
      title: "Cihaz İzinleri ve Yerel Veriler",
      paragraphs: [
        "Desteklenen özelliklerin gerektirdiği izinler iOS tarafından kullanıcıya açıkça sorulur ve Ayarlar bölümünden yönetilebilir. Uygulama tercihleri cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Reklamlar ve Takip İzni",
      paragraphs: [
        "VeloMate reklam veya ölçüm SDK'ları kullanabilir. iOS tarafından gerekli görüldüğünde App Tracking Transparency izni istenir. Kullanıcının izin vermesi zorunlu değildir.",
      ],
    },
    {
      title: "Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Uygulamada kullanılan üçüncü taraf hizmetlerin kendi gizlilik ve veri işleme politikaları geçerlidir.",
      ],
    },
    commonContact,
  ],

  tartarot: [
    {
      title: "Genel",
      paragraphs: [
        "TarTarot; günlük tarot, kart açılımları ve benzeri eğlence amaçlı tarot özellikleri sunar.",
      ],
    },
    {
      title: "Tarot Tercihleri ve Kayıtlar",
      paragraphs: [
        "Seçilen kartlar, favoriler, günlük veya uygulama tercihleri desteklenen özellikleri sağlamak amacıyla cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Yapay Zekâ Destekli Yorumlar",
      paragraphs: [
        "Desteklenen özelliklerde kart yorumlarını geliştirmek için üçüncü taraf veya yapay zekâ tabanlı hizmetler kullanılabilir. Kullanıcıların kişisel veya hassas bilgi paylaşmaması önerilir.",
      ],
    },
    {
      title: "Premium",
      paragraphs: [
        "Premium abonelik ve ödeme işlemleri Apple App Store üzerinden yürütülür.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde günlük tarot veya uygulama hatırlatmaları gönderilebilir.",
      ],
    },
    commonContact,
  ],

  vibelens: [
    {
      title: "Genel",
      paragraphs: [
        "VibeLens, uygulama içindeki analiz, içerik veya kişiselleştirme özelliklerini sağlamak için yalnızca gerekli kullanıcı girdilerini ve tercihleri işler.",
      ],
    },
    {
      title: "Kullanıcı Girdileri ve Tercihler",
      paragraphs: [
        "Uygulamaya girilen içerikler ve tercihler ilgili özelliği sağlamak amacıyla işlenebilir. Kullanıcıların hassas kişisel bilgileri gereksiz yere paylaşmaması önerilir.",
      ],
    },
    {
      title: "Premium",
      paragraphs: [
        "Premium abonelik işlemleri Apple App Store üzerinden yürütülür. Geliştirici ödeme kartı bilgilerinize erişmez.",
      ],
    },
    {
      title: "Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Desteklenen özelliklerde kullanılan üçüncü taraf hizmetlerin kendi gizlilik politikaları geçerlidir.",
      ],
    },
    commonContact,
  ],

  refrefref: [
    {
      title: "Genel",
      paragraphs: [
        "Ref!Ref!Ref!, refleks ve hız odaklı bir mobil oyundur.",
      ],
    },
    {
      title: "Oyun Verileri",
      paragraphs: [
        "Skorlar, oyun ayarları, açılan temalar ve benzeri ilerleme bilgileri cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Reklamlar",
      paragraphs: [
        "Ücretsiz sürüm Google AdMob kullanabilir. Reklam sağlayıcıları teknik ve reklam etkileşim verilerini kendi politikalarına göre işleyebilir.",
      ],
    },
    {
      title: "Satın Almalar",
      paragraphs: [
        "Reklam kaldırma veya diğer desteklenen uygulama içi satın almalar Apple App Store üzerinden yürütülür.",
      ],
    },
    commonContact,
  ],

  "bold-block-arcade": [
    {
      title: "Genel",
      paragraphs: [
        "Bold Block Arcade, mobil oyun deneyimi sunan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Oyun Verileri",
      paragraphs: [
        "Skor, ilerleme, oyun tercihleri ve desteklenen diğer yerel veriler cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Reklamlar ve Satın Almalar",
      paragraphs: [
        "Uygulama reklam hizmetleri kullanabilir ve desteklenen uygulama içi satın almaları Apple App Store üzerinden sunabilir.",
      ],
    },
    commonContact,
  ],

  "usenme-yap": [
    {
      title: "Genel",
      paragraphs: [
        "Üşenme Yap, görev, alışkanlık, motivasyon ve üretkenlik özellikleri sunan bir iOS uygulamasıdır.",
      ],
    },
    {
      title: "Hesap ve Kimlik Doğrulama",
      paragraphs: [
        "Desteklenen sürümlerde Firebase ve Google ile Giriş gibi kimlik doğrulama hizmetleri kullanılabilir. İlgili hizmetlerin kendi gizlilik politikaları geçerlidir.",
      ],
    },
    {
      title: "Görev ve Tercih Verileri",
      paragraphs: [
        "Kullanıcının oluşturduğu görevlar, tercihler ve uygulama ayarları özellikleri sağlamak amacıyla cihaz üzerinde veya desteklenen hesap hizmetlerinde saklanabilir.",
      ],
    },
    {
      title: "Reklamlar ve Premium",
      paragraphs: [
        "Ücretsiz sürüm reklam hizmetleri kullanabilir. Premium abonelik işlemleri Apple App Store üzerinden yürütülür.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde görev ve motivasyon hatırlatmaları gönderilebilir.",
      ],
    },
    commonContact,
  ],

  kedilik: [
    {
      title: "Genel",
      paragraphs: [
        "Kedilik, uygulamanın sunduğu kedi odaklı içerik ve özellikleri sağlamak için gerekli tercihleri ve yerel uygulama verilerini işler.",
      ],
    },
    {
      title: "Uygulama Verileri",
      paragraphs: [
        "Favoriler, tercihler ve desteklenen diğer kayıtlar ilgili özelliklerin çalışması amacıyla cihaz üzerinde saklanabilir.",
      ],
    },
    {
      title: "Reklamlar ve Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Desteklenen sürümlerde reklam veya üçüncü taraf hizmetler kullanılabilir. Bu hizmetlerin kendi gizlilik politikaları geçerlidir.",
      ],
    },
    {
      title: "Bildirimler",
      paragraphs: [
        "Kullanıcı izin verdiğinde uygulamanın ilgili özellikleri için bildirim gönderilebilir.",
      ],
    },
    commonContact,
  ],

  generic: [
    {
      title: "Verilerin Kullanımı",
      paragraphs: [
        "Uygulama, yalnızca özelliklerin çalışması için gerekli bilgileri işler. Cihaz izinleri gerektiğinde iOS tarafından açıkça istenir ve kullanıcı tarafından yönetilebilir.",
      ],
    },
    {
      title: "Apple Hizmetleri",
      paragraphs: [
        "App Store dağıtımı, uygulama içi satın alma ve abonelik işlemleri ilgili olduğunda Apple'ın sistemleri üzerinden yürütülür.",
      ],
    },
    commonContact,
  ],
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug);

  if (!app) {
    notFound();
  }

  const sections = policies[appKey(app.name)] ?? policies.generic;

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

          {sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>

              {section.paragraphs?.map((paragraph) =>
                paragraph.includes("hello@saybir.net") ? (
                  <p key={paragraph}>
                    {paragraph.replace("hello@saybir.net", "")}
                    <a href="mailto:hello@saybir.net">hello@saybir.net</a>
                  </p>
                ) : (
                  <p key={paragraph}>{paragraph}</p>
                )
              )}

              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </section>
      </main>
    </div>
  );
}
