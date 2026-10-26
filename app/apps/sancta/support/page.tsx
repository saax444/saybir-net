import { appMetadata } from "@/data/seo";
import type { Metadata } from "next";
import SanctaLegal from "@/components/SanctaLegal";
export const metadata = appMetadata("sancta", "support");
export default function Page() { return <SanctaLegal section="support"/>; }
