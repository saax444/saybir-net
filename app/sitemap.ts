import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = apps.flatMap((app) => [
    { url: `https://saybir.net/apps/${app.slug}`, lastModified: new Date(), priority: 0.8 },
    { url: `https://saybir.net/apps/${app.slug}/support`, lastModified: new Date(), priority: 0.6 },
    { url: `https://saybir.net/apps/${app.slug}/privacy`, lastModified: new Date(), priority: 0.6 }
  ]);
  return [{ url: "https://saybir.net", lastModified: new Date(), priority: 1 }, ...appPages];
}
