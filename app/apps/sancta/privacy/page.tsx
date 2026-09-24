import type { Metadata } from "next";
import SanctaLegal from "@/components/SanctaLegal";
export const metadata: Metadata = {title: "Sancta Gizlilik Politikası — SAYBIR", alternates: {canonical: "/apps/sancta/privacy"} };
export default function Page() { return <SanctaLegal section="privacy"/>; }
