import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { playClick, playSuccess, playPop } from '../utils/sound';

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
  onOpenResume,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs text-[#38bdf8]">
          <p className="font-bold">⚡ Mukthar OS v2.4.0 (x86_64-pc-none-linux-gnu)</p>
          <p className="text-[#9E9E9C]">Type <span className="text-emerald-400 font-bold">help</span> to view available terminal commands, or <span className="text-emerald-400 font-bold">exit</span> to close.</p>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    playClick();

    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setCommandIndex(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs py-1">
            <div><span className="text-emerald-400 font-mono font-bold">about</span> - Bio & education</div>
            <div><span className="text-emerald-400 font-mono font-bold">projects</span> - 9 production works</div>
            <div><span className="text-emerald-400 font-mono font-bold">skills</span> - Technical competencies</div>
            <div><span className="text-emerald-400 font-mono font-bold">certs</span> - Accredited certificates</div>
            <div><span className="text-emerald-400 font-mono font-bold">contact</span> - Email & contact info</div>
            <div><span className="text-emerald-400 font-mono font-bold">resume</span> - Open CV / Resume</div>
            <div><span className="text-emerald-400 font-mono font-bold">theme</span> - Toggle light/dark</div>
            <div><span className="text-emerald-400 font-mono font-bold">date</span> - Real-time IST clock</div>
            <div><span className="text-emerald-400 font-mono font-bold">whoami</span> - User permissions</div>
            <div><span className="text-emerald-400 font-mono font-bold">sudo</span> - Root privilege test</div>
            <div><span className="text-emerald-400 font-mono font-bold">clear</span> - Clear terminal</div>
            <div><span className="text-emerald-400 font-mono font-bold">exit</span> - Close terminal</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs space-y-1 text-[#EDEDEC]">
            <p className="font-bold text-sky-400">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p className="text-[#9E9E9C]">{PERSONAL_INFO.bio}</p>
            <p className="text-amber-300 font-mono text-[11px]">B.Tech in Computer Science & Engineering (AI/ML) · KL University · CGPA: 9.65/10</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-sky-400 font-mono font-semibold">Listing {PROJECTS_DATA.length} Featured Engineering Deployments:</p>
            {PROJECTS_DATA.map((p, i) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] border-b border-white/5 pb-1">
                <span className="text-white font-medium">0{i + 1}. {p.title} <span className="text-[#768FA6]">({p.tagline})</span></span>
                <span className="text-[#38bdf8] font-mono">{p.technologies.slice(0, 3).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-sky-400 font-mono font-semibold">Core Engineering Stack:</p>
            {SKILLS_DATA.map((s) => (
              <div key={s.category} className="text-[11px]">
                <span className="text-emerald-400 font-mono">{s.category}:</span> <span className="text-[#EDEDEC]">{s.skills.map((sk) => sk.name).join(' · ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-sky-400 font-mono font-semibold">Accredited Credentials:</p>
            {CERTIFICATIONS_DATA.map((c) => (
              <div key={c.id} className="text-[11px] text-[#EDEDEC]">
                <span className="text-amber-400">[{c.issuer}]</span> {c.title} <span className="text-emerald-400 font-mono">({c.badgeCode})</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-[#EDEDEC]">
            <p>Email: <a href="mailto:2300032055cseh1@gmail.com" className="text-sky-400 underline font-mono">2300032055cseh1@gmail.com</a></p>
            <p>Location: <span className="text-emerald-400 font-mono">{PERSONAL_INFO.location}</span></p>
            <p>GitHub: <a href="https://github.com/ShaikMuktharBasha" target="_blank" rel="noreferrer" className="text-sky-400 underline font-mono">github.com/ShaikMuktharBasha</a></p>
          </div>
        );
        break;

      case 'resume':
        playSuccess();
        onOpenResume();
        output = <p className="text-xs text-emerald-400">Opening resume viewer & download modal...</p>;
        break;

      case 'theme':
        playPop();
        onToggleTheme();
        output = <p className="text-xs text-amber-300">Switched display color theme.</p>;
        break;

      case 'date':
        output = (
          <p className="text-xs font-mono text-emerald-400">
            {new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'medium' })} IST
          </p>
        );
        break;

      case 'whoami':
        output = <p className="text-xs font-mono text-purple-400">recruiter@tier1-enterprise:uid=1000(guest) gid=1000(evaluator) groups=1000(interviewer)</p>;
        break;

      case 'sudo':
      case 'sudo su':
        output = <p className="text-xs font-mono text-rose-400">🔒 [sudo] password for guest: Permission denied. Nice try, but root access is reserved! 😉</p>;
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            zsh: command not found: {trimmed}. Type <span className="text-emerald-400 font-bold">help</span> to view commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = commandIndex + 1;
        if (nextIndex < commandHistory.length) {
          setCommandIndex(nextIndex);
          setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIndex = commandIndex - 1;
        setCommandIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl h-[520px] rounded-xl bg-[#0c0d10] border border-[#23262A] shadow-2xl flex flex-col overflow-hidden z-10 text-slate-200 font-mono"
          >
            {/* Window Header */}
            <div className="h-9 px-4 bg-[#14151a] border-b border-[#23262A] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#ef4444] hover:opacity-80 transition-opacity"
                  title="Close"
                />
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#eab308] hover:opacity-80 transition-opacity"
                  title="Minimize"
                />
                <button
                  className="w-3 h-3 rounded-full bg-[#22c55e] hover:opacity-80 transition-opacity"
                  title="Zoom"
                />
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#9E9E9C]">
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>mukthar@portfolio:~</span>
              </div>

              <button
                onClick={onClose}
                className="text-[#737373] hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              onClick={() => inputRef.current?.focus()} 
              className="flex-1 p-4 overflow-y-auto space-y-3 font-mono cursor-text"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">mukthar@dev:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  <div className="pl-2 border-l border-white/10">{item.output}</div>
                </div>
              ))}

              {/* Live Input Line */}
              <div className="flex items-center gap-2 text-xs pt-1">
                <span className="text-emerald-400 font-bold shrink-0">mukthar@dev:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-sky-400 text-xs p-0 m-0"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>

              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Footer Hint */}
            <div className="px-4 py-2 bg-[#101115] border-t border-[#23262A] flex items-center justify-between text-[11px] text-[#737373]">
              <div className="flex items-center gap-3">
                <span>Tab: autocompletion</span>
                <span>↑↓: command history</span>
              </div>
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#1a1c22] border border-white/10 text-white font-mono">ESC</kbd> to exit</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
