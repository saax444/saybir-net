import Text from "@/components/Text";
import "./Services.css";

const services = [
  {
    title: "iOS Uygulama Geliştirme",
    text: "Swift ve SwiftUI ile modern, hızlı ve sürdürülebilir iOS uygulamaları."
  },
  {
    title: "UI/UX Tasarım",
    text: "Kullanıcı odaklı, estetik ve anlaşılır mobil arayüzler."
  },
  {
    title: "Backend Entegrasyonu",
    text: "Güvenli, ölçeklenebilir ve performanslı veri akışları."
  },
  {
    title: "App Store Süreçleri",
    text: "TestFlight, abonelik, gizlilik, yayın ve sürüm yönetimi."
  }
];

export default function Services() {
  return (
    <section className="services" id="hizmetler">
      <div className="container services-layout">
        <div className="services-intro">
          <span className="section-kicker"><Text>{"Hizmetler"}</Text></span>
          <h2><Text>{"İşinizi dijitalde ileri taşıyan çözümler."}</Text></h2>
          <p><Text>{"Fikir aşamasından canlı ürüne kadar tüm geliştirme sürecini tek bir yapı içinde yönetiyorum."}</Text></p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>0{index + 1}</span>
              <h3><Text>{service.title}</Text></h3>
              <p><Text>{service.text}</Text></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
