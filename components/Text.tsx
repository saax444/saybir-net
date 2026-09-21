"use client";

import { useSitePreferences } from "./SitePreferences";
import { translate } from "@/data/translations";

/** A text-only boundary: keeps page structure and legal copy on the server. */
export default function Text({ children }: { children: string | number | null | undefined }) {
  const { lang } = useSitePreferences();
  return typeof children === "string" ? translate(children, lang) : children;
}
