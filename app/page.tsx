import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="platformlar" className="platform-intro">
          <div className="container">
            <span className="platform-overline">One studio · multiple platforms</span>
            <h2>Designed across ecosystems.<br/><span>Built as one experience.</span></h2>
            <div className="platform-row">
              <article><small>01</small><strong>iOS</strong><p>Native mobile experiences for the Apple ecosystem.</p></article>
              <article><small>02</small><strong>macOS</strong><p>Focused desktop software built for the Mac.</p></article>
              <article><small>03</small><strong>Android</strong><p>Modern mobile products designed for everyone.</p></article>
            </div>
          </div>
        </section>
        <Applications />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
