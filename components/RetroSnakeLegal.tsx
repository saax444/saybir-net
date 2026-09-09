import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import documents from "@/data/retro-snake-legal.json";
import styles from "@/app/apps/[slug]/app-page.module.css";

export default function RetroSnakeLegal({documentID}:{documentID:string}) {
  const document = documents.find(item => item.id === documentID)!;
  return <div className={styles.page}>
    <nav className={styles.nav}><div className={styles.navInner}><BrandLogo/><Link className={styles.back} href="/apps/retro-snake">← Retro Snake</Link></div></nav>
    <main className={styles.main}><article className={styles.content}>
      <span className={styles.kicker}>Retro Snake · Yasal ve Gizlilik</span>
      <h1>{document.title}</h1><p>Son güncelleme: {document.updated}</p>
      {document.sections.map(section=><section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
      <div className={styles.actions}>{document.links.map(link=><a key={link.url} href={link.url}>{link.title} ↗</a>)}</div>
      <h2>Diğer belgeler</h2><div className={styles.actions}>{documents.filter(item=>item.id!==documentID).map(item=><Link key={item.id} href={`/apps/retro-snake/${item.id}`}>{item.title}</Link>)}<Link href="/apps/retro-snake/support">Destek</Link></div>
    </article></main>
  </div>;
}
