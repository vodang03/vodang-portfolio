"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DICTIONARY } from "@/constants";

type Language = "vi" | "en";
type DictionaryType = typeof DICTIONARY.vi;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  dict: DictionaryType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");

  const toggleLang = () => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, dict: DICTIONARY[lang] }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
