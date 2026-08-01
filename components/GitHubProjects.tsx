import "./GitHubProjects.css";

const projects = [
  { name: "CarSave", language: "HTML", description: "CarSave AI ürün, destek ve gizlilik kaynakları.", href: "https://github.com/saax444/CarSave" },
  { name: "Yemekolay", language: "Swift", description: "Yemekolay iOS uygulaması ve destek sitesi.", href: "https://github.com/saax444/Yemekolay" },
  { name: "HiLock", language: "Swift", description: "iPhone, iPad ve Mac için uygulama koruma ve odak aracı.", href: "https://github.com/saax444/HiLock" },
  { name: "VibeLens-Web", language: "HTML", description: "VibeLens ürün, gizlilik ve destek sitesi.", href: "https://github.com/saax444/VibeLens-Web" },
  { name: "Oduyorum", language: "Swift", description: "Ödüyorum uygulamasının geliştirme deposu.", href: "https://github.com/saax444/Oduyorum" },
  { name: "saybir-net", language: "CSS", description: "Bu web sitesinin kaynak kodu ve yayın altyapısı.", href: "https://github.com/saax444/saybir-net" }
];

export default function GitHubProjects() {
  return (
    <section className="github-section" id="github">
      <div className="container">
        <div className="github-heading">
          <div>
            <span className="section-kicker">GitHub</span>
            <h2 className="section-title">Açık proje kaynakları</h2>
          </div>
          <a className="github-profile" href="https://github.com/saax444" target="_blank" rel="noopener noreferrer">
            <span className="github-mark" aria-hidden="true">GH</span>
            github.com/saax444 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="github-grid">
          {projects.map((project) => (
            <a className="github-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.name}>
              <div><strong>{project.name}</strong><span aria-hidden="true">↗</span></div>
              <p>{project.description}</p>
              <small><i />{project.language}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
