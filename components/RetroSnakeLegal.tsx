import PageTitle from "@/components/PageTitle";
import Text from "@/components/Text";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PreferenceControls } from "@/components/SitePreferences";
import documents from "@/data/retro-snake-legal.json";
import styles from "@/app/apps/[slug]/app-page.module.css";

export default function RetroSnakeLegal({documentID}:{documentID:string}) {
  const document = documents.find(item => item.id === documentID)!;
  return <div className={styles.page}>
    <nav className={styles.nav}><div className={styles.navInner}><BrandLogo/><PreferenceControls/><Link className={styles.back} href="/apps/retro-snake"><Text>{"← Retro Snake"}</Text></Link></div></nav>
    <PageTitle name="Retro Snake" title={document.title}/><main className={styles.main}><article className={styles.content}>
      <span className={styles.kicker}><Text>{"Retro Snake · Yasal ve Gizlilik"}</Text></span>
      <h1><Text>{document.title}</Text></h1><p><Text>{"Son güncelleme: "}</Text><Text>{document.updated}</Text></p>
      {document.sections.map(section=><section key={section.title}><h2><Text>{section.title}</Text></h2><p><Text>{section.body}</Text></p></section>)}
      <div className={styles.actions}>{document.links.map(link=><a key={link.url} href={link.url}><Text>{link.title}</Text> ↗</a>)}</div>
      <h2><Text>{"Diğer belgeler"}</Text></h2><div className={styles.actions}>{documents.filter(item=>item.id!==documentID).map(item=><Link key={item.id} href={`/apps/retro-snake/${item.id}`}><Text>{item.title}</Text></Link>)}<Link href="/apps/retro-snake/support"><Text>{"Destek"}</Text></Link></div>
    </article></main>
  </div>;
}
