import english from "./en.json";
import turkish from "./tr.json";

const dictionaries: Record<"tr" | "en", Record<string, string>> = { tr: turkish, en: english };
export function translate(text: string, language: "tr" | "en") {
  const key = text.replace(/\s+/g, " ").trim();
  const result = dictionaries[language][key];
  if (result === undefined) return text;
  // Preserve explicit spacing around inline links, names and emphasis.
  return (text.match(/^\s+/)?.[0] ?? "") + result + (text.match(/\s+$/)?.[0] ?? "");
}
