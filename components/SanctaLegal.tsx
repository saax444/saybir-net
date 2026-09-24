import PageTitle from "./PageTitle";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import Text from "./Text";
import { PreferenceControls } from "./SitePreferences";
import content from "@/data/sancta-legal.json";
import styles from "@/app/apps/[slug]/app-page.module.css";
export default function SanctaLegal({ section }: { section: keyof typeof content }) {
 const doc = content[section];
 return <div className={styles.page}>
  <nav className={styles.nav}><div className={styles.navInner}><BrandLogo/><PreferenceControls/><Link className={styles.back} href="/apps/sancta">← Sancta</Link></div></nav>
  <PageTitle title={doc.title}/><main className={styles.main}><article className={styles.content}>
   <h1><Text>{doc.title}</Text></h1><p><Text>24 Eylül 2026</Text></p>
   {doc.sections.map(([title,body])=><section key={title}><h2><Text>{title}</Text></h2><p><Text>{body}</Text></p></section>)}
   <p><a href="mailto:hello@saybir.net">hello@saybir.net</a></p>
   <div className={styles.actions}>
    <Link href="/apps/sancta/privacy"><Text>Gizlilik</Text></Link>
    <Link href="/apps/sancta/terms"><Text>Kullanım Koşulları</Text></Link>
    <Link href="/apps/sancta/support"><Text>Destek</Text></Link>
    <a href="https://policies.google.com/privacy"><Text>Google gizlilik politikası</Text></a>
    <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"><Text>Apple Standart EULA</Text></a>
   </div>
  </article></main>
 </div>;
}
