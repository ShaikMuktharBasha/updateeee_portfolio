import React from 'react';
import { ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import GradientASCII from './GradientASCII';

interface HeroProps {
  onOpenResume: () => void;
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, darkMode = false }) => {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 overflow-hidden">
      {/* Ambient WebGL ASCII Background Effect (React Bits) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" 
        aria-hidden="true"
      >
        <div className="w-full h-full opacity-75 dark:opacity-85">
          <GradientASCII
            colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={22}
            density={0.5}
            glyphOpacity={darkMode ? 0.85 : 0.65}
            gradientOpacity={darkMode ? 0.85 : 0.55}
            glow={darkMode ? 0.25 : 0.12}
            speed={1}
            lightMode={!darkMode}
            mouseInteraction={true}
            clickEffect="wave"
          />
        </div>

        {/* Soft left gradient wash so headline & text remain 100% crisp & unpolluted */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent dark:from-[#111214] dark:via-[#111214]/80 dark:to-transparent pointer-events-none" />

        {/* Top fade to prevent any ASCII bleed into the sticky navbar */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAFAF8] dark:from-[#111214] to-transparent pointer-events-none" />

        {/* Soft bottom edge fade transitioning into About section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAFAF8] dark:from-[#111214] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Grid: Info Left, Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 lg:mb-12">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#E8E8E5] dark:border-[#272A2E] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C] shadow-2xs mb-3.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Small Intro Label */}
            <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold mb-2.5">
              HELLO, I'M MUKTHAR
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] leading-[1.12] mb-4">
              Building thoughtful<br />
              <span className="text-[#526B83] dark:text-[#8FA8C0]">digital experiences.</span>
            </h1>

            {/* Lead Description */}
            <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] font-normal leading-relaxed max-w-xl mb-6">
              I'm a Computer Science student and full-stack developer passionate about building useful applications, intelligent systems, and seamless digital experiences.
            </p>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Primary: View My Work */}
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] text-white hover:bg-black dark:bg-[#EDEDEC] dark:text-[#171717] dark:hover:bg-white text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs hover:border-[#526B83]/60 text-[#171717] dark:text-[#EDEDEC] text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-[#526B83] dark:text-[#768FA6]" />
                <span>Resume</span>
              </button>

              <div className="h-5 w-px bg-[#E8E8E5] dark:bg-[#272A2E] hidden sm:block mx-0.5" />

              {/* Social Links Group (kept together so neither wraps alone) */}
              <div className="flex items-center gap-2">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukthar's GitHub Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukthar's LinkedIn Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: User Portrait (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[330px]">
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
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                  {/* Floating Pill Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-white/95 dark:bg-[#161719]/95 backdrop-blur-md border border-[#E8E8E5]/80 dark:border-[#2A2E33]/80 shadow-md">
                    <div className="flex items-center gap-2 overflow-hidden">
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
        <div className="pt-6 border-t border-[#E8E8E5] dark:border-[#272A2E] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">University</div>
            <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-0.5">KL University</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">B.Tech CSE (2022–2026)</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Specialization</div>
            <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-0.5">Full-Stack & Applied AI</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">React, Python, Cloud, RAG</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Featured Work</div>
            <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-0.5">9 Deployed Projects</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">Live Web & Streamlit apps</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">Credentials</div>
            <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-0.5">4 Industry Certifications</div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">Azure, AWS, MongoDB, IBM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
