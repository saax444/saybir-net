"use client";

import { useEffect } from "react";
import { useSitePreferences } from "./SitePreferences";
import { translate } from "@/data/translations";

/** Keep the browser tab in the selected language without changing public URLs. */
export default function PageTitle({ title, name }: { title: string; name?: string }) {
  const { lang } = useSitePreferences();
  useEffect(() => {
    document.title = [name, translate(title, lang), "SAYBIR"].filter(Boolean).join(" · ");
  }, [lang, name, title]);
  return null;
}
