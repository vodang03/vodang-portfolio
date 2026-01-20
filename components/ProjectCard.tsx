"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Server } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full overflow-hidden rounded-2xl 
                 bg-white dark:bg-card 
                 border border-zinc-200 dark:border-border 
                 shadow-md hover:shadow-xl hover:shadow-primary/10 
                 transition-all duration-300"
    >
      <div className="relative h-52 w-full overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay nút bấm */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all hover:scale-110"
            title="Xem mã nguồn"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-500 hover:text-white transition-all hover:scale-110"
            title="Xem Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Divider */}
        <div className="mt-auto space-y-4 pt-4 border-t border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Monitor size={12} />
              <span>Frontend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.frontend.map((item: string) => (
                <span
                  key={item}
                  className="px-2 py-1 text-[10px] font-semibold rounded 
                             bg-blue-50 text-blue-700 border border-blue-200
                             dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Nhóm Backend */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Server size={12} />
              <span>Backend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.backend.map((item: string) => (
                <span
                  key={item}
                  className="px-2 py-1 text-[10px] font-semibold rounded 
                             bg-emerald-50 text-emerald-700 border border-emerald-200
                             dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
