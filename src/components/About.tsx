import React from 'react';
import { GraduationCap, Code2, Cpu, Cloud, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const technicalInterests = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      desc: 'Developing scalable, modern web applications with React, TypeScript, Node.js, and Spring Boot with clean component boundaries.'
    },
    {
      icon: Cpu,
      title: 'Applied AI & RAG Systems',
      desc: 'Designing Retrieval-Augmented Generation workflows, semantic vector retrieval with FAISS, and custom LLM agent integrations.'
    },
    {
      icon: Cloud,
      title: 'Backend & Cloud Deployments',
      desc: 'Architecting RESTful services, MySQL/MongoDB schemas, Dockerized containers, and deployments on AWS and Azure.'
    },
    {
      icon: Compass,
      title: 'Human-Centered Software',
      desc: 'Committed to solving real-world educational and operational problems through software that feels natural, fast, and reliable.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
            Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
            A little about me.
          </h2>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#737373] dark:text-[#9E9E9C] font-normal leading-relaxed">
            <p>
              I am a Computer Science student at <strong className="text-[#171717] dark:text-[#EDEDEC] font-semibold">KL University</strong>, where I combine theoretical computing foundations with hands-on full-stack development and applied machine learning.
            </p>
            <p>
              My engineering philosophy revolves around clarity: writing software that is dependable, performant, and thoughtfully structured. Whether I am architecting a zero-trust verification protocol, fine-tuning a semantic search index for a RAG chatbot, or designing an adaptive educational pathway algorithm for national challenges like HCLTech Amplified, I look for elegance in both the codebase and the user experience.
            </p>
            <p>
              Beyond the browser, I am deeply invested in backend reliability, cloud infrastructure on AWS and Azure, and exploring how generative AI models can automate complex domain knowledge retrieval.
            </p>

            {/* Quick bullets */}
            <div className="pt-3 space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-[#171717] dark:text-[#EDEDEC]">
                <CheckCircle2 className="w-4 h-4 text-[#526B83] dark:text-[#768FA6] shrink-0 mt-0.5" />
                <span>Pursuing Bachelor of Technology in Computer Science & Engineering (Class of 2026).</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#171717] dark:text-[#EDEDEC]">
                <CheckCircle2 className="w-4 h-4 text-[#526B83] dark:text-[#768FA6] shrink-0 mt-0.5" />
                <span>Certified in Azure Fundamentals (AZ-900), AWS Cloud Practitioner, MongoDB, and IBM AI.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#171717] dark:text-[#EDEDEC]">
                <CheckCircle2 className="w-4 h-4 text-[#526B83] dark:text-[#768FA6] shrink-0 mt-0.5" />
                <span>Passionate about building production-grade software that solves genuine user pain points.</span>
              </div>
            </div>
          </div>

          {/* Compact Education Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] shadow-xs">
              <div className="flex items-center gap-3 pb-5 border-b border-[#E8E8E5] dark:border-[#272A2E]">
                <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#768FA6]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C] block">
                    Education
                  </span>
                  <h3 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC]">
                    {EDUCATION_DATA.institution}
                  </h3>
                </div>
              </div>

              <div className="py-4 space-y-1">
                <div className="text-xs font-mono text-[#526B83] dark:text-[#768FA6] font-medium">
                  {EDUCATION_DATA.period} • {EDUCATION_DATA.location}
                </div>
                <div className="text-sm font-medium text-[#171717] dark:text-[#EDEDEC]">
                  {EDUCATION_DATA.degree}
                </div>
                <div className="text-xs text-[#737373] dark:text-[#9E9E9C]">
                  Department of {EDUCATION_DATA.field}
                </div>
                {EDUCATION_DATA.grade && (
                  <div className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">
                    Academic Standing: {EDUCATION_DATA.grade}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E8E8E5] dark:border-[#272A2E]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C] mb-2">
                  Academic Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-[#737373] dark:text-[#9E9E9C] leading-relaxed">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#526B83] select-none font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Interests Sub-grid */}
        <div className="mt-16 pt-12 border-t border-[#E8E8E5] dark:border-[#272A2E]">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#526B83] dark:text-[#768FA6] font-semibold mb-6">
            Core Engineering Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalInterests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="p-5 rounded-lg bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] hover:border-[#526B83]/40 transition-colors"
                >
                  <div className="p-2 w-fit rounded bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#768FA6] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mb-1.5">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-[#737373] dark:text-[#9E9E9C] leading-relaxed">
                    {interest.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

