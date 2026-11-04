import React, { useState, useMemo, useEffect } from 'react';
import cachedContributions from '../data/githubContributions.json';
import { Sparkles, Calendar, Flame, Trophy, GitCommit, Info } from 'lucide-react';

interface DayContribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  total: Record<string, number>;
  contributions: DayContribution[];
}

export const GithubContributionGraph: React.FC = () => {
  const [data, setData] = useState<ContributionData>(cachedContributions as ContributionData);
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [hoveredDay, setHoveredDay] = useState<{ day: DayContribution; x: number; y: number } | null>(null);
  const [colorTheme, setColorTheme] = useState<'emerald' | 'slate'>('emerald');

  // Attempt live refresh in background
  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/ShaikMuktharBasha')
      .then(res => res.ok ? res.json() : null)
      .then(json => {
        if (json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      })
      .catch(() => {
        // Cached fallback already set
      });
  }, []);

  // Filter contributions by selected year or rolling last 365 days
  const filteredDays = useMemo(() => {
    if (!data || !data.contributions) return [];

    let days: DayContribution[] = [];

    if (selectedYear === 'last-year') {
      // Last 365 available days
      days = [...data.contributions].slice(-365);
    } else {
      days = data.contributions.filter(d => d.date.startsWith(selectedYear));
    }

    // Sort chronologically
    return days.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [data, selectedYear]);

  // Compute metrics: Total, Streaks, Max Day
  const metrics = useMemo(() => {
    if (!filteredDays.length) return { total: 0, maxDay: 0, maxDate: '', currentStreak: 0, longestStreak: 0 };

    let total = 0;
    let maxDay = 0;
    let maxDate = '';
    let longestStreak = 0;
    let currentStreak = 0;
    let tempStreak = 0;

    for (let i = 0; i < filteredDays.length; i++) {
      const d = filteredDays[i];
      total += d.count;

      if (d.count > maxDay) {
        maxDay = d.count;
        maxDate = d.date;
      }

      if (d.count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    }

    // Calculate current streak backward from latest
    for (let i = filteredDays.length - 1; i >= 0; i--) {
      if (filteredDays[i].count > 0) {
        currentStreak++;
      } else if (i === filteredDays.length - 1) {
        // Today might not have commits yet, check yesterday
        continue;
      } else {
        break;
      }
    }

    return { total, maxDay, maxDate, currentStreak, longestStreak };
  }, [filteredDays]);

  // Group days into 7 rows (Sunday to Saturday) across weeks
  const weeks = useMemo(() => {
    if (!filteredDays.length) return [];

    const result: (DayContribution | null)[][] = [];
    let currentWeek: (DayContribution | null)[] = [];

    const firstDate = new Date(filteredDays[0].date);
    const startDayOfWeek = firstDate.getDay(); // 0 is Sunday

    // Pad beginning of first week
    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    for (const day of filteredDays) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
    }

    // Pad end of last week
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      result.push(currentWeek);
    }

    return result;
  }, [filteredDays]);

  // Generate month headers positioned above the columns
  const monthLabels = useMemo(() => {
    if (!weeks.length) return [];
    const labels: { name: string; colIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, colIndex) => {
      // Find the first valid day in the week
      const firstValidDay = week.find(d => d !== null);
      if (firstValidDay) {
        const month = new Date(firstValidDay.date).getMonth();
        if (month !== lastMonth) {
          const monthName = new Date(firstValidDay.date).toLocaleString('en-US', { month: 'short' });
          labels.push({ name: monthName, colIndex });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [weeks]);

  // Palette color mappings
  const getCellColor = (level: number) => {
    if (colorTheme === 'emerald') {
      switch (level) {
        case 1:
          return 'bg-[#9BE9A8] dark:bg-[#0E4429] border-[#7BC96F]/30';
        case 2:
          return 'bg-[#40C463] dark:bg-[#006D32] border-[#239A3B]/40';
        case 3:
          return 'bg-[#30A14E] dark:bg-[#26A641] border-[#196127]/50';
        case 4:
          return 'bg-[#216E39] dark:bg-[#39D353] border-[#196127]';
        default:
          return 'bg-[#EAEAE7] dark:bg-[#202226] border-transparent';
      }
    } else {
      // Editorial Slate
      switch (level) {
        case 1:
          return 'bg-[#B0C0CE] dark:bg-[#2A3744] border-[#91A6BA]/30';
        case 2:
          return 'bg-[#7693AC] dark:bg-[#3A4E61] border-[#5E7D99]/40';
        case 3:
          return 'bg-[#526B83] dark:bg-[#5E7D9A] border-[#3F556B]/50';
        case 4:
          return 'bg-[#364758] dark:bg-[#86A3BE] border-[#273441]';
        default:
          return 'bg-[#EAEAE7] dark:bg-[#202226] border-transparent';
      }
    }
  };

  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className="mt-8 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] p-6 sm:p-7 shadow-xs">
      {/* Header with Title and Year Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E8E8E5] dark:border-[#272A2E]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#768FA6]">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-[#171717] dark:text-[#EDEDEC]">
                Contribution Matrix
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                Live Data
              </span>
            </div>
            <p className="text-[11px] text-[#737373] dark:text-[#9E9E9C]">
              Verified commits, pull requests, and code reviews from GitHub profile
            </p>
          </div>
        </div>

        {/* Year & Theme Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <div className="flex items-center p-0.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] text-xs font-mono">
            {['2025', '2026', 'last-year'].map((year) => {
              const label = year === 'last-year' ? 'Last 12 Mos' : year;
              const count = year === 'last-year' ? null : data.total[year];
              const active = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                    active
                      ? 'bg-white dark:bg-[#2A2E33] text-[#171717] dark:text-[#EDEDEC] shadow-2xs font-semibold'
                      : 'text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-[#EDEDEC]'
                  }`}
                >
                  {label} {count !== undefined && count !== null ? `(${count})` : ''}
                </button>
              );
            })}
          </div>

          {/* Theme Palette Switcher */}
          <button
            onClick={() => setColorTheme(colorTheme === 'emerald' ? 'slate' : 'emerald')}
            className="p-1.5 px-2 text-[10px] font-mono rounded-md border border-[#E8E8E5] dark:border-[#2A2E33] text-[#737373] dark:text-[#9E9E9C] hover:text-[#171717] dark:hover:text-white transition-colors"
            title="Toggle Palette (Emerald / Slate)"
          >
            {colorTheme === 'emerald' ? 'Theme: Emerald' : 'Theme: Slate'}
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-[#E8E8E5] dark:border-[#272A2E] text-xs">
        <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5]/70 dark:border-[#2A2E33]/70">
          <div className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1">
            <GitCommit className="w-3 h-3 text-[#526B83]" /> Contributions
          </div>
          <div className="text-lg font-bold text-[#171717] dark:text-[#EDEDEC] font-mono mt-0.5">
            {metrics.total.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C]">
            in {selectedYear === 'last-year' ? 'past 365 days' : selectedYear}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5]/70 dark:border-[#2A2E33]/70">
          <div className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1">
            <Trophy className="w-3 h-3 text-amber-500" /> Longest Streak
          </div>
          <div className="text-lg font-bold text-[#171717] dark:text-[#EDEDEC] font-mono mt-0.5">
            {metrics.longestStreak} days
          </div>
          <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C]">
            consecutive activity
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5]/70 dark:border-[#2A2E33]/70">
          <div className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-500" /> Busiest Single Day
          </div>
          <div className="text-lg font-bold text-[#171717] dark:text-[#EDEDEC] font-mono mt-0.5">
            {metrics.maxDay} commits
          </div>
          <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C] font-mono truncate">
            {metrics.maxDate ? new Date(metrics.maxDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5]/70 dark:border-[#2A2E33]/70">
          <div className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#526B83]" /> Overall Total
          </div>
          <div className="text-lg font-bold text-[#171717] dark:text-[#EDEDEC] font-mono mt-0.5">
            {(Object.values(data.total).reduce((a, b) => a + b, 0)).toLocaleString()}+
          </div>
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
            Active Contributor
          </div>
        </div>
      </div>

      {/* Contribution Grid Container (Scrollable horizontally for responsiveness) */}
      <div className="relative pt-4 overflow-x-auto pb-2">
        <div className="min-w-[720px] select-none">
          {/* Month Labels */}
          <div className="flex text-[10px] font-mono text-[#737373] dark:text-[#9E9E9C] mb-1 pl-7">
            {weeks.map((_, colIndex) => {
              const label = monthLabels.find(m => m.colIndex === colIndex);
              return (
                <div key={colIndex} className="w-[12px] mr-[3px] text-left">
                  {label ? label.name : ''}
                </div>
              );
            })}
          </div>

          {/* Matrix Rows (7 days) */}
          <div className="flex">
            {/* Day of Week Labels */}
            <div className="flex flex-col gap-[3px] text-[9px] font-mono text-[#737373] dark:text-[#9E9E9C] pr-2 w-7 justify-between py-[1px]">
              {dayLabels.map((label, idx) => (
                <span key={idx} className="h-[12px] leading-[12px]">
                  {label}
                </span>
              ))}
            </div>

            {/* Weeks columns */}
            <div className="flex gap-[3px]">
              {weeks.map((week, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, rowIdx) => {
                    if (!day) {
                      return (
                        <div
                          key={`empty-${rowIdx}`}
                          className="w-[12px] h-[12px] rounded-[2.5px] bg-transparent"
                        />
                      );
                    }

                    return (
                      <div
                        key={day.date}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            day,
                            x: rect.left + rect.width / 2,
                            y: rect.top
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[12px] h-[12px] rounded-[2.5px] border transition-transform duration-100 hover:scale-125 cursor-pointer ${getCellColor(
                          day.level
                        )}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tooltip */}
        {hoveredDay && (
          <div
            style={{
              position: 'fixed',
              left: `${hoveredDay.x}px`,
              top: `${hoveredDay.y - 42}px`,
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 60
            }}
            className="px-2.5 py-1.5 rounded-md bg-[#171717] dark:bg-[#EDEDEC] text-white dark:text-[#171717] text-[11px] font-mono shadow-lg border border-white/10 dark:border-black/10 whitespace-nowrap animate-in fade-in duration-100"
          >
            <strong className="font-semibold">
              {hoveredDay.day.count === 0 ? 'No contributions' : `${hoveredDay.day.count} contribution${hoveredDay.day.count === 1 ? '' : 's'}`}
            </strong>{' '}
            on {new Date(hoveredDay.day.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
        )}
      </div>

      {/* Legend & Sync Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E8E8E5] dark:border-[#272A2E] text-[11px] text-[#737373] dark:text-[#9E9E9C]">
        <div className="flex items-center gap-1.5 font-mono">
          <Info className="w-3.5 h-3.5 text-[#526B83]" />
          <span>Synchronized with ShaikMuktharBasha public git events</span>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#EAEAE7] dark:bg-[#202226]" />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${colorTheme === 'emerald' ? 'bg-[#9BE9A8] dark:bg-[#0E4429]' : 'bg-[#B0C0CE] dark:bg-[#2A3744]'}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${colorTheme === 'emerald' ? 'bg-[#40C463] dark:bg-[#006D32]' : 'bg-[#7693AC] dark:bg-[#3A4E61]'}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${colorTheme === 'emerald' ? 'bg-[#30A14E] dark:bg-[#26A641]' : 'bg-[#526B83] dark:bg-[#5E7D9A]'}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${colorTheme === 'emerald' ? 'bg-[#216E39] dark:bg-[#39D353]' : 'bg-[#364758] dark:bg-[#86A3BE]'}`} />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

