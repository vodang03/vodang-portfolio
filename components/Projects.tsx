"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 bg-background transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề phần Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold md:text-5xl tracking-tight text-foreground">
            {dict.projects_section.title_normal}{" "}
            <span className="text-primary">{dict.projects_section.title_highlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-lg">{dict.projects_section.description}</p>
        </motion.div>

        {/* Lưới hiển thị các Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
