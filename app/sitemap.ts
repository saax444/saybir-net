import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://saybir.net", lastModified: new Date(), priority: 1 }];
}
