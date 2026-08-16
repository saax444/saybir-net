export type AppInfo = {
  slug: string;
  name: string;
  image: string;
  accent: string;
  category: string;
  description: string;
  status: "App Store’da" | "İncelemede";
  appStoreUrl?: string;
  version?: string;
};

export const apps: AppInfo[] = [
  {
    slug: "bold-block-arcade",
    name: "Bold Block Arcade",
    image: "/apps/bold-block-arcade.png",
    accent: "104 77 255",
    category: "Oyun",
    description:
      "Renkli blokları eşleştirerek bölümleri tamamlayın, skorunuzu geliştirin ve güçlendiricileri kullanın.",
    status: "İncelemede",
    version: "1.0",
  },

  {
    slug: "history",
    name: "HiStory",
    image: "/apps/history.png",
    accent: "238 105 83",
    category: "Eğitim",
    description:
      "Her gün kısa tarih bilgileri ve akılda kalan hikâyeler keşfedin; ilgi alanlarınıza göre yeni içeriklere ulaşın.",
    status: "İncelemede",
    version: "1.0.0",
  },

  {
    slug: "velomate",
    name: "VeloMate",
    image: "/apps/velomate.png",
    accent: "159 255 83",
    category: "Sağlık ve Fitness",
    description:
      "Bisiklet sürüşlerinizi kaydedin, rotalarınızı planlayın, bakım takibini yönetin ve Apple Health ile sürüş verilerinizi tek yerde takip edin.",
    status: "İncelemede",
    version: "1.0",
  },

  {
    slug: "melodymap",
    name: "Melody Map",
    image: "/apps/melodymap.png",
    accent: "85 74 255",
    category: "Müzik",
    description:
      "Müzik zevkinize göre yeni şarkılar ve kişiselleştirilmiş öneriler keşfedin.",
    status: "İncelemede",
    version: "1.0",
  },

  {
    slug: "ne-secsem",
    name: "Ne Seçsem?",
    image: "/apps/ne-secsem.png",
    accent: "255 104 82",
    category: "Eğlence",
    description:
      "Ruh halinize ve tercihlerinize göre film, dizi ve kitap önerileri keşfedin.",
    status: "İncelemede",
    version: "1.1",
  },

  {
    slug: "carsave-ai",
    name: "CarSave AI",
    image: "/apps/carsave-ai.png",
    accent: "18 129 111",
    category: "Araçlar",
    description:
      "Araç bilgilerini, bakım kayıtlarını ve ilgili belgeleri tek merkezde düzenleyin.",
    status: "İncelemede",
    version: "1.0",
  },

  {
    slug: "vibelens",
    name: "VibeLens",
    image: "/apps/vibelens.png",
    accent: "116 91 255",
    category: "Yaşam",
    description:
      "Sohbet ekran görüntülerindeki iletişim sinyallerini gizlilik odaklı analiz edin.",
    status: "App Store’da",
    version: "1.0",
    appStoreUrl:
      "https://apps.apple.com/tr/app/vibelens/id6795049298",
  },

  {
    slug: "hilock",
    name: "HiLock",
    image: "/apps/hilock.png",
    accent: "60 118 255",
    category: "Araçlar",
    description:
      "Uygulamalarınızı PIN ve biyometrik doğrulamayla koruyun, odağınızı güçlendirin.",
    status: "İncelemede",
    version: "1.0.2",
    appStoreUrl:
      "https://apps.apple.com/tr/app/hilock/id6792282040",
  },

  {
    slug: "yemekolay",
    name: "Yemekolay",
    image: "/apps/yemekolay.png",
    accent: "255 117 55",
    category: "Yiyecek ve İçecek",
    description:
      "Günlük yemek kararlarını kolaylaştıran pratik iOS uygulaması.",
    status: "App Store’da",
    version: "1.0",
    appStoreUrl:
      "https://apps.apple.com/tr/app/yemekolay/id6795879787",
  },

  {
    slug: "oduyorum",
    name: "Ödüyorum",
    image: "/apps/oduyorum.png",
    accent: "37 161 255",
    category: "Finans",
    description:
      "Gelir, gider, fatura ve hedeflerinizi tek bir sade finans merkezinde yönetin.",
    status: "App Store’da",
    version: "1.0.2",
    appStoreUrl:
      "https://apps.apple.com/tr/app/%C3%B6d%C3%BCyorum/id6793859068",
  },

  {
    slug: "ref-ref-ref",
    name: "Ref!Ref!Ref!",
    image: "/apps/refrefref.png",
    accent: "255 52 190",
    category: "Oyun",
    description:
      "Reflekslerinizi neon şehirlerde hızlı ve akıcı oyun deneyimiyle sınayın.",
    status: "App Store’da",
    version: "1.4",
    appStoreUrl:
      "https://apps.apple.com/tr/app/ref-ref-ref/id6788466051",
  },

  {
    slug: "kedilik",
    name: "Kedilik",
    image: "/apps/kedilik.png",
    accent: "255 123 90",
    category: "Yaşam",
    description:
      "Kedinizin sağlık, bakım ve önemli kayıtlarını düzenli biçimde takip edin.",
    status: "App Store’da",
    version: "1.0.1",
    appStoreUrl:
      "https://apps.apple.com/tr/app/kedilik/id6792054901",
  },

  {
    slug: "ezan-vakti",
    name: "Ezan Vakti",
    image: "/apps/ezan-vakti.png",
    accent: "229 184 71",
    category: "Araçlar",
    description:
      "Namaz vakitleri, kıble, dualar ve günlük ibadet araçlarına kolayca ulaşın.",
    status: "App Store’da",
    version: "1.06",
    appStoreUrl:
      "https://apps.apple.com/tr/app/ezan-vakti-namaz-ve-k%C4%B1ble/id6790400156",
  },

  {
    slug: "usenme-yap",
    name: "Üşenme Yap",
    image: "/apps/usenme-yap.png",
    accent: "139 83 255",
    category: "Verimlilik",
    description:
      "Ertelemeyi bırakın, küçük adımlarla görevlerinizi harekete dönüştürün.",
    status: "App Store’da",
    version: "1.0.1",
    appStoreUrl:
      "https://apps.apple.com/tr/app/%C3%BC%C5%9Fenme-yap/id6792234967",
  },

  {
    slug: "tartarot",
    name: "TarTarot",
    image: "/apps/tartarot.png",
    accent: "218 180 79",
    category: "Yaşam",
    description:
      "Modern bir tarot deneyimiyle kartları keşfedin ve yorumlarınıza odaklanın.",
    status: "İncelemede",
    version: "1.1",
  },

  {
    slug: "susadim",
    name: "Susadım",
    image: "/apps/susadim.png",
    accent: "38 219 255",
    category: "Sağlık ve Fitness",
    description:
      "Günlük su hedefinizi takip edin ve düzenli içme alışkanlığı oluşturun.",
    status: "App Store’da",
    version: "1.0",
    appStoreUrl:
      "https://apps.apple.com/tr/app/susad%C4%B1m/id6792691032",
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
