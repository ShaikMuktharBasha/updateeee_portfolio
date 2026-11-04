import React, { useEffect, useState } from 'react';
import { Star, GitFork, ArrowUpRight, GitCommit, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { GITHUB_STATS } from '../data/portfolioData';
import { GithubContributionGraph } from './GithubContributionGraph';

interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>(GITHUB_STATS.topRepos);
  const [publicRepoCount, setPublicRepoCount] = useState<number>(GITHUB_STATS.totalRepositories);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_STATS.username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos) {
            setPublicRepoCount(userData.public_repos);
          }
        }

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_STATS.username}/repos?sort=updated&per_page=4`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const mapped = reposData.slice(0, 4).map((r: any) => ({
              name: r.name,
              description: r.description || 'Open source software and engineering project by Mukthar.',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              language: r.language || 'TypeScript'
            }));
            setRepos(mapped);
          }
        }
      } catch (err) {
        // Fallback already pre-populated from GITHUB_STATS data
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
              Open Source & Version Control
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
              GitHub Activity.
            </h2>
            <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl">
              Verified public contributions, commit velocity, and core repositories from @{GITHUB_STATS.username}.
            </p>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E8E8E5] dark:border-[#2A2E33] bg-white dark:bg-[#18191C] hover:border-[#526B83]/60 text-[#171717] dark:text-[#EDEDEC] text-xs font-medium transition-all shadow-2xs group w-fit cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" />
            <span>@{GITHUB_STATS.username}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Real Dynamic GitHub Contribution Graph */}
        <GithubContributionGraph />

        {/* Section Divider & Featured Repositories Header */}
        <div className="mt-14 mb-6 flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#526B83] dark:text-[#768FA6] font-semibold">
            Featured Repositories
          </h3>
          <span className="text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C]">
            {publicRepoCount} Public Repositories
          </span>
        </div>

        {/* Minimal Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] flex flex-col justify-between hover:border-[#526B83]/40 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E5] dark:border-[#272A2E]">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" />
                    <span className="text-xs font-mono font-medium text-[#737373] dark:text-[#9E9E9C]">
                      {repo.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#737373] dark:text-[#9E9E9C]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#526B83]" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://github.com/${GITHUB_STATS.username}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-base font-bold text-[#171717] dark:text-[#EDEDEC] hover:text-[#526B83] dark:hover:text-[#768FA6] transition-colors"
                >
                  {repo.name}
                </a>

                <p className="text-xs text-[#737373] dark:text-[#9E9E9C] mt-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E8E5] dark:border-[#272A2E] flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9E9E9C]">
                <span className="flex items-center gap-1">
                  <GitCommit className="w-3.5 h-3.5 text-[#526B83]" /> Continuous Integration
                </span>
                <a
                  href={`https://github.com/${GITHUB_STATS.username}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-0.5 text-[#171717] dark:text-[#EDEDEC]"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
