import "./Contact.css";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/azizahmetsaybir/",
    detail: "Profesyonel profil",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905358462450",
    detail: "+90 535 846 24 50",
    icon: "whatsapp",
  },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.25 3.5A1.75 1.75 0 1 1 5.25 7a1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v11.75h-3V8.5Zm5 0h2.88v1.6h.04c.4-.76 1.38-1.97 3.58-1.97 3.83 0 4.54 2.52 4.54 5.8v6.32h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3V8.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.03 2.5a9.4 9.4 0 0 0-8.1 14.18L2.5 21.5l4.94-1.4a9.42 9.42 0 1 0 4.59-17.6Zm0 16.95a7.5 7.5 0 0 1-3.82-1.04l-.27-.16-2.93.83.79-2.86-.18-.29a7.51 7.51 0 1 1 6.41 3.52Zm4.12-5.62c-.23-.11-1.34-.66-1.55-.74-.21-.07-.36-.11-.51.12-.15.22-.59.74-.72.89-.13.15-.26.17-.49.06-.22-.12-.94-.35-1.8-1.11a6.76 6.76 0 0 1-1.24-1.55c-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.12-.13.15-.22.23-.37.07-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.44c-.15 0-.39.06-.59.28-.21.23-.78.77-.78 1.87s.8 2.17.91 2.32c.11.15 1.57 2.4 3.81 3.37.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.05-.09-.2-.15-.43-.26Z" />
    </svg>
  );
}

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
                <span className={`contact-social-icon ${link.icon}`}>
                  <SocialIcon name={link.icon} />
                </span>
                <span className="contact-social-copy">
                  <strong>{link.label}</strong>
                  <small>{link.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
