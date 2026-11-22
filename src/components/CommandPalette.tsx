import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  FolderGit2, 
  Wrench, 
  Award, 
  GitBranch, 
  Mail, 
  FileDown, 
  Sun, 
  Moon, 
  Copy, 
  Check, 
  ExternalLink,
  Command
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

interface ActionItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Links';
  icon: React.ElementType;
  shortcut?: string;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleTheme,
  onOpenResume,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions: ActionItem[] = [
    {
      id: 'home',
      title: 'Go to Home',
      category: 'Navigation',
      icon: Home,
      shortcut: 'H',
      perform: () => scrollTo('#hero'),
    },
    {
      id: 'about',
      title: 'Go to About & Philosophy',
      category: 'Navigation',
      icon: User,
      shortcut: 'A',
      perform: () => scrollTo('#about'),
    },
    {
      id: 'projects',
      title: 'View Selected Projects (9 Apps)',
      category: 'Navigation',
      icon: FolderGit2,
      shortcut: 'P',
      perform: () => scrollTo('#projects'),
    },
    {
      id: 'skills',
      title: 'View Technical Skills & Stack',
      category: 'Navigation',
      icon: Wrench,
      shortcut: 'S',
      perform: () => scrollTo('#skills'),
    },
    {
      id: 'certifications',
      title: 'View Certifications (4 Badges)',
      category: 'Navigation',
      icon: Award,
      shortcut: 'C',
      perform: () => scrollTo('#certifications'),
    },
    {
      id: 'github',
      title: 'View GitHub Activity & Matrix',
      category: 'Navigation',
      icon: GithubIcon,
      shortcut: 'G',
      perform: () => scrollTo('#github'),
    },
    {
      id: 'contact',
      title: 'Contact / Send Message',
      category: 'Navigation',
      icon: Mail,
      shortcut: 'M',
      perform: () => scrollTo('#contact'),
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Actions',
      icon: FileDown,
      shortcut: 'R',
      perform: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: copied ? Check : Copy,
      shortcut: 'E',
      perform: copyEmail,
    },
    {
      id: 'theme',
      title: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      category: 'Actions',
      icon: darkMode ? Sun : Moon,
      shortcut: 'T',
      perform: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: 'external-github',
      title: 'Open GitHub Profile (@' + PERSONAL_INFO.shortName + ')',
      category: 'Links',
      icon: ExternalLink,
      perform: () => window.open(PERSONAL_INFO.github, '_blank'),
    },
    {
      id: 'external-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Links',
      icon: ExternalLink,
      perform: () => window.open(PERSONAL_INFO.linkedin, '_blank'),
    },
  ];

  const filtered = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent listener, but if passed here:
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Box */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#E8E8E5] dark:border-[#272A2E]">
              <Search className="w-4 h-4 text-[#737373] dark:text-[#9E9E9C] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm text-[#171717] dark:text-[#EDEDEC] placeholder:text-[#737373]/60 focus:outline-none"
              />
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#737373] dark:text-[#9E9E9C]">
                  ESC
                </span>
              </div>
            </div>

            {/* Actions List */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#737373] dark:text-[#9E9E9C]">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;

                  return (
                    <button
                      key={item.id}
                      onClick={item.perform}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#171717] text-white dark:bg-[#EDEDEC] dark:text-[#171717]'
                          : 'text-[#171717] dark:text-[#EDEDEC] hover:bg-[#FAFAF8] dark:hover:bg-[#202226]'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white dark:text-[#171717]' : 'text-[#526B83] dark:text-[#768FA6]'}`} />
                        <span className="font-medium truncate">{item.title}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-mono ${isSelected ? 'opacity-80' : 'text-[#737373] dark:text-[#9E9E9C]'}`}>
                          {item.category}
                        </span>
                        {item.shortcut && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                            isSelected 
                              ? 'border-white/20 dark:border-black/20 bg-white/10 dark:bg-black/10' 
                              : 'border-[#E8E8E5] dark:border-[#2A2E33] bg-[#FAFAF8] dark:bg-[#202226] text-[#737373] dark:text-[#9E9E9C]'
                          }`}>
                            {item.shortcut}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 bg-[#FAFAF8] dark:bg-[#131416] border-t border-[#E8E8E5] dark:border-[#272A2E] flex items-center justify-between text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="px-1 py-0.5 rounded bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">↑</span>
                  <span className="px-1 py-0.5 rounded bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">↓</span>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <span className="px-1 py-0.5 rounded bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">↵</span>
                  Select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Command className="w-3 h-3" /> Navigation Palette
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
