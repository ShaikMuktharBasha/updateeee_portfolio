import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'Full-Stack', 'Systems & Tools'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
              Portfolio & Engineering Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
              Selected Projects.
            </h2>
            <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl">
              An editorial selection of nine production applications, intelligent systems, and developer tools built with modern frontend and backend architectures.
            </p>
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] w-fit">
            {categories.map((category) => {
              const count = category === 'All' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    isActive
                      ? 'bg-[#171717] text-white dark:bg-[#EDEDEC] dark:text-[#171717] shadow-xs'
                      : 'text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-[#EDEDEC]'
                  }`}
                >
                  {category} <span className="text-[10px] opacity-70 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 pt-8 border-t border-[#E8E8E5] dark:border-[#272A2E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] dark:text-[#9E9E9C] gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#526B83]" />
            <span>All projects feature live production deployments and verified repository links.</span>
          </div>
          <span className="font-mono">9 of 9 Projects Displayed</span>
        </div>
      </div>
    </section>
  );
};

