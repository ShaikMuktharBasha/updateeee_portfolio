import React, { useState } from 'react';
import { ArrowDown, FileDown, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import GradientASCII from './GradientASCII';

interface HeroProps {
  onOpenResume: () => void;
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, darkMode = false }) => {
  const [asciiShape, setAsciiShape] = useState<'horizon' | 'pinch' | 'rise' | 'eclipse'>('horizon');

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient WebGL ASCII Background Effect (React Bits) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" 
        aria-hidden="true"
      >
        <div className="w-full h-full opacity-85 dark:opacity-90">
          <GradientASCII
            colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
            shape={asciiShape}
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            glyphOpacity={0.85}
            gradientOpacity={0.85}
            glow={0.3}
            speed={1}
            lightMode={!darkMode}
            mouseInteraction={true}
            clickEffect="wave"
          />
        </div>

        {/* Soft bottom edge fade so it transitions into the about section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAF8] dark:from-[#111214] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Status Bar: Availability & ASCII Shape Controller */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#E8E8E5] dark:border-[#272A2E] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C] shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Interactive ASCII Shape Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-md border border-[#E8E8E5] dark:border-[#272A2E] text-[10px] font-mono shadow-xs">
            <span className="pl-2 pr-1 text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#526B83]" /> ASCII:
            </span>
            {(['horizon', 'pinch', 'rise', 'eclipse'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setAsciiShape(s)}
                className={`px-2 py-0.5 rounded-full capitalize transition-all cursor-pointer ${
                  asciiShape === s
                    ? 'bg-[#171717] text-white dark:bg-[#EDEDEC] dark:text-[#171717] font-semibold'
                    : 'text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-white'
                }`}
                title={`Switch background effect to ${s}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Info Left, Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Intro Label */}
            <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold mb-3">
              HELLO, I'M MUKTHAR
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] leading-[1.08] mb-6">
              Building thoughtful<br />
              <span className="text-[#526B83] dark:text-[#8FA8C0]">digital experiences.</span>
            </h1>

            {/* Lead Description */}
            <p className="text-base sm:text-lg text-[#737373] dark:text-[#9E9E9C] font-normal leading-relaxed max-w-xl mb-8">
              I'm a Computer Science student and full-stack developer passionate about building useful applications, intelligent systems, and seamless digital experiences.
            </p>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View My Work */}
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#171717] text-white hover:bg-black dark:bg-[#EDEDEC] dark:text-[#171717] dark:hover:bg-white text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs hover:border-[#526B83]/60 text-[#171717] dark:text-[#EDEDEC] text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" />
                <span>Download Resume</span>
              </button>

              <div className="h-6 w-px bg-[#E8E8E5] dark:bg-[#272A2E] hidden sm:block mx-1" />

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mukthar's GitHub Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mukthar's LinkedIn Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: User Portrait (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Editorial Frame */}
              <div className="relative rounded-2xl bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs p-2.5 sm:p-3 border border-[#E8E8E5] dark:border-[#272A2E] shadow-sm group">
                <div className="overflow-hidden rounded-xl aspect-[4/5] relative bg-[#FAFAF8] dark:bg-[#141517]">
                  <img
                    src="/mukthar.jpg"
                    alt="Shaik Mukthar Basha — Computer Science Engineer & Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom for floating badge */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                  {/* Floating Pill Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-white/95 dark:bg-[#161719]/95 backdrop-blur-md border border-[#E8E8E5]/80 dark:border-[#2A2E33]/80 shadow-md">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                      <div className="truncate">
                        <span className="text-xs font-semibold text-[#171717] dark:text-[#EDEDEC] block truncate">
                          Shaik Mukthar Basha
                        </span>
                        <span className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] block truncate">
                          CSE @ KL University '26
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2D3035] text-[#737373] dark:text-[#9E9E9C] shrink-0">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Metrics Banner */}
        <div className="pt-8 border-t border-[#E8E8E5] dark:border-[#272A2E] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">University</div>
            <div className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-1">KL University</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">B.Tech CSE (2022–2026)</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Specialization</div>
            <div className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-1">Full-Stack & Applied AI</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">React, Python, Cloud, RAG</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Featured Work</div>
            <div className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-1">9 Deployed Projects</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">Live Web & Streamlit apps</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Credentials</div>
            <div className="text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-1">4 Industry Certifications</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">Azure, AWS, MongoDB, IBM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
