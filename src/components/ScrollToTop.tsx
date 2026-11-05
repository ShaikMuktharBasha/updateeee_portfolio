import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Go to top"
      className={`fixed bottom-6 right-6 z-40 p-2.5 rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white/90 dark:bg-[#18191C]/90 backdrop-blur-md text-[#171717] dark:text-[#EDEDEC] shadow-md hover:border-[#526B83] dark:hover:border-[#768FA6] hover:text-[#526B83] dark:hover:text-[#768FA6] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
          : 'opacity-0 pointer-events-none translate-y-4 scale-90'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
