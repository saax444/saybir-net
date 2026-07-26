import "./Contact.css";

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

        <a href="mailto:hello@saybir.net">hello@saybir.net</a>
      </div>
    </section>
  );
}
