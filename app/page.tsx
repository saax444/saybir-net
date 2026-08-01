import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import GitHubProjects from "@/components/GitHubProjects";
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
        <Applications />
        <GitHubProjects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
