import Text from "@/components/Text";
import "./Process.css";

const steps = [
  ["01", "Keşif ve Analiz", "İhtiyaçları, hedefleri ve ürün kapsamını netleştiririm."],
  ["02", "Tasarım ve Planlama", "Kullanıcı deneyimini merkeze alan akışlar oluştururum."],
  ["03", "Geliştirme", "Modern, güvenli ve hızlı kod altyapısını kurarım."],
  ["04", "Test ve Yayın", "Test eder, optimize eder ve App Store sürecini yönetirim."]
];

export default function Process() {
  return (
    <section className="process" id="surec">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker"><Text>{"Çalışma Süreci"}</Text></span>
          <h2 className="section-title"><Text>{"Şeffaf, ölçülebilir ve sonuç odaklı ilerleyiş."}</Text></h2>
          <p className="section-copy"><Text>{"Her projede kapsamı netleştirir, doğru planı çıkarır ve ürünü kontrollü biçimde yayına alırım."}</Text></p>
        </div>

        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3><Text>{title}</Text></h3>
              <p><Text>{text}</Text></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
