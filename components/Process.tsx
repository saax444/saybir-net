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
          <span className="section-kicker">Çalışma Süreci</span>
          <h2 className="section-title">Şeffaf, ölçülebilir ve sonuç odaklı ilerleyiş.</h2>
          <p className="section-copy">
            Her projede kapsamı netleştirir, doğru planı çıkarır ve ürünü kontrollü biçimde yayına alırım.
          </p>
        </div>

        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
