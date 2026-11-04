import React from 'react';
import { 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Film, 
  Calendar, 
  BookOpen, 
  Share2, 
  FileCode2, 
  Search,
  ArrowRight,
  Database,
  Cpu,
  Layers
} from 'lucide-react';

interface PreviewProps {
  type: string;
  isHovered?: boolean;
}

export const ProjectPreview: React.FC<PreviewProps> = ({ type, isHovered }) => {
  switch (type) {
    case 'aetherpath':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F0F1EE] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">AetherPath Core // Dynamic Graph</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Active Milestone: 78%
            </span>
          </div>

          {/* Interactive Learning Node Flow */}
          <div className="my-3 space-y-2.5">
            <div className="flex items-center justify-between p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC]">Foundations & Vector Mathematics</div>
                  <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C]">Completed • 8 Modules</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#737373] dark:text-[#9E9E9C]">100%</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#526B83]/40 dark:border-[#526B83]/60 shadow-xs relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#526B83] rounded-l-md" />
              <div className="flex items-center gap-2.5 pl-1.5">
                <Cpu className="w-4 h-4 text-[#526B83] dark:text-[#768FA6] shrink-0 animate-pulse" />
                <div>
                  <div className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC]">RAG Architecture & Embeddings</div>
                  <div className="text-[10px] text-[#526B83] dark:text-[#768FA6] font-medium">In Progress • Synthesis Stage</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium text-[#526B83] dark:text-[#768FA6]">78%</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-md bg-[#FAFAF8] dark:bg-[#161719] border border-dashed border-[#D4D4D0] dark:border-[#33363B] opacity-80">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full border border-[#A3A3A0] dark:border-[#555] flex items-center justify-center text-[9px] font-mono text-[#737373]">3</div>
                <div>
                  <div className="text-xs font-medium text-[#737373] dark:text-[#9E9E9C]">Autonomous Multi-Agent Systems</div>
                  <div className="text-[10px] text-[#A3A3A0] dark:text-[#777]">Next Milestone • Locked</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#A3A3A0]">0%</span>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#526B83]" /> AI Path Generator
            </span>
            <span className="font-mono">Adaptive Curriculum v2.4</span>
          </div>
        </div>
      );

    case 'rag-chatbot':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F1F2F0] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">FAISS Index: 1,420 Vectors</span>
            </div>
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              Cosine Sim: 0.94
            </span>
          </div>

          {/* Chat / Retrieval snippet */}
          <div className="my-3 space-y-2.5">
            <div className="p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs">
              <div className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] mb-1">User Query</div>
              <div className="text-xs text-[#171717] dark:text-[#EDEDEC] font-medium">"Summarize latency optimizations in section 4.2"</div>
            </div>

            <div className="p-3 rounded-md bg-[#FAFAF8] dark:bg-[#161719] border border-[#E8E8E5] dark:border-[#272A2E]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Grounded Source Citation [Doc-p42]
                </span>
                <span className="text-[9px] font-mono text-[#737373]">Chunk #89</span>
              </div>
              <p className="text-[11px] text-[#526B83] dark:text-[#B0B7C0] leading-relaxed line-clamp-2">
                "Vector caching and token streaming reduced TTFT by 64%, eliminating redundant cold queries..."
              </p>
            </div>
          </div>

          {/* Footer stats */}
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">Zero Hallucination Protocol</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Verified Citation</span>
          </div>
        </div>
      );

    case 'content-analyzer':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F2F3EF] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">Text Metrics & Linguistic Audit</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#526B83] dark:bg-blue-950/40 dark:text-[#8AA4BE] border border-[#526B83]/20">
              Grade 8.4 • Optimal
            </span>
          </div>

          <div className="my-3 grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
              <span className="text-[10px] text-[#737373] dark:text-[#9E9E9C] block">Readability Index</span>
              <span className="text-base font-bold text-[#171717] dark:text-[#EDEDEC] font-mono">92/100</span>
              <span className="text-[9px] text-emerald-600 dark:text-emerald-400 block mt-0.5">High Clarity</span>
            </div>
            <div className="p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
              <span className="text-[10px] text-[#737373] dark:text-[#9E9E9C] block">Sentiment Polarity</span>
              <span className="text-base font-bold text-[#526B83] dark:text-[#768FA6] font-mono">+0.74</span>
              <span className="text-[9px] text-[#737373] dark:text-[#9E9E9C] block mt-0.5">Objective / Persuasive</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 font-mono">Passive: 2.1%</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 font-mono">Avg Sent: 14.2 words</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 font-mono">SEO Ready</span>
          </div>
        </div>
      );

    case 'sentinel-trust':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#EFF2F5] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">Zero-Trust Security Gate</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
              SHA-256 Validated
            </span>
          </div>

          <div className="my-3 space-y-2">
            <div className="p-2.5 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] font-mono text-[11px]">
              <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C]">Cryptographic Signature Hash</div>
              <div className="text-[#526B83] dark:text-[#768FA6] font-mono truncate mt-0.5">
                0x8e42f9b2...c107a8df
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#161719] border border-[#E8E8E5] dark:border-[#272A2E]">
                <div className="text-[#737373]">Access Rule:</div>
                <div className="text-[#171717] dark:text-[#EDEDEC] font-medium">RBAC Strict (Level 3)</div>
              </div>
              <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#161719] border border-[#E8E8E5] dark:border-[#272A2E]">
                <div className="text-[#737373]">Tamper Log:</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-medium">0 Breaches Logged</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">Hackathon Trust OS</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Synchronized
            </span>
          </div>
        </div>
      );

    case 'movie-planner':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F1F3F5] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">TMDB Sync // Watchlist Queue</span>
            </div>
            <span className="text-[11px] font-mono text-[#737373]">4 Scheduled</span>
          </div>

          <div className="my-2.5 space-y-2">
            <div className="flex items-center justify-between p-2 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-10 rounded bg-[#526B83]/20 dark:bg-[#526B83]/40 flex items-center justify-center text-[10px] font-bold text-[#526B83]">
                  IN
                </div>
                <div>
                  <div className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC]">Interstellar (2014)</div>
                  <div className="text-[10px] text-[#737373]">Sci-Fi • Nolan • 8.7 ★</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Fri 20:00
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-10 rounded bg-[#526B83]/20 dark:bg-[#526B83]/40 flex items-center justify-center text-[10px] font-bold text-[#526B83]">
                  OP
                </div>
                <div>
                  <div className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC]">Oppenheimer (2023)</div>
                  <div className="text-[10px] text-[#737373]">Biography • 8.9 ★</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Sat 18:30
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">Mood: Philosophical / Sci-Fi</span>
            <span className="font-mono text-[#526B83] dark:text-[#768FA6]">Synced</span>
          </div>
        </div>
      );

    case 'gatherflow':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F0F2EE] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">GatherFlow // Event Engine</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
              Live RSVP: 184 / 200
            </span>
          </div>

          <div className="my-2.5 p-3 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#171717] dark:text-[#EDEDEC]">Tech Horizon Summit 2025</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#526B83] dark:bg-blue-950/30 dark:text-[#768FA6]">
                VIP Tier
              </span>
            </div>
            <div className="text-[11px] text-[#737373] dark:text-[#9E9E9C] flex items-center justify-between">
              <span>QR Entry: Verified</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">Confirmed #GF-992</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-[#E8E8E5] dark:bg-[#2A2E33] rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-[#526B83] rounded-full w-[92%]" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">MongoDB Backend</span>
            <span className="font-mono text-[#526B83] dark:text-[#768FA6]">Automated Email Pass</span>
          </div>
        </div>
      );

    case 'study-assistant':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F1F2EE] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">Spaced Repetition Engine</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              Recall: 94.2%
            </span>
          </div>

          <div className="my-2.5 p-3 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs">
            <div className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] mb-1">Flashcard #28 // Operating Systems</div>
            <div className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC] mb-2">
              "What distinguishes preemptive scheduling from cooperative multitasking?"
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Interval: 6d</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 font-mono">Mastered</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">AI Quiz Synthesis</span>
            <span className="font-mono text-[#526B83] dark:text-[#768FA6]">Streak: 19 Days</span>
          </div>
        </div>
      );

    case 'noteshare':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F1F3EE] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">Academic Notes Repository</span>
            </div>
            <span className="text-[10px] font-mono text-[#737373]">KL University CSE</span>
          </div>

          <div className="my-2.5 p-3 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#171717] dark:text-[#EDEDEC]">Database Systems Revision Notes</span>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">★ 4.9 (58)</span>
            </div>
            <p className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">
              Complete B+ Tree Indexing, ACID transaction isolation levels, & normal forms.
            </p>
            <div className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] pt-1">
              PDF • 4.2 MB • 324 Downloads
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">Peer-Reviewed Materials</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Verified Author</span>
          </div>
        </div>
      );

    case 'research-paper':
      return (
        <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAFAF8] to-[#F1F2EE] dark:from-[#18191C] dark:to-[#121315] border-b border-[#E8E8E5] dark:border-[#272A2E] overflow-hidden select-none">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5]/80 dark:border-[#272A2E]/80">
            <div className="flex items-center gap-1.5">
              <FileCode2 className="w-3.5 h-3.5 text-[#526B83]" />
              <span className="text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDEC]">Research Workspace // BibTeX</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              PDF.js Rendered
            </span>
          </div>

          <div className="my-2.5 p-3 rounded-md bg-white dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] shadow-xs">
            <div className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] mb-1">
              @article&#123;shaik2024scalable,
            </div>
            <div className="text-[11px] font-mono text-[#171717] dark:text-[#EDEDEC] pl-2 border-l border-[#526B83]">
              title = &#123;Scalable Semantic Indexing in Distributed RAG&#125;,<br />
              author = &#123;Shaik Mukthar Basha&#125;
            </div>
            <div className="text-[10px] font-mono text-[#737373] mt-1">&#125;</div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E5]/60 dark:border-[#272A2E]/60 text-[11px] text-[#737373] dark:text-[#9E9E9C]">
            <span className="font-mono">Split-screen Markdown Sync</span>
            <span className="font-mono text-[#526B83] dark:text-[#768FA6]">Citation Validated</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full p-6 flex items-center justify-center bg-[#FAFAF8] dark:bg-[#18191C] border-b border-[#E8E8E5] dark:border-[#272A2E]">
          <span className="font-mono text-xs text-[#737373]">Project Interface Preview</span>
        </div>
      );
  }
};

