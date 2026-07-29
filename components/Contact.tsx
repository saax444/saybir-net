import "./Contact.css";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/azizahmetsaybir/",
    detail: "Profesyonel profil",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905358462450",
    detail: "+90 535 846 24 50",
  },
];

export default function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="container contact-panel">
        <div>
          <span className="section-kicker">İletişim</span>
          <h2>Birlikte güçlü bir ürün geliştirelim.</h2>
          <p>
            Projenizi, hedefinizi ve mevcut aşamanızı paylaşın. Uygun kapsamı birlikte belirleyelim.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-email" href="mailto:hello@saybir.net">
            hello@saybir.net
          </a>

          <div className="contact-socials" aria-label="Sosyal bağlantılar">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
                <small>{link.detail}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
