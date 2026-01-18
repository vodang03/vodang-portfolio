"use client";

import { TIMELINE } from "@/constants";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const LINE_DURATION = 2;

  return (
    <section id="experience" ref={containerRef} className="py-12 bg-white dark:bg-black overflow-hidden">
      <h2 className="text-4xl font-bold mb-10 text-center tracking-tight">Học vấn và kinh nghiệm</h2>

      <div className="container mx-auto px-6 hidden md:block">
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-neutral-800 -translate-y-1/2" />

          {/* Đường thẳng */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: LINE_DURATION, ease: "linear" }}
            style={{ originX: 0 }}
            className="absolute top-1/2 left-0 w-full h-1 bg-blue-600 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          />

          <div className="relative flex justify-between items-center min-h-125 gap-1">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const positionPercent = ((index + 1) / (TIMELINE.length + 1)) * 100;
              const appearanceDelay = (positionPercent / 100) * LINE_DURATION;

              return (
                <div key={index} className="absolute top-1/2 -translate-y-1/2" style={{ left: `${positionPercent}%` }}>
                  {/* Khối thông tin xen kẽ trên dưới */}
                  <motion.div
                    initial={{ opacity: 0, y: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: isEven ? -190 : 30 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: appearanceDelay,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 -translate-x-1/2 w-80 p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-2xl z-30"
                  >
                    {/* Mũi tên trỏ vào đường thẳng */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-neutral-900 border-t border-l border-gray-100 dark:border-neutral-800 rotate-45 
                      ${isEven ? "-bottom-1.5" : "-top-1.5"}`}
                    />

                    <span className="text-blue-600 font-bold text-sm uppercase">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-3">{item.subtitle}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>

                  {/* Nút thắt trên đường thẳng */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: appearanceDelay - 0.2,
                    }}
                    className="relative z-20 w-5 h-5 -translate-x-1/2 bg-blue-600 rounded-full border-4 border-white dark:border-black shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative md:hidden flex flex-col gap-8 ml-4">
        <div className="absolute top-0 left-1.75 w-0.5 h-full bg-gray-100 dark:bg-neutral-800" />

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: LINE_DURATION, ease: "linear" }}
          style={{ originY: 0 }}
          className="absolute top-0 left-1.75 w-0.5 h-full bg-blue-600 z-10"
        />

        {TIMELINE.map((item, index) => (
          <div key={index} className="relative pl-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="absolute top-2 left-2 z-20 w-4 h-4 -translate-x-1/2 bg-blue-600 rounded-full border-2 border-white dark:border-black shadow-md"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
              className="p-5 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-lg"
            >
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{item.year}</span>
              <h3 className="text-base font-bold mt-1 dark:text-white leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-500 font-medium mb-2">{item.subtitle}</p>
              <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-50 dark:border-neutral-800 pt-2 italic">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
