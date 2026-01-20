import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Võ Đặng | Portfolio",
  description: "Fullstack Developer chuyên về Next.js và React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LazyMotion features={domAnimation}>
              <Navbar />
              {children}
            </LazyMotion>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
