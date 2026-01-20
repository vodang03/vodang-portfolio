"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiFramer,
  SiReact,
} from "react-icons/si";

const SKILLS = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", activeClass: "text-foreground" },
  { name: "React", icon: <SiReact />, color: "#61DAFB", activeClass: "text-[#61DAFB]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", activeClass: "text-[#3178C6]" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", activeClass: "text-[#06B6D4]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", activeClass: "text-[#339933]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", activeClass: "text-[#4169E1]" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED", activeClass: "text-[#2496ED]" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF", activeClass: "text-[#0055FF]" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Cấu hình kích thước cho Carousel (băng chuyền)
  const ITEM_WIDTH = 80; // Chiều rộng cơ bản của icon
  const GAP = 50; // Khoảng cách giữa các icon
  const TOTAL_WIDTH = ITEM_WIDTH + GAP;

  return (
    <section id="skills" className="py-14 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-4xl mb-4 text-foreground">Kỹ năng chuyên môn</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto justify-items-center z-10">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, stiffness: 100 }}
                onMouseEnter={() => {
                  setHoveredSkill(skill.name);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative flex items-center justify-center 
                      w-24 h-24 md:w-28 md:h-28 rounded-full 
                      bg-card border transition-all cursor-pointer shadow-sm
                      ${
                        hoveredSkill === skill.name
                          ? "shadow-md scale-105" // Bỏ border cứng ở đây, xử lý style inline hoặc class động bên dưới
                          : "border-border"
                      }`}
                style={{
                  borderColor: hoveredSkill === skill.name ? skill.color : "",
                }}
              >
                <span
                  className={`font-semibold text-xs md:text-sm text-center px-1 transition-colors ${
                    hoveredSkill === skill.name ? "" : "text-muted-foreground"
                  }`}
                  style={{ color: hoveredSkill === skill.name ? skill.color : "" }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* --- CỘT PHẢI: CAROUSEL ICON (Màn hình hiển thị) --- */}
          <div className="flex-1 w-full flex justify-center items-center h-50 relative">
            {/* Lớp phủ Gradient tạo hiệu ứng "Rèm che" 2 bên */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-r from-background via-transparent to-background w-full" />

            {/* Container chứa dải icon trượt */}
            <div className="relative w-full max-w-100 flex justify-center items-center overflow-hidden h-full">
              <motion.div
                // ANIMATION CHÍNH: Lướt dải icon sang trái/phải
                // Công thức: Dịch chuyển ngược chiều kim đồng hồ dựa trên index active
                animate={{ x: -activeIndex * TOTAL_WIDTH }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center absolute left-1/2" // Bắt đầu từ giữa màn hình
                style={{ x: "-50%" }} // Căn chỉnh lại offset CSS ban đầu
              >
                {SKILLS.map((skill, index) => {
                  // Tính khoảng cách từ icon này đến icon đang active
                  // distance = 0 nghĩa là icon đang ở giữa
                  // distance = 1 nghĩa là icon ngay bên cạnh
                  const distance = Math.abs(index - activeIndex);
                  const isActive = distance === 0;

                  return (
                    <motion.div
                      key={skill.name}
                      // ANIMATION PHỤ: Scale và Opacity dựa trên khoảng cách
                      animate={{
                        scale: distance === 0 ? 1.8 : distance === 1 ? 1 : 0.5, // Giữa to nhất (1.5), cạnh vừa (1), xa nhỏ (0.5)
                        opacity: distance >= 2 ? 0 : 1 - distance * 0.3, // Xa quá 2 ô thì ẩn hẳn (0)
                        filter: distance > 0 ? "blur(2px)" : "blur(0px)", // Xa thì mờ đi chút
                        zIndex: distance === 0 ? 10 : 0, // Cái ở giữa luôn đè lên trên
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      style={{ width: ITEM_WIDTH, marginRight: index === SKILLS.length - 1 ? 0 : GAP }}
                      className="shrink-0 flex items-center justify-center"
                    >
                      <div className="p-4 rounded-2xl bg-card border border-border shadow-2xl">
                        {isActive && (
                          <div
                            className="absolute inset-0 rounded-3xl opacity-40 blur-xl transition-colors duration-500"
                            style={{ backgroundColor: skill.color }}
                          />
                        )}

                        <div
                          className={`text-5xl md:text-6xl transition-colors duration-300 ${
                            isActive ? skill.activeClass : "text-muted-foreground opacity-20"
                          }`}
                        >
                          {skill.icon}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
