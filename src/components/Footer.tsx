import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E8E8E5] dark:border-[#272A2E] bg-[#FAFAF8] dark:bg-[#111214] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Built by Mukthar */}
        <div className="flex items-center gap-3 text-[#737373] dark:text-[#9E9E9C]">
          <span className="font-medium text-[#171717] dark:text-[#EDEDEC]">
            Designed & built by Mukthar.
          </span>
          <span>•</span>
          <span className="font-mono">© {currentYear}</span>
        </div>

        {/* Right: GitHub | LinkedIn | Email */}
        <div className="flex items-center gap-5 text-[#737373] dark:text-[#9E9E9C]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>/</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors flex items-center gap-1.5"
          >
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 rounded border border-[#E8E8E5] dark:border-[#2A2E33] hover:bg-white dark:hover:bg-[#1E2024] text-[#737373] hover:text-[#171717] dark:hover:text-white transition-colors ml-2 cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
