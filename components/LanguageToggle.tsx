"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="ml-4 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-sm font-bold w-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {lang.toUpperCase()}
    </button>
  );
}
