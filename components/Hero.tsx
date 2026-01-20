"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { dict } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const lineVariants: Variants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: ["0%", "100%", "100%", "0%"],
      opacity: [1, 1, 1, 0],
      transition: {
        duration: 2.5,
        times: [0, 0.2, 0.3, 0.5],
        ease: "easeInOut",
      },
    },
  };

  const upperVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeOut" } },
  };

  const lowerVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Background glow: Tinh chỉnh màu glow cho từng chế độ */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative h-100 flex items-center justify-center">
        <motion.div
          layout
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-16 w-full max-w-6xl"
        >
          {/* --- CỘT TRÁI --- */}
          <motion.div
            layout
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col shrink-0 z-10"
            style={{
              minWidth: "300px",
              alignItems: isExpanded ? "flex-start" : "center",
              textAlign: isExpanded ? "left" : "center",
            }}
          >
            {/* Tên */}
            <div className="overflow-hidden">
              <motion.div variants={upperVariants} initial="hidden" animate="visible" layout>
                <motion.h2 layout className="mb-2 text-xl font-medium tracking-[0.2em] text-primary uppercase">
                  {dict.hero.greeting}
                </motion.h2>
                <motion.h1
                  layout
                  className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl pb-4 whitespace-nowrap"
                >
                  <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-teal-200 drop-shadow-sm">
                    Võ Đặng
                  </span>
                </motion.h1>
              </motion.div>
            </div>

            {/* Đường gạch trung tâm */}
            <div className="w-full h-5 flex items-center justify-center relative overflow-hidden">
              <AnimatePresence>
                {!isExpanded && (
                  <motion.div
                    key="central-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="w-full flex justify-center"
                  >
                    <motion.div
                      className="h-1 w-full max-w-2xl bg-primary shadow-[0_0_15px_var(--color-primary)]"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chức danh */}
            <div className="overflow-hidden">
              <motion.div variants={lowerVariants} initial="hidden" animate="visible" layout>
                <motion.p layout className="text-2xl font-bold text-foreground/90 md:text-4xl pt-2 whitespace-nowrap">
                  {dict.hero.role}
                </motion.p>
              </motion.div>
            </div>

            {/* Nút CTA */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href="#projects"
                    className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-blue-500/20 hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-400 transition-all"
                  >
                    {dict.hero.cta}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* --- CỘT PHẢI (Bio) --- */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="w-full md:max-w-md flex flex-col space-y-8 p-6 border-l-2 border-border"
              >
                {/* Khối Học vấn */}
                <div>
                  <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                    {dict.hero.education_title}
                  </h3>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-foreground font-bold text-lg block">{dict.hero.education_school}</span>
                      <span className="text-muted-foreground text-sm block font-medium">
                        {dict.hero.education_major}
                      </span>
                    </div>
                    {/* Badge GPA */}
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-bold px-2 py-1 rounded">
                      GPA: 3.5
                    </span>
                  </div>
                </div>

                {/* Khối Định hướng */}
                <div>
                  <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                    {dict.hero.orientation_title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {dict.hero.orientation_desc_1}{" "}
                    <strong className="text-foreground font-semibold">{dict.hero.orientation_desc_highlight_1}</strong>{" "}
                    {dict.hero.orientation_desc_2}{" "}
                    <span className="italic text-foreground/80">{dict.hero.orientation_desc_italic}</span>.
                    <br className="mb-2 block" />
                    {dict.hero.orientation_desc_3}{" "}
                    <strong className="text-foreground">{dict.hero.orientation_desc_highlight_2}</strong>,{" "}
                    {dict.hero.orientation_desc_4}
                  </p>
                </div>

                {/* Khối Skills */}
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Node.js", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      // Card skill tự động đổi màu nền và viền
                      className="px-3 py-1 bg-card border border-border rounded text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll icon */}
      <motion.div
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
