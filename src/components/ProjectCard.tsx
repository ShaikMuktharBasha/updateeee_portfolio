import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { ProjectPreview } from './ProjectPreviews';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden transition-all duration-300 hover:border-[#526B83]/50 hover:shadow-md"
    >
      {/* Interactive Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 75%)`,
        }}
      />

      {/* Animated Laser Border Beam Orbit */}
      <svg
        className={`pointer-events-none absolute inset-0 w-full h-full rounded-xl z-20 transition-opacity duration-300 ${
          index === 0 ? 'opacity-85 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-85'
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="100%"
          height="100%"
          rx="12"
          fill="none"
          stroke={`url(#border-beam-${index})`}
          strokeWidth="2"
          strokeDasharray="90 340"
          className="animate-border-beam"
        />
        <defs>
          <linearGradient id={`border-beam-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3fd8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* Custom Designed Visual Thumbnail / Preview UI */}
      <div className="relative h-56 sm:h-64 w-full bg-[#FAFAF8] dark:bg-[#131416] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01]">
        <ProjectPreview type={project.previewType} isHovered={isHovered} />

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#1B1D20]/95 backdrop-blur-xs text-[#526B83] dark:text-[#768FA6] border border-[#E8E8E5] dark:border-[#2C3036] shadow-2xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content & Meta */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Tagline & Index */}
          <div className="flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9E9E9C] mb-1.5">
            <span className="text-[#526B83] dark:text-[#768FA6] font-medium tracking-wide">
              {project.tagline}
            </span>
            <span>0{index + 1}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] mb-2.5 flex items-center justify-between">
            <span>{project.title}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live project`}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[#526B83] dark:text-[#768FA6] p-1 hover:scale-110 transform"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#737373] dark:text-[#9E9E9C] leading-relaxed mb-5 font-normal">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Technologies & Links */}
        <div className="pt-4 border-t border-[#E8E8E5] dark:border-[#272A2E]">
          {/* Tech Stack Pills with Micro-Hover Glow */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAFAF8] dark:bg-[#1E2024] text-[#737373] dark:text-[#9E9E9C] border border-[#E8E8E5] dark:border-[#2A2E33] hover:border-[#526B83]/70 hover:text-[#171717] dark:hover:text-[#EDEDEC] hover:bg-white dark:hover:bg-[#25282D] transition-all cursor-default shadow-2xs hover:scale-105 active:scale-95"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] dark:text-[#EDEDEC] hover:text-[#526B83] dark:hover:text-[#768FA6] transition-colors py-1 group/link"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors py-1"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
