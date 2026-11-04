import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
            Industry Credentials & Badges
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
            Certifications.
          </h2>
          <p className="text-sm sm:text-base text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl">
            Accredited certifications from Microsoft, Amazon Web Services, MongoDB University, and IBM validating core competencies in cloud, databases, and AI.
          </p>
        </div>

        {/* Clean Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] flex flex-col justify-between hover:border-[#526B83]/50 transition-all hover:shadow-xs group"
            >
              <div>
                {/* Header with Issuer & Badge */}
                <div className="flex items-start justify-between pb-4 border-b border-[#E8E8E5] dark:border-[#272A2E]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#526B83] dark:text-[#768FA6] group-hover:bg-[#526B83] group-hover:text-white transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#9E9E9C] block">
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Verified Credential
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FAFAF8] dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC]">
                    {cert.badgeCode}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC] mt-4 mb-2">
                  {cert.title}
                </h3>

                {/* Skills Tested */}
                <div className="mt-3">
                  <span className="text-[11px] font-mono text-[#737373] dark:text-[#9E9E9C] block mb-2">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAFAF8] dark:bg-[#1E2024] text-[#737373] dark:text-[#9E9E9C] border border-[#E8E8E5] dark:border-[#2A2E33]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential ID & Issuer */}
              <div className="pt-4 mt-5 border-t border-[#E8E8E5] dark:border-[#272A2E] flex items-center justify-between text-xs font-mono text-[#737373] dark:text-[#9E9E9C]">
                <span>Credential ID: {cert.credentialId}</span>
                <span className="text-[#526B83] dark:text-[#768FA6] font-medium flex items-center gap-1">
                  Active <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

