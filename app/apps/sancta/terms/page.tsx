import type { Metadata } from "next";
import SanctaLegal from "@/components/SanctaLegal";
export const metadata: Metadata = {title: "Sancta Kullanım Şartları — SAYBIR", alternates: {canonical: "/apps/sancta/terms"} };
export default function Page() { return <SanctaLegal section="terms"/>; }
