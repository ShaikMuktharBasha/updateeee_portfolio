import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GradientASCII } from './GradientASCII';
import { ScrambleText } from './ScrambleText';

// Animated Number Counter Component
const CountUpNumber: React.FC<{ target: number }> = ({ target }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 40;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{val}</span>;
};

interface HeroProps {
  onOpenResume: () => void;
  darkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, darkMode = false }) => {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Perspective Tilt on Portrait Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 220, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-8deg', '8deg']);

  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handlePortraitMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative isolate pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 overflow-hidden">
      {/* Ambient WebGL ASCII Background Effect (React Bits) - Earlier full blue effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" 
        aria-hidden="true"
      >
        <div className="w-full h-full opacity-85 dark:opacity-90">
          <GradientASCII
            colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
            shape="horizon"
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
        {/* Main Grid: Info Left, Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 lg:mb-12">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#E8E8E5] dark:border-[#272A2E] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C] shadow-2xs mb-3.5 w-fit group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="relative z-10">{PERSONAL_INFO.status}</span>
              {/* Subtle ambient border pulse */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-emerald-500/20 dark:border-emerald-400/25 pointer-events-none"
              />
            </motion.div>

            {/* Small Intro Label with Cyber ASCII Scramble */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold mb-2.5"
            >
              <ScrambleText text="HELLO, I'M MUKTHAR" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] leading-[1.12] mb-4"
            >
              Building thoughtful<br />
              <span className="text-[#526B83] dark:text-[#8FA8C0] bg-gradient-to-r from-[#1e3fd8] via-[#38bdf8] to-[#1e3fd8] dark:from-[#38bdf8] dark:via-[#a5d8ff] dark:to-[#38bdf8] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer inline-block">
                digital experiences.
              </span>
            </motion.h1>

            {/* Lead Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] font-normal leading-relaxed max-w-xl mb-6"
            >
              I'm a Computer Science student and full-stack developer passionate about building useful applications, intelligent systems, and seamless digital experiences.
            </motion.p>

            {/* CTAs and Social Links (All placed cleanly on one line) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {/* Primary: View My Work with Spring Lift */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] text-white hover:bg-black dark:bg-[#EDEDEC] dark:text-[#171717] dark:hover:bg-white text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-98 cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </motion.button>

              {/* Download Resume with Spring Lift */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs hover:border-[#526B83]/60 text-[#171717] dark:text-[#EDEDEC] text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-[#526B83] dark:text-[#768FA6]" />
                <span>Resume</span>
              </motion.button>

              <div className="h-5 w-px bg-[#E8E8E5] dark:bg-[#272A2E] hidden sm:block mx-0.5" />

              {/* Social Links Group (Kept together so neither wraps alone) */}
              <div className="flex items-center gap-2">
                {/* GitHub */}
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukthar's GitHub Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukthar's LinkedIn Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: User Portrait (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end [perspective:1000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[330px]"
            >
              {/* Editorial Frame with 3D Parallax Tilt */}
              <motion.div
                onMouseMove={handlePortraitMouseMove}
                onMouseLeave={handlePortraitMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-2xl bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-xs p-2.5 sm:p-3 border border-[#E8E8E5] dark:border-[#272A2E] shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div 
                  className="overflow-hidden rounded-xl aspect-[4/5] relative bg-[#FAFAF8] dark:bg-[#141517]"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <img
                    src="/mukthar.jpg"
                    alt="Shaik Mukthar Basha — Computer Science Engineer & Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom for floating badge */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                  {/* Floating Pill Badge with 3D Depth */}
                  <div 
                    style={{ transform: 'translateZ(30px)' }}
                    className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-white/95 dark:bg-[#161719]/95 backdrop-blur-md border border-[#E8E8E5]/80 dark:border-[#2A2E33]/80 shadow-md"
                  >
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

                {/* Interactive Dynamic Glare Sheen */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                  style={{
                    background: 'radial-gradient(380px circle at 50% 20%, rgba(255, 255, 255, 0.16), transparent 70%)',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Editorial Metrics Banner with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="pt-6 border-t border-[#E8E8E5] dark:border-[#272A2E] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
        >
          {[
            { label: 'University', title: 'KL University', count: null, desc: 'B.Tech CSE (2022–2026)' },
            { label: 'Specialization', title: 'Full-Stack & Applied AI', count: null, desc: 'React, Python, Cloud, RAG' },
            { label: 'Featured Work', title: 'Deployed Projects', count: 9, desc: 'Live Web & Streamlit apps' },
            { label: 'Credentials', title: 'Industry Certifications', count: 4, desc: 'Azure, AWS, MongoDB, IBM' }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C]">{item.label}</div>
              <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDEC] mt-0.5">
                {item.count !== null ? (
                  <>
                    <CountUpNumber target={item.count} /> {item.title}
                  </>
                ) : (
                  item.title
                )}
              </div>
              <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
