import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = apps.flatMap((app) => {
    const pages = [
      { url: `https://saybir.net/apps/${app.slug}`, priority: 0.8 },
      { url: `https://saybir.net/apps/${app.slug}/support`, priority: 0.6 },
      { url: `https://saybir.net/apps/${app.slug}/privacy`, priority: 0.6 },
    ];

    if (app.slug === "hushloom" || app.slug === "sancta") {
      pages.push({
        url: `https://saybir.net/apps/${app.slug}/terms`,
        priority: 0.6,
      });
    }

    if (app.slug === "retro-snake") {
      for (const section of ["terms", "eula", "purchases"]) pages.push({url: `https://saybir.net/apps/retro-snake/${section}`, priority: 0.6});
    }
    return pages;
  });

  return [{ url: "https://saybir.net", priority: 1 }, ...appPages];
}
