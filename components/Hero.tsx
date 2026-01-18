"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px] dark:bg-blue-900/20" />

      <div className="container mx-auto px-6 relative h-100 flex items-center justify-center">
        <motion.div
          layout
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-16 w-full max-w-6xl"
        >
          {/* --- CỘT TRÁI (Tên & Title) --- */}
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
            {/* Vùng chứa Tên */}
            <div className="overflow-hidden">
              <motion.div variants={upperVariants} initial="hidden" animate="visible" layout>
                <motion.h2
                  layout
                  className="mb-2 text-xl font-medium tracking-[0.2em] text-blue-600 uppercase dark:text-blue-400"
                >
                  Xin chào, mình tên là
                </motion.h2>
                <motion.h1
                  layout
                  className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl pb-2 whitespace-nowrap"
                >
                  <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
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
                      className="h-1 w-full max-w-2xl bg-blue-500 dark:bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vùng chứa Title */}
            <div className="overflow-hidden">
              <motion.div variants={lowerVariants} initial="hidden" animate="visible" layout>
                <motion.p
                  layout
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300 md:text-4xl pt-2 whitespace-nowrap"
                >
                  Kỹ sư phần mềm
                </motion.p>
              </motion.div>
            </div>

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
                    className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white dark:bg-white dark:text-black shadow-lg hover:scale-105 transition-transform"
                  >
                    Dự án của mình
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
                className="w-full md:max-w-md flex flex-col space-y-8 p-6 border-l border-gray-200 dark:border-neutral-800"
              >
                <div>
                  <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Học vấn</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Tốt nghiệp loại Giỏi ngành Công nghệ thông tin <br />
                    <span className="text-black dark:text-white font-medium">Trường Đại học Công nghệ (VNU-UET)</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Mục tiêu</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                    Xây dựng những sản phẩm công nghệ có giá trị thực tế cao và trải nghiệm người dùng tối ưu.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Next.js", "TypeScript", "Node.js", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-neutral-900 rounded-lg text-sm font-medium"
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
        <div className="h-10 w-6 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
