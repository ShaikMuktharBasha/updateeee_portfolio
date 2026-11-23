import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, FileDown, Menu, X, ArrowUpRight, Command, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { isSoundEnabled, toggleSound, playPop, playClick } from '../utils/sound';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
  onOpenShortcuts?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  onToggleTheme, 
  onOpenResume,
  onOpenCommandPalette,
  onOpenShortcuts 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  // Smooth Reading / Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active Section Scrollspy
      const sections = ['hero', 'about', 'projects', 'skills', 'certifications', 'github', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
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
          ? 'bg-[#FAFAF8]/90 dark:bg-[#0F1012]/90 backdrop-blur-md border-b border-[#E8E8E5] dark:border-[#23262A] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Wordmark with Cyber ASCII Scramble */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group flex items-center gap-0.5 text-base sm:text-lg font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] select-none"
        >
          <ScrambleText text="MUKTHAR" className="font-bold tracking-tight" />
          <span className="text-[#526B83] dark:text-[#38bdf8] transition-transform duration-200 group-hover:scale-125 inline-block">.</span>
        </a>

        {/* Center / Desktop Links with Active Pill Highlight */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-black/[0.03] dark:bg-[#15171B]/90 border border-[#E8E8E5]/80 dark:border-[#2A2E33] backdrop-blur-md text-xs font-medium tracking-tight shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all relative ${
                  isActive
                    ? 'text-[#171717] dark:text-white bg-white dark:bg-[#202329] shadow-xs font-semibold'
                    : 'text-[#737373] dark:text-[#CBD5E1] hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1e3fd8] dark:bg-[#38bdf8]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons: Command Palette, Resume & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] hover:border-[#526B83]/50 text-[#737373] dark:text-[#CBD5E1] hover:text-[#171717] dark:hover:text-white transition-all hover:shadow-xs active:scale-95 cursor-pointer"
              title="Open Command Palette (Cmd + K or Ctrl + K)"
            >
              <Command className="w-3 h-3 text-[#526B83] dark:text-[#38bdf8]" />
              <span className="text-[11px]">⌘K</span>
            </button>
          )}

          {/* Single-Key Shortcuts Cheatsheet Trigger */}
          {onOpenShortcuts && (
            <button
              onClick={onOpenShortcuts}
              className="inline-flex items-center justify-center w-7 h-7 text-xs font-mono rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] hover:border-[#526B83]/50 text-[#737373] dark:text-[#CBD5E1] hover:text-[#171717] dark:hover:text-white transition-all hover:shadow-xs active:scale-95 cursor-pointer font-bold"
              title="Keyboard Shortcuts Cheatsheet (Press '?')"
            >
              ?
            </button>
          )}

          {/* Subtle Resume Action */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] hover:border-[#526B83]/50 text-[#171717] dark:text-[#EDEDEC] transition-all hover:shadow-xs active:scale-95 cursor-pointer"
            title="View & Download Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-[#526B83] dark:text-[#768FA6]" />
            <span>Resume</span>
          </button>

          {/* Sound FX Toggle Button */}
          <button
            onClick={handleToggleSound}
            aria-label={soundOn ? 'Mute UI sounds' : 'Enable UI sounds'}
            title={soundOn ? 'Sound FX Enabled (Click to Mute)' : 'Enable Interactive Sound FX'}
            className={`p-2 rounded-full border transition-all active:scale-90 cursor-pointer ${
              soundOn
                ? 'border-[#38bdf8]/60 bg-sky-50 dark:bg-sky-950/40 text-[#1e3fd8] dark:text-[#38bdf8] shadow-xs'
                : 'border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] text-[#737373] hover:text-[#171717] dark:text-[#CBD5E1] dark:hover:text-white'
            }`}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => {
              playPop();
              onToggleTheme();
            }}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] text-[#737373] hover:text-[#171717] dark:text-[#9E9E9C] dark:hover:text-white transition-all active:scale-90 cursor-pointer"
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

      {/* Sleek Top Reading Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1e3fd8] via-[#38bdf8] to-[#93c5fd] origin-left shadow-[0_0_8px_rgba(56,189,248,0.6)] pointer-events-none"
        style={{ scaleX }}
      />
    </header>
  );
};

