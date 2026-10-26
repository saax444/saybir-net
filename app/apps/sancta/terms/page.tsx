import { appMetadata } from "@/data/seo";
import type { Metadata } from "next";
import SanctaLegal from "@/components/SanctaLegal";
export const metadata = appMetadata("sancta", "terms");
export default function Page() { return <SanctaLegal section="terms"/>; }
