import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Magnetic } from './Magnetic';

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E8E8E5] dark:border-[#272A2E] bg-[#FAFAF8] dark:bg-[#111214] text-xs">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left: Built by Mukthar */}
        <div className="flex items-center gap-3 text-[#737373] dark:text-[#9E9E9C]">
          <span className="font-medium text-[#171717] dark:text-[#EDEDEC]">
            Designed & built by Mukthar.
          </span>
          <span>•</span>
          <span className="font-mono">© {currentYear}</span>
        </div>

        {/* Center: Live System Status Beacon & Terminal CLI Trigger */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-2xs font-mono text-[11px] text-[#737373] dark:text-[#CBD5E1]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Status: Optimal • All Systems Live</span>
          </div>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#2A2E33] hover:border-[#38bdf8]/60 shadow-2xs font-mono text-[11px] text-[#737373] dark:text-[#CBD5E1] hover:text-[#171717] dark:hover:text-white transition-all active:scale-95 cursor-pointer"
              title="Open Interactive CLI Terminal (or press ~)"
            >
              <Terminal className="w-3 h-3 text-[#38bdf8]" />
              <span>CLI Terminal</span>
              <kbd className="text-[10px] opacity-60">~</kbd>
            </button>
          )}
        </div>

        {/* Right: GitHub | LinkedIn | Email */}
        <div className="flex items-center gap-5 text-[#737373] dark:text-[#9E9E9C]">
          <Magnetic strength={8}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </Magnetic>
          <span>/</span>
          <Magnetic strength={8}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </Magnetic>
          <span>/</span>
          <Magnetic strength={8}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
            >
              <span>Email</span>
            </a>
          </Magnetic>

          <Magnetic strength={8}>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 rounded border border-[#E8E8E5] dark:border-[#2A2E33] hover:bg-white dark:hover:bg-[#1E2024] text-[#737373] hover:text-[#171717] dark:hover:text-white transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </footer>
  );
};
