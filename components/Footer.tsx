import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>saybir.net</strong>
          <span>© 2026 Tüm hakları saklıdır.</span>
        </div>

        <div className="footer-links">
          <a href="#uygulamalar">Uygulamalar</a>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#iletisim">İletişim</a>
          <a
            href="https://www.linkedin.com/in/azizahmetsaybir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/905358462450"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
