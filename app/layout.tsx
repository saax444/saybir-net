import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saybir.net"),
  title: "saybir.net — iOS Uygulamaları ve Yazılım Geliştirme",
  description:
    "iOS uygulama geliştirme, kullanıcı deneyimi, ürün tasarımı ve App Store yayın süreçleri.",
  openGraph: {
    title: "saybir.net — iOS Uygulamaları ve Yazılım Geliştirme",
    description:
      "Modern, hızlı ve sürdürülebilir iOS ürünleri geliştiriyorum.",
    url: "https://saybir.net",
    siteName: "saybir.net",
    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
