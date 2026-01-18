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
      className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* 1. Ảnh dự án với lớp phủ khi Hover */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-6">
          <a
            href={project.github}
            target="_blank"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={project.link}
            target="_blank"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <ExternalLink size={22} />
          </a>
        </div>
      </div>

      {/* 2. Nội dung chi tiết */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>

        <div className="mt-6 space-y-4 grow">
          {/* Nhóm Frontend */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Monitor size={14} />
              <span>Frontend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.frontend.map((item: string) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-[11px] rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Nhóm Backend */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Server size={14} />
              <span>Backend</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.backend.map((item: string) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-[11px] rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/50"
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
