"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Projects() {
  const { dict } = useLanguage();

  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: dict.projects_section.tabs.all },
    { id: "company", label: dict.projects_section.tabs.company },
    { id: "personal", label: dict.projects_section.tabs.personal },
  ];

  const filteredProjects = dict.projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-background transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold md:text-5xl tracking-tight text-foreground">
            {dict.projects_section.title_normal}{" "}
            <span className="text-primary">{dict.projects_section.title_highlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-lg">{dict.projects_section.description}</p>
        </motion.div>

        <div className="flex justify-center md:justify-start mb-10">
          <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-5 py-2 text-sm font-semibold rounded-lg transition-colors z-10
                  ${activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"}
                `}
              >
                {tab.label}

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab" // layoutId giúp Framer Motion tự động tính toán vị trí trượt
                    className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">Hiện chưa có dự án nào trong mục này.</div>
        )}
      </div>
    </section>
  );
}
