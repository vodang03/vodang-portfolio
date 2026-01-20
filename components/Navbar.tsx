"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="w-9 h-9" />,
});

const Navbar = () => {
  const { dict } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm border-b border-border"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground transition-opacity hover:opacity-80"
        >
          PORTFOLIO<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {dict.nav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center pl-6 border-l border-border">
            <ThemeToggle />
          </div>
          <div className="flex items-center pl-6 border-l border-border">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
