import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, BookOpen, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, CERTIFICATIONS_DATA, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
================================================================================
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
================================================================================

SUMMARY
${PERSONAL_INFO.bio}
${PERSONAL_INFO.extendedBio}

EDUCATION
${EDUCATION_DATA.institution}
${EDUCATION_DATA.degree} - ${EDUCATION_DATA.field} (${EDUCATION_DATA.period})
${EDUCATION_DATA.grade}
${EDUCATION_DATA.highlights.map(h => `• ${h}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `• ${c.title} — ${c.issuer} (${c.credentialId})`).join('\n')}

TECHNICAL SKILLS
${SKILLS_DATA.map(s => `${s.category}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

SELECTED PROJECTS
${PROJECTS_DATA.map(p => `• ${p.title} (${p.category})
  ${p.description}
  Stack: ${p.technologies.join(', ')}
  Live: ${p.liveUrl}
`).join('\n')}
================================================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shaik_Mukthar_Basha_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#161719] text-[#171717] dark:text-[#EDEDEC] rounded-xl border border-[#E8E8E5] dark:border-[#2A2E33] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8E5] dark:border-[#272A2E] bg-[#FAFAF8] dark:bg-[#1A1B1D]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-wider uppercase text-[#526B83] dark:text-[#768FA6] font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[#737373] dark:text-[#9E9E9C] hidden sm:inline">•</span>
            <span className="text-xs text-[#737373] dark:text-[#9E9E9C] hidden sm:inline font-mono">
              Shaik_Mukthar_Basha.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-[#E8E8E5] dark:border-[#2A2E33] hover:bg-white dark:hover:bg-[#202226] text-[#171717] dark:text-[#EDEDEC] transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-[#171717] text-white dark:bg-[#EDEDEC] dark:text-[#171717] hover:opacity-90 transition-opacity cursor-pointer"
              title="Download Text Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#737373] hover:text-[#171717] dark:hover:text-white rounded-md transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans selection:bg-[#526B83] selection:text-white">
          {/* Header Section */}
          <div className="border-b border-[#E8E8E5] dark:border-[#272A2E] pb-6">
            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-xs font-mono text-[#526B83] dark:text-[#768FA6] font-semibold block mt-1">
                  {PERSONAL_INFO.role}
                </span>
                <p className="text-sm text-[#737373] dark:text-[#9E9E9C] mt-2 max-w-xl leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Portrait Thumbnail */}
              <img
                src="/mukthar.jpg"
                alt={PERSONAL_INFO.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-[#E8E8E5] dark:border-[#272A2E] shadow-2xs shrink-0"
              />
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs font-mono text-[#737373] dark:text-[#9E9E9C]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#526B83]" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#526B83]" /> {PERSONAL_INFO.location}
              </span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#526B83] underline decoration-[#E8E8E5]"
              >
                github.com/ShaikMuktharBasha
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#526B83] underline decoration-[#E8E8E5]"
              >
                linkedin.com/in/shaik-mukthar-basha
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#526B83] dark:text-[#768FA6] font-semibold">
              <BookOpen className="w-4 h-4" />
              <h2>Education</h2>
            </div>
            <div className="p-4 rounded-lg bg-[#FAFAF8] dark:bg-[#1B1D20] border border-[#E8E8E5] dark:border-[#272A2E]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-semibold text-sm text-[#171717] dark:text-white">
                  {EDUCATION_DATA.institution}
                </h3>
                <span className="text-xs font-mono text-[#737373] dark:text-[#9E9E9C]">
                  {EDUCATION_DATA.period}
                </span>
              </div>
              <div className="text-xs text-[#526B83] dark:text-[#768FA6] font-medium mt-0.5">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.field} • {EDUCATION_DATA.grade}
              </div>
              <ul className="mt-2.5 space-y-1 text-xs text-[#737373] dark:text-[#9E9E9C] list-disc list-inside">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#526B83] dark:text-[#768FA6] font-semibold">
              <Award className="w-4 h-4" />
              <h2>Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div 
                  key={cert.id}
                  className="p-3.5 rounded-lg bg-[#FAFAF8] dark:bg-[#1B1D20] border border-[#E8E8E5] dark:border-[#272A2E]"
                >
                  <div className="text-xs font-semibold text-[#171717] dark:text-white">{cert.title}</div>
                  <div className="text-[11px] text-[#526B83] dark:text-[#768FA6] font-mono mt-0.5">{cert.issuer}</div>
                  <div className="text-[10px] text-[#737373] dark:text-[#9E9E9C] font-mono mt-1">ID: {cert.credentialId}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#526B83] dark:text-[#768FA6] font-semibold">
              <Code2 className="w-4 h-4" />
              <h2>Technical Competencies</h2>
            </div>
            <div className="space-y-2 text-xs">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1 p-2 rounded bg-[#FAFAF8] dark:bg-[#1B1D20] border border-[#E8E8E5]/70 dark:border-[#272A2E]/70">
                  <span className="font-semibold text-[#171717] dark:text-white col-span-1">{cat.category}:</span>
                  <span className="text-[#737373] dark:text-[#9E9E9C] col-span-3">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#526B83] dark:text-[#768FA6] font-semibold">
              <h2>Key Software Deployments</h2>
              <span className="text-[11px] lowercase font-normal text-[#737373]">9 verified projects</span>
            </div>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 5).map((project) => (
                <div 
                  key={project.id}
                  className="p-3.5 rounded-lg border border-[#E8E8E5] dark:border-[#272A2E] bg-[#FAFAF8] dark:bg-[#1B1D20]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[#171717] dark:text-white">{project.title}</span>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[10px] font-mono text-[#526B83] dark:text-[#768FA6] hover:underline flex items-center gap-1"
                    >
                      Live Demo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <p className="text-xs text-[#737373] dark:text-[#9E9E9C] mt-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map(t => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-[#202226] border border-[#E8E8E5] dark:border-[#2E3238] text-[#737373] dark:text-[#A0A4A8]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
