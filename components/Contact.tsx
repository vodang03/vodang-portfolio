"use client";

import { HiOutlineChevronUp } from "react-icons/hi";
import { SOCIALS } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-black text-white pt-16 font-sans border-t border-white/10">
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter uppercase">VÕ ĐẶNG</h2>
              <p className="max-w-xs text-zinc-400 text-sm leading-relaxed">{dict.footer.bio}</p>
            </div>

            <div className="flex gap-6 text-xl text-zinc-400">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 border border-white/40 px-4 py-2 w-fit hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest"
            >
              <HiOutlineChevronUp className="text-base" />
              {dict.footer.back_to_top}
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">{dict.footer.sitemap_title}</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-zinc-400 text-sm">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#F5A623] py-3 text-center px-4">
        <p className="text-black text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em]">
          {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
