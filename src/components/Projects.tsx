import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categories = ['All', 'AI & ML', 'Full-Stack', 'Systems & Tools'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesTech = !selectedTech || p.technologies.includes(selectedTech);
    return matchesCategory && matchesTech;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
              Portfolio & Engineering Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
              Selected Projects.
            </h2>
            <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl">
              An editorial selection of nine production applications, intelligent systems, and developer tools built with modern frontend and backend architectures. Click any tech badge to filter by stack.
            </p>
          </motion.div>

          {/* Minimal Category Tabs with Animated Sliding Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] w-fit"
          >
            {categories.map((category) => {
              const count = category === 'All' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#171717] dark:bg-[#EDEDEC] rounded-md shadow-xs"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? 'text-white dark:text-[#171717] font-semibold'
                        : 'text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-[#EDEDEC]'
                    }`}
                  >
                    {category} <span className="text-[10px] opacity-75 font-mono">({count})</span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Active Technology Stack Filter Pill */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              className="flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-[#1e3fd8] dark:text-[#38bdf8] w-fit shadow-2xs"
            >
              <span className="font-mono text-[11px]">Filtered by stack:</span>
              <span className="font-semibold">{selectedTech}</span>
              <button
                onClick={() => setSelectedTech(null)}
                className="p-1 rounded-full hover:bg-sky-200/50 dark:hover:bg-sky-900/50 transition-colors cursor-pointer ml-1"
                title="Clear filter"
                aria-label="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Two-Column Editorial Project Grid with Smooth Reorder Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                selectedTech={selectedTech}
                onSelectTech={(tech) => setSelectedTech(prev => prev === tech ? null : tech)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-14 pt-8 border-t border-[#E8E8E5] dark:border-[#272A2E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] dark:text-[#9E9E9C] gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#526B83]" />
            <span>All projects feature live production deployments and verified repository links.</span>
          </div>
          <span className="font-mono">{filteredProjects.length} of {PROJECTS_DATA.length} Projects Displayed</span>
        </div>
      </div>
    </section>
  );
};
