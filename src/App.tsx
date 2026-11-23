import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';
import { CommandPalette } from './components/CommandPalette';
import { AmbientCursorGlow } from './components/AmbientCursorGlow';
import { SectionDivider } from './components/SectionDivider';
import { ClickShockwave } from './components/ClickShockwave';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { DeveloperTerminal } from './components/DeveloperTerminal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  // Global keyboard shortcuts (Cmd+K, ?, ~, single-key navigation: P, A, S, C, G, M, T, R, ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Command Palette shortcut (Cmd+K or Ctrl+K)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      // 2. Terminal CLI shortcut (` or ~)
      if (e.key === '`' || e.key === '~') {
        // Only trigger if not actively inside an input/textarea
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setIsTerminalOpen(prev => !prev);
          return;
        }
      }

      // Bypass single-key shortcuts when typing in inputs, textareas, or with modifiers
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }

      // HUD Shortcuts modal toggle
      if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen(prev => !prev);
        return;
      }

      // Escape key closes open modals
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setIsCommandPaletteOpen(false);
        setIsShortcutsOpen(false);
        setIsTerminalOpen(false);
        return;
      }

      const lower = e.key.toLowerCase();
      const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      if (lower === 'p') {
        e.preventDefault();
        scrollToSection('projects');
      } else if (lower === 'a') {
        e.preventDefault();
        scrollToSection('about');
      } else if (lower === 's') {
        e.preventDefault();
        scrollToSection('skills');
      } else if (lower === 'c') {
        e.preventDefault();
        scrollToSection('certifications');
      } else if (lower === 'g') {
        e.preventDefault();
        scrollToSection('github');
      } else if (lower === 'm') {
        e.preventDefault();
        scrollToSection('contact');
      } else if (lower === 't') {
        e.preventDefault();
        toggleTheme();
      } else if (lower === 'r') {
        e.preventDefault();
        setIsResumeOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#171717] dark:bg-[#111214] dark:text-[#EDEDEC] transition-colors duration-300">
      {/* Interactive Click Ripple Shockwave System */}
      <ClickShockwave />

      {/* Interactive Ambient Cursor Glow (Desktop) */}
      <AmbientCursorGlow />

      {/* Minimal Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          darkMode={darkMode} 
        />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <GithubSection />
        <SectionDivider />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Keyboard-Navigatable Quick Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Power-User Keyboard Navigation Cheatsheet HUD (?) */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Interactive Retro-Modern Developer CLI Terminal Drawer (~) */}
      <DeveloperTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Go Up Button */}
      <ScrollToTop />
    </div>
  );
}
