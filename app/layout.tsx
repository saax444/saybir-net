import { siteUrl, siteDescription, isPreview } from "@/data/seo";
import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { SitePreferences } from "@/components/SitePreferences";
import { preferenceScript } from "@/data/preference-script";
export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: { default: "SAYBIR — Bağımsız Yazılım Stüdyosu", template: "%s | SAYBIR" },
 description: siteDescription,
 icons: { icon: "/icon.png", apple: "/icon.png" },
 robots: { index: !isPreview, follow: true },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="tr" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: preferenceScript }} /></head><body><SitePreferences>{children}</SitePreferences></body></html>}