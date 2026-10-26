import { apps } from "@/data/apps";
import { pageMetadata, siteDescription } from "@/data/seo";
export const metadata = pageMetadata("/", "Bağımsız Yazılım Stüdyosu", siteDescription);
import PageTitle from "@/components/PageTitle";
import Catalog from "@/components/Catalog";
import Text from "@/components/Text";
import Header from "@/components/Header";import Hero from "@/components/Hero";import Applications from "@/components/Applications";import Services from "@/components/Services";import Process from "@/components/Process";import Contact from "@/components/Contact";import Footer from "@/components/Footer";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://saybir.net/#organization", name: "SAYBIR", url: "https://saybir.net", logo: "https://saybir.net/icon.png" },
    { "@type": "WebSite", "@id": "https://saybir.net/#website", name: "SAYBIR", url: "https://saybir.net", publisher: { "@id": "https://saybir.net/#organization" } },
    { "@type": "ItemList", name: "SAYBIR Uygulamaları", itemListElement: apps.map((app, index) => ({ "@type": "ListItem", position: index + 1, name: app.name, url: `https://saybir.net/apps/${app.slug}` })) },
  ],
};
export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/><a className="skip-link" href="#main-content"><Text>İçeriğe geç</Text></a><PageTitle title="Bağımsız Yazılım Stüdyosu"/><Header/><main id="main-content" tabIndex={-1}><Hero/><Applications/><Catalog/><section id="platformlar" className="platform-intro"><div className="container"><span className="platform-overline"><Text>{"PLATFORM / 03"}</Text></span><h2><Text>{"One language."}</Text><br/><span><Text>{"Every screen."}</Text></span></h2><div className="platform-row"><article><small>01</small><strong><Text>{"iOS"}</Text></strong><p><Text>{"Native mobile experiences shaped around the Apple ecosystem."}</Text></p></article><article><small>02</small><strong><Text>{"macOS"}</Text></strong><p><Text>{"Focused desktop software built to feel at home on the Mac."}</Text></p></article><article><small>03</small><strong><Text>{"Android"}</Text></strong><p><Text>{"Fast, modern products designed for a broader mobile world."}</Text></p></article></div></div></section><Services/><Process/><Contact/></main><Footer/></>}