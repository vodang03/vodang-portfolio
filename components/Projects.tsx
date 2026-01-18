"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề phần Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Chỉ chạy hiệu ứng 1 lần khi cuộn tới
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold md:text-5xl tracking-tight">
            Dự án <span className="text-blue-500">tiêu biểu</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg">
            Dưới đây là một số dự án Full-stack mình đã thực hiện, thể hiện tư duy thiết kế hệ thống và kỹ năng lập
            trình.
          </p>
        </motion.div>

        {/* Lưới hiển thị các Card (The Parent Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Delay tăng dần để các thẻ hiện ra tuần tự (Stagger effect)
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
