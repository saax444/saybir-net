"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "tr" | "en";
export type Theme = "dark" | "light";
type Preferences = { lang: Language; theme: Theme; setLang: (lang: Language) => void; setTheme: (theme: Theme) => void };
const PreferencesContext = createContext<Preferences | null>(null);


export function SitePreferences({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [lang, updateLang] = useState<Language>("tr");
  const [theme, updateTheme] = useState<Theme>("dark");
  useEffect(() => {
    const sync = () => {
      try {
        updateLang(localStorage.getItem("saybir-lang") === "en" ? "en" : "tr");
        const saved = localStorage.getItem("saybir-theme");
        updateTheme(saved === "light" || saved === "mono" ? "light" : "dark");
      } catch { /* Preferences still work when storage is unavailable. */ }
    };
    sync();
    setReady(true);
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => { if (ready) document.documentElement.lang = lang; }, [lang, ready]);
  useEffect(() => { if (ready) document.documentElement.dataset.theme = theme; }, [theme, ready]);
  const setLang = (value: Language) => {
    updateLang(value);
    try { localStorage.setItem("saybir-lang", value); } catch { /* Optional persistence. */ }
  };
  const setTheme = (value: Theme) => {
    updateTheme(value);
    try { localStorage.setItem("saybir-theme", value); } catch { /* Optional persistence. */ }
  };
  return <PreferencesContext.Provider value={{ lang, theme, setLang, setTheme }}>{children}</PreferencesContext.Provider>;
}

export function useSitePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("Site preferences must be used inside SitePreferences");
  return value;
}

export function PreferenceControls() {
  const { lang, theme, setLang, setTheme } = useSitePreferences();
  const languageLabel = lang === "tr" ? "Switch to English" : "Türkçeye geç";
  const themeLabel = lang === "tr"
    ? (theme === "dark" ? "Beyaz temaya geç" : "Siyah temaya geç")
    : (theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  return <div className="pref-controls" role="group" aria-label={lang === "tr" ? "Dil ve tema" : "Language and theme"}>
    <button type="button" onClick={() => setLang(lang === "tr" ? "en" : "tr")} aria-label={languageLabel} title={languageLabel}>{lang.toUpperCase()}</button>
    <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={themeLabel} title={themeLabel} aria-pressed={theme === "light"}><span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span></button>
  </div>;
}
