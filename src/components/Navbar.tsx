import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF8]/95 dark:bg-[#0F1012]/95 backdrop-blur-md border-b border-[#E8E8E5] dark:border-[#23262A] py-3.5 shadow-xs'
          : 'bg-[#FAFAF8]/80 dark:bg-[#0F1012]/80 backdrop-blur-md border-b border-[#E8E8E5]/50 dark:border-[#23262A]/50 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group flex items-center gap-1 text-base sm:text-lg font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] select-none"
        >
          <span>MUKTHAR</span>
          <span className="text-[#526B83] dark:text-[#38bdf8] transition-transform duration-200 group-hover:scale-125 inline-block">.</span>
        </a>

        {/* Center / Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-[#4B5563] dark:text-[#EDEDEC] hover:text-[#171717] dark:hover:text-white transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons: Resume & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Resume Action */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] hover:border-[#526B83]/50 text-[#171717] dark:text-[#EDEDEC] transition-all hover:shadow-xs active:scale-95"
            title="View & Download Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-[#526B83] dark:text-[#768FA6]" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white transition-all active:scale-90"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#526B83] transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-[#E8E8E5] dark:border-[#2A2E33] text-[#737373] dark:text-[#9E9E9C]"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#526B83]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-md border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAFAF8] dark:bg-[#141518] border-b border-[#E8E8E5] dark:border-[#23262A] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-[#EDEDEC] py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8E8E5] dark:border-[#23262A]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-md bg-[#171717] dark:bg-white text-white dark:text-[#171717]"
              >
                <FileDown className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

