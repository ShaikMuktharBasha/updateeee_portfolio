import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
          : 'opacity-0 pointer-events-none translate-y-4 scale-90'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title={`Scroll to top (${Math.round(scrollProgress)}%)`}
        className="relative group p-2.5 rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-md text-[#171717] dark:text-[#EDEDEC] shadow-md hover:border-[#526B83] dark:hover:border-[#768FA6] hover:text-[#1e3fd8] dark:hover:text-[#38bdf8] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
      >
        {/* Dynamic SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none w-full h-full p-0.5"
          viewBox="0 0 44 44"
        >
          {/* Track */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="text-[#E8E8E5]/50 dark:text-[#272A2E]/50"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Progress Path */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="text-[#1e3fd8] dark:text-[#38bdf8] transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 relative z-10" />

        {/* Dynamic Percentage Tooltip on Hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 rounded-md bg-[#171717] dark:bg-[#EDEDEC] text-white dark:text-[#171717] text-[11px] font-mono shadow-md whitespace-nowrap translate-x-1 group-hover:translate-x-0">
          Top • {Math.round(scrollProgress)}%
        </div>
      </button>
    </div>
  );
};
