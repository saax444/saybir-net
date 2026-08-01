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
  githubUrl?: string;
};

export const apps: AppInfo[] = [
  { slug: "carsave-ai", name: "CarSave AI", image: "/apps/carsave-ai.png", accent: "18 129 111", category: "Araçlar", description: "Araç bilgilerini, bakım kayıtlarını ve ilgili belgeleri tek merkezde düzenleyin.", status: "İncelemede", version: "1.0", githubUrl: "https://github.com/saax444/CarSave" },
  { slug: "vibelens", name: "VibeLens", image: "/apps/vibelens.png", accent: "116 91 255", category: "Yaşam", description: "Sohbet ekran görüntülerindeki iletişim sinyallerini gizlilik odaklı analiz edin.", status: "İncelemede", version: "1.0", githubUrl: "https://github.com/saax444/VibeLens-Web" },
  { slug: "hilock", name: "HiLock", image: "/apps/hilock.png", accent: "60 118 255", category: "Araçlar", description: "Uygulamalarınızı PIN ve biyometrik doğrulamayla koruyun, odağınızı güçlendirin.", status: "App Store’da", version: "1.0.1", appStoreUrl: "https://apps.apple.com/tr/app/hilock/id6792282040", githubUrl: "https://github.com/saax444/HiLock" },
  { slug: "yemekolay", name: "Yemekolay", image: "/apps/yemekolay.png", accent: "255 117 55", category: "Yiyecek ve İçecek", description: "Günlük yemek kararlarını kolaylaştıran pratik iOS uygulaması.", status: "App Store’da", version: "1.0", appStoreUrl: "https://apps.apple.com/tr/app/yemekolay/id6795879787", githubUrl: "https://github.com/saax444/Yemekolay" },
  { slug: "oduyorum", name: "Ödüyorum", image: "/apps/oduyorum.png", accent: "37 161 255", category: "Finans", description: "Gelir, gider, fatura ve hedeflerinizi tek bir sade finans merkezinde yönetin.", status: "App Store’da", version: "1.0.2", appStoreUrl: "https://apps.apple.com/tr/app/%C3%B6d%C3%BCyorum/id6793859068", githubUrl: "https://github.com/saax444/Oduyorum" },
  { slug: "ref-ref-ref", name: "Ref!Ref!Ref!", image: "/apps/refrefref.png", accent: "255 52 190", category: "Oyun", description: "Reflekslerinizi neon şehirlerde hızlı ve akıcı oyun deneyimiyle sınayın.", status: "App Store’da", version: "1.0.5", appStoreUrl: "https://apps.apple.com/tr/app/ref-ref-ref/id6788466051", githubUrl: "https://github.com/saax444/refrefref" },
  { slug: "kedilik", name: "Kedilik", image: "/apps/kedilik.png", accent: "255 123 90", category: "Yaşam", description: "Kedinizin sağlık, bakım ve önemli kayıtlarını düzenli biçimde takip edin.", status: "App Store’da", version: "1.0.1", appStoreUrl: "https://apps.apple.com/tr/app/kedilik/id6792054901", githubUrl: "https://github.com/saax444/kedilik-privacy" },
  { slug: "ezan-vakti", name: "Ezan Vakti", image: "/apps/ezan-vakti.png", accent: "229 184 71", category: "Araçlar", description: "Namaz vakitleri, kıble, dualar ve günlük ibadet araçlarına kolayca ulaşın.", status: "App Store’da", version: "1.06", appStoreUrl: "https://apps.apple.com/tr/app/ezan-vakti-namaz-ve-k%C4%B1ble/id6790400156", githubUrl: "https://github.com/saax444/EzanVakti" },
  { slug: "usenme-yap", name: "Üşenme Yap", image: "/apps/usenme-yap.png", accent: "139 83 255", category: "Verimlilik", description: "Ertelemeyi bırakın, küçük adımlarla görevlerinizi harekete dönüştürün.", status: "App Store’da", version: "1.0.1", appStoreUrl: "https://apps.apple.com/tr/app/%C3%BC%C5%9Fenme-yap/id6792234967", githubUrl: "https://github.com/saax444/usenme-yap-privacy" },
  { slug: "tartarot", name: "TarTarot", image: "/apps/tartarot.png", accent: "218 180 79", category: "Yaşam", description: "Modern bir tarot deneyimiyle kartları keşfedin ve yorumlarınıza odaklanın.", status: "İncelemede", version: "1.0", githubUrl: "https://github.com/saax444/tartarot" },
  { slug: "susadim", name: "Susadım", image: "/apps/susadim.png", accent: "38 219 255", category: "Sağlık ve Fitness", description: "Günlük su hedefinizi takip edin ve düzenli içme alışkanlığı oluşturun.", status: "App Store’da", version: "1.0", appStoreUrl: "https://apps.apple.com/tr/app/susad%C4%B1m/id6792691032", githubUrl: "https://github.com/saax444/susadim" }
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
