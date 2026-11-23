import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const shortcuts = [
    { key: 'P', label: 'Scroll to Selected Projects' },
    { key: 'A', label: 'Scroll to About & Philosophy' },
    { key: 'S', label: 'Scroll to Technical Skills' },
    { key: 'C', label: 'Scroll to Certifications' },
    { key: 'G', label: 'Scroll to GitHub Activity' },
    { key: 'M', label: 'Scroll to Contact / Message' },
    { key: 'T', label: 'Toggle Dark / Light Theme' },
    { key: 'R', label: 'Open Resume / CV Modal' },
    { key: '⌘ K', label: 'Open Command Palette' },
    { key: '~ / `', label: 'Open Interactive CLI Terminal' },
    { key: '?', label: 'Open / Close this Shortcuts HUD' },
    { key: 'ESC', label: 'Close Active Modals' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] shadow-2xl p-6 z-10"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E5] dark:border-[#272A2E]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#38bdf8]">
                  <Keyboard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#171717] dark:text-[#EDEDEC]">
                    Keyboard Shortcuts HUD
                  </h3>
                  <span className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">
                    Single-key power-user navigation
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-md text-[#737373] hover:text-[#171717] dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 divide-y divide-[#E8E8E5]/60 dark:divide-[#272A2E]/60 max-h-[380px] overflow-y-auto">
              {shortcuts.map((sc) => (
                <div
                  key={sc.key}
                  className="py-2.5 flex items-center justify-between text-xs"
                >
                  <span className="text-[#171717] dark:text-[#EDEDEC] font-medium">
                    {sc.label}
                  </span>
                  <kbd className="px-2 py-1 rounded bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[11px] font-mono text-[#526B83] dark:text-[#38bdf8] shadow-2xs font-semibold">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8E8E5] dark:border-[#272A2E] text-center">
              <span className="text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C]">
                Press <kbd className="px-1 py-0.5 rounded border border-[#E8E8E5] dark:border-[#2A2E33] bg-[#FAFAF8] dark:bg-[#202226] text-[#171717] dark:text-[#EDEDEC]">?</kbd> anywhere to toggle this guide
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
