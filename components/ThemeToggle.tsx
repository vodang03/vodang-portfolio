"use client";

import { useTheme } from "next-themes";
import { useEffect, useSyncExternalStore } from "react";

// Hàm kiểm tra xem chúng ta đang ở client hay server
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) return <div className="p-5" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
