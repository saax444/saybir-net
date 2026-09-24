import type { Metadata } from "next";
import SanctaLegal from "@/components/SanctaLegal";
export const metadata: Metadata = {title: "Sancta Destek — SAYBIR", alternates: {canonical: "/apps/sancta/support"} };
export default function Page() { return <SanctaLegal section="support"/>; }
