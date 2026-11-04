import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  CheckCircle 
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Languages': Code,
  'Frontend': Layout,
  'Backend': Server,
  'Databases': Database,
  'Cloud & DevOps': Cloud,
  'AI / ML': Cpu
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
            Technical Competencies & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
            Technologies I work with.
          </h2>
          <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl">
            A comprehensive, clean overview of programming languages, frameworks, cloud infrastructure, and AI architectures applied across my projects.
          </p>
        </div>

        {/* Categorized Layout - Modern Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code;

            return (
              <div
                key={cat.category}
                className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] flex flex-col justify-between hover:border-[#526B83]/40 transition-colors shadow-2xs"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 pb-4 border-b border-[#E8E8E5] dark:border-[#272A2E]">
                    <div className="p-2 rounded-lg bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#768FA6]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">
                        {cat.skills.length} core tools
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#737373] dark:text-[#9E9E9C] py-3.5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List with Clean Typography & Badges (No percentage bars!) */}
                  <div className="space-y-2 mt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-baseline justify-between p-2 rounded-md bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5]/70 dark:border-[#2A2E33]/70 hover:border-[#526B83]/30 transition-colors"
                      >
                        <span className="text-xs font-semibold text-[#171717] dark:text-[#EDEDEC] flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#526B83] dark:bg-[#768FA6]" />
                          )}
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-[#737373] dark:text-[#9E9E9C] text-right truncate max-w-[170px]">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 flex items-center justify-between text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C]">
                  <span>Status: Production Verified</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#526B83] dark:text-[#768FA6]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

