import Link from "next/link";
import { notFound } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { getApp } from "@/data/apps";
import styles from "../app-page.module.css";

type PrivacySection = { title: string; paragraphs: string[] };
type PrivacyConfig = {
  name: string;
  summary: string;
  sections: PrivacySection[];
};

const privacyBySlug: Record<string, PrivacyConfig> = {
  "hushloom": {
    name: "Hushloom",
    summary: "uyku, odaklanma ve rahatlama için ses katmanları ve zamanlanmış oturumlar sunan bir iPhone uygulamasıdır.",
    sections: [
      { title: "Cihazda Saklanan Veriler", paragraphs: ["Tercihler, favoriler, kaydedilen karışımlar ve oturum ayarları cihaz üzerinde yerel olarak saklanır. Hushloom hesap gerektirmez ve geliştiriciye ait bir kullanıcı profili veya analiz veritabanı kullanmaz."] },
      { title: "Reklamlar ve Onay Tercihi", paragraphs: ["Ücretsiz sürüm Google AdMob kullanır. Kullanıcının onayına ve cihaz ayarlarına bağlı olarak Google ve iş ortakları reklam sunmak, ölçmek ve güvenliğini sağlamak amacıyla cihaz tanımlayıcıları, reklam verileri, ürün etkileşimi ve tanılama bilgilerini kendi politikaları kapsamında işleyebilir.", "Gizlilik seçenekleri Hushloom ayarlarından yeniden açılabilir. Premium abonelere reklam gösterilmez."] },
      { title: "Premium Abonelik", paragraphs: ["Premium abonelik Apple App Store ve StoreKit üzerinden işlenir. Hushloom yalnızca premium özellikleri açmak ve satın alımları geri yüklemek için gereken yetki bilgisini kullanır; ödeme kartı bilgileri geliştiriciye iletilmez."] },
      { title: "Kullanıcı Seçimleri", paragraphs: ["Reklam onayı uygulama içinden, abonelik Apple Hesabı ayarlarından yönetilebilir. Yerel Hushloom verileri uygulama silinerek kaldırılabilir."] },
    ],
  },
  "ne-secsem": {
    name: "Ne Seçsem?",
    summary: "film, dizi ve kitap önerileri sunarak karar vermeyi kolaylaştıran bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Öneri ve Tercih Verileri",
        paragraphs: [
          "İçerik türü, ruh hâli, süre, ülke, ödül/başarı ölçütleri ve benzeri filtre seçimleri yalnızca ilgili öneriyi oluşturmak ve uygulama deneyimini kişiselleştirmek amacıyla kullanılabilir.",
          "Favoriler ile İzledim / Okudum kayıtları desteklenen sürümlerde cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Yapay Zekâ ve Harici İçerik Hizmetleri",
        paragraphs: [
          "Desteklenen öneri özellikleri üçüncü taraf içerik veya yapay zekâ hizmetlerinden yararlanabilir. Bir istek bu hizmetlere gönderiliyorsa yalnızca özelliğin çalışması için gerekli içerik aktarılmalıdır; kullanıcıların kişisel, finansal veya hassas bilgi girmemesi önerilir.",
        ],
      },
      {
        title: "Premium Abonelik",
        paragraphs: [
          "Premium erişim, abonelik durumu ve satın alma geri yükleme işlemleri Apple StoreKit/App Store altyapısı üzerinden yürütülür. Geliştirici ödeme kartı bilgilerine erişmez.",
        ],
      },
      {
        title: "Reklamlar ve Ödüllü Reklamlar",
        paragraphs: [
          "Ücretsiz sürüm Google AdMob üzerinden banner, geçiş veya ödüllü reklam gösterebilir. Reklam SDK'ları cihaz ve reklam etkileşimleri gibi teknik verileri kendi politikaları kapsamında işleyebilir.",
          "iOS tarafından gerekli olduğunda App Tracking Transparency izni istenir; izin vermemek uygulamanın temel özelliklerine erişimi engellemez.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde günlük öneri veya ilgili hatırlatma bildirimleri gönderilebilir. İzin iOS Ayarlar bölümünden her zaman değiştirilebilir.",
        ],
      },
    ],
  },
  "yemekolay": {
    name: "Yemekolay",
    summary: "malzemelere göre tarif ve yemek önerileri sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Malzemeler, Tarifler ve Tercihler",
        paragraphs: [
          "Kullanıcının yazdığı veya seçtiği malzemeler, tarif filtreleri ve yemek tercihleri uygun sonuçları göstermek amacıyla kullanılır.",
          "Favori veya geçmiş gibi desteklenen kayıtlar cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Öneri Sistemi",
        paragraphs: [
          "“Bugün ne pişirsem?” ve benzeri öneri özellikleri kullanıcının seçimine göre sonuç üretir. Kullanıcının bu alanlara gereksiz kişisel veya hassas bilgi girmemesi önerilir.",
        ],
      },
      {
        title: "Premium Abonelik",
        paragraphs: [
          "Premium erişim ve satın alma geri yükleme işlemleri Apple App Store üzerinden yürütülür. Geliştirici ödeme kartı bilgilerini almaz veya saklamaz.",
        ],
      },
      {
        title: "Reklamlar ve Ödüllü Kullanım",
        paragraphs: [
          "Ücretsiz sürüm Google AdMob kullanabilir. Ödüllü reklam tamamlandığında uygulama ek kullanım hakkı tanımlayabilir. Reklam sağlayıcılarının kendi gizlilik uygulamaları geçerlidir.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde yemek önerileri veya uygulamayla ilgili hatırlatmalar gönderilebilir.",
        ],
      },
    ],
  },
  "carsave-ai": {
    name: "CarSave AI",
    summary: "araç, yakıt, bakım, servis, masraf ve hatırlatma kayıtlarını yönetmeye yardımcı olan bir araç takip uygulamasıdır.",
    sections: [
      {
        title: "Araç ve Finansal Kayıtlar",
        paragraphs: [
          "Araç bilgileri, kilometre, yakıt/şarj, bakım, servis, sigorta, muayene, vergi ve kullanıcı tarafından girilen ilgili maliyet kayıtları uygulama işlevlerini sağlamak için kullanılabilir.",
          "Bu kayıtlar reklam hedefleme amacıyla kullanılmamalıdır.",
        ],
      },
      {
        title: "Konum, Harita ve Hareket",
        paragraphs: [
          "Kullanıcı izin verdiğinde konum; yakındaki servis, benzinlik veya ilgili harita özellikleri için kullanılabilir. Desteklenen yolculuk özellikleri hareket verilerine ihtiyaç duyabilir. Sistem izinleri iOS Ayarlar bölümünden yönetilebilir.",
        ],
      },
      {
        title: "Hesap ve Kimlik Doğrulama",
        paragraphs: [
          "Desteklenen sürümlerde Apple ile Giriş, Google ile Giriş veya Firebase Authentication kullanılabilir. Kimlik doğrulama verileri ilgili sağlayıcının politikalarına tabidir.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Bakım, sigorta, muayene, vergi veya diğer araç hatırlatmaları kullanıcı izin verdiğinde gönderilebilir.",
        ],
      },
      {
        title: "Reklamlar ve Satın Almalar",
        paragraphs: [
          "Uygulama Google AdMob ve Apple App Store/StoreKit hizmetlerinden yararlanabilir. Ödeme kartı bilgileri geliştirici tarafından işlenmez.",
        ],
      },
    ],
  },
  "hilock": {
    name: "HiLock",
    summary: "seçilen uygulamalara erişimi yönetmeye yardımcı olan iOS/iPadOS ve desteklenen sürümlerde macOS güvenlik uygulamasıdır.",
    sections: [
      {
        title: "PIN, Face ID ve Güvenlik Bilgileri",
        paragraphs: [
          "PIN doğrulaması için gerekli güvenlik verileri yerel olarak ve desteklenen durumlarda Apple Keychain gibi güvenli sistem alanlarında saklanabilir. Kullanıcının biyometrik verisinin kendisi uygulama tarafından okunmaz; Face ID doğrulamasını işletim sistemi gerçekleştirir.",
        ],
      },
      {
        title: "Family Controls, Screen Time ve Managed Settings",
        paragraphs: [
          "Kullanıcı yetki verdiğinde HiLock, Apple'ın Family Controls/Managed Settings/Device Activity teknolojilerini uygulama koruma işlevi için kullanabilir.",
          "Seçilen uygulamalara ilişkin sistem belirteçleri koruma işlevi için kullanılır; HiLock korunan uygulamaların içeriğini veya hesap parolalarını okumaz.",
        ],
      },
      {
        title: "macOS İzinleri",
        paragraphs: [
          "macOS sürümünde koruma özelliğinin çalışması için işletim sisteminin sunduğu gerekli izinler istenebilir. Kullanıcı bu izinleri Sistem Ayarları üzerinden yönetebilir.",
        ],
      },
      {
        title: "Yerel Kayıtlar",
        paragraphs: [
          "Koruma tercihleri, kilit ayarları ve desteklenen güvenlik kayıtları cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Reklam destekli sürüm Google AdMob kullanabilir. Uygulama koruma veya Screen Time seçimleri reklam hedefleme amacıyla kullanılmaz.",
        ],
      },
    ],
  },
  "oduyorum": {
    name: "Ödüyorum",
    summary: "gelir, gider, fatura, abonelik ve ödeme hatırlatmalarını takip etmeye yardımcı olan kişisel finans uygulamasıdır.",
    sections: [
      {
        title: "Finansal Kayıtlar",
        paragraphs: [
          "Kullanıcının girdiği gelir, gider, fatura, abonelik, kategori, tarih ve tutar gibi kayıtlar uygulamanın takip ve raporlama özellikleri için kullanılır.",
          "Bu bilgiler banka hesabına bağlanmak veya kullanıcı adına ödeme yapmak amacıyla kullanılmaz ve reklam hedefleme amacıyla paylaşılmaz.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde yaklaşan fatura, abonelik veya ödeme tarihleri için yerel bildirimler planlanabilir.",
        ],
      },
      {
        title: "Yerel Saklama ve Silme",
        paragraphs: [
          "Desteklenen kayıtlar cihaz üzerinde tutulabilir ve uygulamanın veri yönetimi seçenekleriyle silinebilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Ücretsiz sürüm Google AdMob kullanabilir. Reklam sağlayıcıları uygulamanın finansal kayıtlarının içeriğine erişmek amacıyla kullanılmaz.",
        ],
      },
    ],
  },
  "susadim": {
    name: "Susadım",
    summary: "günlük su tüketimini ve su içme hedeflerini takip etmeye yardımcı olan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Su Tüketimi ve Hedefler",
        paragraphs: [
          "İçilen su miktarı, günlük hedef ve ilgili takip kayıtları uygulamanın ilerleme hesaplamaları için cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Apple Health",
        paragraphs: [
          "Kullanıcı açıkça izin verdiğinde desteklenen su verileri Apple Health/HealthKit ile okunabilir veya yazılabilir.",
          "HealthKit üzerinden erişilen sağlık verileri reklam, pazarlama veya reklam profili oluşturma amacıyla kullanılmaz veya reklam sağlayıcılarına aktarılmaz.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde su içme hatırlatmaları gönderilebilir; zamanlama tercihleri cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Premium ve Reklamlar",
        paragraphs: [
          "Premium işlemleri Apple App Store üzerinden yürütülür. Ücretsiz sürüm Google AdMob kullanabilir. Apple Health verileri reklam hedefleme amacıyla kullanılmaz.",
        ],
      },
    ],
  },
  "ezan-vakti": {
    name: "Ezan Vakti: Namaz ve Kıble",
    summary: "namaz vakitleri, kıble, Hicri takvim, Ramazan ve ilgili İslami içerikler sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Konum Bilgisi",
        paragraphs: [
          "Kullanıcı izin verdiğinde konum; namaz vakitlerini hesaplamak, kıble yönünü belirlemek ve yakındaki cami gibi konuma bağlı özellikleri sağlamak amacıyla kullanılabilir.",
          "Konum izni iOS Ayarlar bölümünden değiştirilebilir veya kapatılabilir.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Namaz vakti ve ilgili hatırlatmalar kullanıcı izin verdiğinde cihazda planlanabilir.",
        ],
      },
      {
        title: "İçerik ve Tercihler",
        paragraphs: [
          "Hesaplama yöntemi, mezhep, dil, şehir ve uygulama tercihleri deneyimi kişiselleştirmek amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Uygulama Google AdMob kullanabilir. Reklam sağlayıcılarının işlediği teknik ve reklam etkileşim verileri kendi politikalarına tabidir.",
        ],
      },
      {
        title: "Hesap",
        paragraphs: [
          "Temel uygulama özelliklerini kullanmak için kullanıcı hesabı oluşturulması zorunlu değildir.",
        ],
      },
    ],
  },
  "melody-map": {
    name: "Melody Map",
    summary: "müzik keşfi ve müzikle ilişkili deneyimler sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Müzik İçeriği ve Tercihler",
        paragraphs: [
          "Kullanıcının uygulama içinde yaptığı seçimler, favoriler ve keşif tercihleri ilgili özellikleri sağlamak amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Harici Müzik Hizmetleri",
        paragraphs: [
          "Uygulama bir üçüncü taraf müzik hizmetine bağlantı sunuyorsa yetkilendirme ve veri işleme ilgili hizmet sağlayıcının politikalarına tabidir. Uygulama üçüncü taraf hesabın parolasını doğrudan talep etmemelidir.",
        ],
      },
      {
        title: "Bağlantılar ve Ağ İstekleri",
        paragraphs: [
          "Müzik bilgileri veya harici içerikler internet üzerinden alınabilir. Bu sırada hizmet sağlayıcı IP adresi ve standart ağ bilgilerini teknik olarak işleyebilir.",
        ],
      },
      {
        title: "Bildirimler ve İzinler",
        paragraphs: [
          "Bildirim veya başka bir korumalı sistem kaynağı gerektiğinde izin iOS tarafından kullanıcıya sorulur ve Ayarlar bölümünden yönetilebilir.",
        ],
      },
    ],
  },
  "history": {
    name: "HiStory",
    summary: "günlük tarih, kültür ve eğlenceli bilgi içerikleri sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "İlgi Alanları ve Ülke Tercihi",
        paragraphs: [
          "Onboarding sırasında seçilen ilgi alanları, ülke ve dil tercihleri gösterilen içerikleri kişiselleştirmek amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "İçerik Kullanımı",
        paragraphs: [
          "Görüntülenen, favorilenen veya kaydedilen içeriklere ilişkin yerel durum bilgileri uygulama deneyimini sürdürmek için saklanabilir.",
        ],
      },
      {
        title: "Premium ve Reklamlar",
        paragraphs: [
          "Premium satın alma Apple App Store üzerinden yürütülebilir. Ücretsiz kullanımda Google AdMob ve ödüllü reklam özellikleri kullanılabilir.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde günlük bilgi veya içerik hatırlatmaları gönderilebilir.",
        ],
      },
    ],
  },
  "velomate": {
    name: "VeloMate",
    summary: "kendi uygulama özelliklerini ve kullanıcı tercihlerini sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Uygulama Tercihleri",
        paragraphs: [
          "Kullanıcının yaptığı ayarlar ve desteklenen yerel kayıtlar yalnızca ilgili uygulama özelliklerini sağlamak amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Cihaz İzinleri",
        paragraphs: [
          "Bir özellik konum, bildirim, fotoğraf, kamera veya başka bir korumalı sistem kaynağı gerektiriyorsa izin iOS tarafından açıkça sorulur. Kullanıcı izinleri Ayarlar bölümünden yönetebilir.",
        ],
      },
      {
        title: "Ağ ve Üçüncü Taraf Hizmetler",
        paragraphs: [
          "Uygulamanın internet tabanlı özellikleri varsa ilgili hizmet sağlayıcıları standart ağ ve teknik bilgileri kendi politikaları kapsamında işleyebilir.",
        ],
      },
      {
        title: "Reklam ve Ölçüm",
        paragraphs: [
          "Uygulama reklam veya ölçüm SDK'sı içeriyorsa iOS tarafından gerekli olduğunda App Tracking Transparency izni istenir. İzin vermemek temel işlevlere erişimi engellememelidir.",
        ],
      },
    ],
  },
  "tartarot": {
    name: "TarTarot",
    summary: "günlük tarot, üç kart ve Evet/Hayır gibi eğlence amaçlı tarot deneyimleri sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Kart Seçimleri ve Günlük",
        paragraphs: [
          "Seçilen kartlar, favoriler, günlük kayıtları ve uygulama tercihleri desteklenen özellikleri sağlamak amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Yapay Zekâ Destekli Yorumlar",
        paragraphs: [
          "Desteklenen sürümlerde kart yorumları üçüncü taraf veya yapay zekâ hizmetleriyle oluşturulabilir. Kullanıcıların yorum alanlarına kişisel, finansal, sağlıkla ilgili veya başka hassas bilgiler girmemesi önerilir.",
        ],
      },
      {
        title: "Premium",
        paragraphs: [
          "Premium abonelik satın alma, yenileme ve geri yükleme işlemleri Apple App Store üzerinden yürütülür.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde günlük tarot veya uygulama hatırlatmaları gönderilebilir.",
        ],
      },
      {
        title: "Eğlence Amaçlı Kullanım",
        paragraphs: [
          "Tarot içerikleri eğlence amaçlıdır ve profesyonel sağlık, hukuk, finans veya benzeri uzman tavsiyesinin yerine geçmez.",
        ],
      },
    ],
  },
  "vibelens": {
    name: "VibeLens",
    summary: "uygulama içindeki analiz ve kişiselleştirme özelliklerini sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Kullanıcı Girdileri",
        paragraphs: [
          "Kullanıcının bir analiz veya sonuç üretmek için uygulamaya verdiği girdiler yalnızca ilgili özelliği sağlamak amacıyla işlenmelidir. Kullanıcıların gereksiz kişisel veya hassas veri paylaşmaması önerilir.",
        ],
      },
      {
        title: "Yerel Tercihler",
        paragraphs: [
          "Uygulama ayarları, geçmiş veya favori gibi desteklenen bilgiler cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Harici İşleme",
        paragraphs: [
          "Bir özellik üçüncü taraf sunucu veya yapay zekâ hizmeti kullanıyorsa yalnızca özelliğin çalışması için gerekli veri aktarılmalıdır ve ilgili sağlayıcının gizlilik politikası geçerlidir.",
        ],
      },
      {
        title: "Premium ve Satın Almalar",
        paragraphs: [
          "Desteklenen ücretli özelliklerin satın alma işlemleri Apple App Store üzerinden yürütülür.",
        ],
      },
    ],
  },
  "refrefref": {
    name: "Ref!Ref!Ref!",
    summary: "refleks, hız ve skor odaklı bir mobil oyundur.",
    sections: [
      {
        title: "Oyun İlerlemesi",
        paragraphs: [
          "Skor, can, açılan tema/şehir, oyun ayarları ve benzeri ilerleme bilgileri cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Ücretsiz sürüm Google AdMob üzerinden reklam gösterebilir. Reklam SDK'larının teknik ve reklam etkileşim verileri kendi politikalarına tabidir.",
        ],
      },
      {
        title: "Uygulama İçi Satın Almalar",
        paragraphs: [
          "Reklam kaldırma gibi desteklenen dijital satın almalar Apple App Store üzerinden yürütülür.",
        ],
      },
      {
        title: "Ses ve Haptik Tercihleri",
        paragraphs: [
          "Ses, titreşim ve benzeri oyun tercihleri cihaz üzerinde saklanabilir.",
        ],
      },
    ],
  },
  "bold-block-arcade": {
    name: "Bold Block Arcade",
    summary: "blok tabanlı arcade oyun deneyimi sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Oyun Verileri",
        paragraphs: [
          "Skor, oyun ilerlemesi, ayarlar ve desteklenen diğer oyun durumu verileri cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Uygulama reklam destekliyse reklam sağlayıcısı standart cihaz ve reklam etkileşim verilerini kendi politikaları kapsamında işleyebilir.",
        ],
      },
      {
        title: "Satın Almalar",
        paragraphs: [
          "Desteklenen uygulama içi satın almalar Apple App Store üzerinden gerçekleştirilir.",
        ],
      },
      {
        title: "Tanılama",
        paragraphs: [
          "Çökme veya performans verileri bir tanılama hizmeti kullanılıyorsa uygulamanın güvenilirliğini artırmak amacıyla işlenebilir.",
        ],
      },
    ],
  },
  "usenme-yap": {
    name: "Üşenme Yap",
    summary: "görev, alışkanlık, motivasyon ve üretkenlik özellikleri sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "Görev ve Alışkanlık Verileri",
        paragraphs: [
          "Kullanıcının oluşturduğu görevlar, hedefler, tamamlanma durumu ve uygulama tercihleri ilgili özellikleri sağlamak amacıyla saklanabilir.",
        ],
      },
      {
        title: "Hesap ve Kimlik Doğrulama",
        paragraphs: [
          "Desteklenen sürümlerde Firebase Authentication ve Google ile Giriş gibi hizmetler kullanılabilir. Kimlik doğrulama verileri ilgili sağlayıcının politikalarına tabidir.",
        ],
      },
      {
        title: "Bildirimler",
        paragraphs: [
          "Kullanıcı izin verdiğinde görev, alışkanlık veya motivasyon hatırlatmaları gönderilebilir.",
        ],
      },
      {
        title: "Premium ve Reklamlar",
        paragraphs: [
          "Premium işlemleri Apple App Store üzerinden yürütülür. Ücretsiz sürüm reklam hizmetleri kullanabilir.",
        ],
      },
    ],
  },
  "kedilik": {
    name: "Kedilik",
    summary: "kedi odaklı içerik ve uygulama özellikleri sunan bir iOS uygulamasıdır.",
    sections: [
      {
        title: "İçerik ve Tercihler",
        paragraphs: [
          "Favoriler, görüntüleme tercihleri ve desteklenen diğer yerel kayıtlar uygulama deneyimini sürdürmek amacıyla cihaz üzerinde saklanabilir.",
        ],
      },
      {
        title: "Cihaz İzinleri",
        paragraphs: [
          "Bir özellik fotoğraf, kamera, bildirim veya başka bir korumalı sistem kaynağı gerektiriyorsa izin iOS tarafından kullanıcıya sorulur ve Ayarlar bölümünden yönetilebilir.",
        ],
      },
      {
        title: "Harici İçerik ve Ağ",
        paragraphs: [
          "İnternet üzerinden sağlanan içerikler varsa ilgili hizmet sağlayıcı standart ağ bilgilerini teknik olarak işleyebilir.",
        ],
      },
      {
        title: "Reklamlar",
        paragraphs: [
          "Uygulama reklam destekliyse reklam sağlayıcılarının kendi gizlilik politikaları ve veri işleme uygulamaları geçerlidir.",
        ],
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const config = privacyBySlug[app.slug];

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
          <span className={styles.kicker}>Gizlilik</span>
          <h1>{app.name} Gizlilik Politikası</h1>
          <p><strong>Son güncelleme:</strong> 16 Ağustos 2026</p>

          <h3>1. Genel Bakış</h3>
          <p>
            {config
              ? `${config.name}, ${config.summary}`
              : `${app.name}, sunduğu özelliklerin çalışması için gerekli verileri ve izinleri kullanır.`}
          </p>
          <p>
            Bu politika, uygulamanın hangi bilgileri kullanabileceğini, bu bilgilerin neden
            gerekli olduğunu, üçüncü taraf hizmetlerin rolünü ve kullanıcıların gizlilik
            tercihlerini nasıl yönetebileceğini açıklamak amacıyla hazırlanmıştır.
          </p>

          {config?.sections.map((section, index) => (
            <section key={section.title}>
              <h3>{index + 2}. {section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <h3>{(config?.sections.length ?? 0) + 2}. Üçüncü Taraf Hizmetler</h3>
          <p>
            Uygulamanın kullandığı Apple hizmetleri, reklam ağları, kimlik doğrulama
            sağlayıcıları, içerik servisleri veya diğer üçüncü taraf SDK'ların kendi
            gizlilik politikaları ve veri işleme uygulamaları bulunabilir. Bu sağlayıcılar
            üzerinden işlenen bilgiler ilgili sağlayıcının koşullarına tabidir.
          </p>

          <h3>{(config?.sections.length ?? 0) + 3}. Veri Saklama ve Silme</h3>
          <p>
            Yalnızca cihaz üzerinde saklanan uygulama verileri, desteklenen uygulama içi
            silme seçenekleri kullanılarak veya uygulama cihazdan kaldırılarak silinebilir.
            Bir özellik sunucu tabanlı hesap veya hizmet kullanıyorsa veri silme talebi
            için hello@saybir.net adresinden iletişime geçebilirsiniz. Yasal veya güvenlik
            gerekçeleriyle saklanması zorunlu bilgiler varsa ilgili yükümlülükler uygulanır.
          </p>

          <h3>{(config?.sections.length ?? 0) + 4}. İzinleri ve Onayı Geri Çekme</h3>
          <p>
            Konum, bildirim, kamera, fotoğraf, sağlık, takip veya diğer sistem izinleri
            iOS/iPadOS/macOS Ayarlar veya Sistem Ayarları üzerinden değiştirilebilir.
            Bir iznin kapatılması yalnızca o izne ihtiyaç duyan özelliğin çalışmasını
            etkileyebilir.
          </p>

          <h3>{(config?.sections.length ?? 0) + 5}. Veri Güvenliği</h3>
          <p>
            Uygulama, özelliklerin sağlanması için gerekli veri miktarını sınırlamayı ve
            Apple platformlarının sunduğu güvenlik mekanizmalarından yararlanmayı amaçlar.
            İnternet üzerinden veri aktaran üçüncü taraf hizmetlerin güvenliği ayrıca
            ilgili hizmet sağlayıcıların teknik ve organizasyonel önlemlerine tabidir.
          </p>

          <h3>{(config?.sections.length ?? 0) + 6}. Çocukların Gizliliği</h3>
          <p>
            Uygulama özellikle çocuklardan bilerek kişisel bilgi toplamayı amaçlamaz.
            Bir ebeveyn veya yasal temsilci, bir çocuğa ait kişisel bilginin uygunsuz
            şekilde işlendiğini düşünüyorsa bizimle iletişime geçebilir.
          </p>

          <h3>{(config?.sections.length ?? 0) + 7}. Politika Değişiklikleri</h3>
          <p>
            Uygulamanın özellikleri, kullandığı hizmetler veya yasal gereklilikler
            değiştiğinde bu gizlilik politikası güncellenebilir. Güncel metin her zaman
            bu sayfada yayımlanır.
          </p>

          <h3>{(config?.sections.length ?? 0) + 8}. İletişim</h3>
          <p>
            Gizlilik, veri silme veya uygulamanın veri kullanımıyla ilgili sorular için{" "}
            <a href="mailto:hello@saybir.net">hello@saybir.net</a> adresinden iletişime
            geçebilirsiniz.
          </p>

          <div className={styles.actions}>
            <Link href={`/apps/${app.slug}/support`}>Destek Sayfası</Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
              Apple Standart EULA
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
