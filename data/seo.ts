import type { Metadata } from "next";
import { getApp } from "./apps";

export const siteUrl = "https://saybir.net";
export const siteDescription = "SAYBIR bağımsız yazılım stüdyosu. Günlük yaşam, üretkenlik ve oyun için iOS, macOS ve Android uygulamalarını keşfedin.";
export const isPreview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(path: string, title: string, description: string, image = "/icon.png"): Metadata {
  return {
    title: { absolute: `${title} | SAYBIR` }, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "SAYBIR", locale: "tr_TR", type: "website", images: [{ url: image, alt: title }] },
    twitter: { card: "summary", title, description, images: [image] },
    robots: { index: !isPreview, follow: true },
  };
}

const sections: Record<string, [string, string]> = {
  support: ["Destek", "teknik destek, sık sorulan sorular ve iletişim bilgileri"],
  privacy: ["Gizlilik Politikası", "gizlilik politikası, veri kullanımı ve kullanıcı tercihleri"],
  terms: ["Kullanım Koşulları", "kullanım koşulları ve hizmet kuralları"],
  eula: ["Son Kullanıcı Lisans Sözleşmesi", "son kullanıcı lisans sözleşmesi ve kullanım hakları"],
  purchases: ["Satın Alma ve İade", "uygulama içi satın alma, abonelik ve iade koşulları"],
};

export function appMetadata(slug: string, section?: string): Metadata {
  const app = getApp(slug);
  if (!app) return { robots: { index: false, follow: false } };
  const detail = section ? sections[section] : undefined;
  return pageMetadata(`/apps/${slug}${section ? `/${section}` : ""}`, detail ? `${app.name} · ${detail[0]}` : app.name,
    detail ? `${app.name} ${detail[1]}.` : app.description, app.image);
}
