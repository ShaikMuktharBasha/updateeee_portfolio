import React, { useState } from 'react';
import { 
  Mail, 
  FileDown, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        // Fallback to mailto client
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          formData.subject || `Portfolio Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      // In case of ad-blocker or network error, fallback to direct mailto client
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#E8E8E5] dark:border-[#272A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-[#526B83] dark:text-[#768FA6] font-semibold block mb-2">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDEC]">
            Have an interesting project in mind?
          </h2>
          <p className="text-base sm:text-lg text-[#737373] dark:text-[#9E9E9C] mt-3 max-w-2xl leading-relaxed">
            I'm always interested in building meaningful products and connecting with people who love technology.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] shadow-2xs space-y-5">
              <h3 className="text-base font-bold text-[#171717] dark:text-[#EDEDEC] pb-3 border-b border-[#E8E8E5] dark:border-[#272A2E]">
                Direct Coordinates
              </h3>

              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded bg-white dark:bg-[#25282D] text-[#526B83] dark:text-[#768FA6] shrink-0 border border-[#E8E8E5] dark:border-[#2E3238]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C]">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-medium text-[#171717] dark:text-[#EDEDEC] hover:text-[#526B83] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-white dark:hover:bg-[#25282D] text-[#737373] hover:text-[#171717] dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Status */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
                  <span className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-[#526B83]" /> Location
                  </span>
                  <span className="font-medium text-[#171717] dark:text-[#EDEDEC]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33]">
                  <span className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#9E9E9C] flex items-center gap-1 mb-1">
                    <Clock className="w-3 h-3 text-[#526B83]" /> Timezone
                  </span>
                  <span className="font-medium text-[#171717] dark:text-[#EDEDEC]">
                    IST (UTC +5:30)
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-[#E8E8E5] dark:border-[#272A2E] flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAF8] dark:hover:bg-[#1E2024] text-[#171717] dark:text-[#EDEDEC] border border-[#E8E8E5] dark:border-[#2A2E33] transition-colors text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" /> Connect on LinkedIn
                  </span>
                  <span className="font-mono text-[#737373] dark:text-[#9E9E9C] text-[11px]">in/shaik-mukthar-basha</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAF8] dark:hover:bg-[#1E2024] text-[#171717] dark:text-[#EDEDEC] border border-[#E8E8E5] dark:border-[#2A2E33] transition-colors text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" /> Follow on GitHub
                  </span>
                  <span className="font-mono text-[#737373] dark:text-[#9E9E9C] text-[11px]">@{PERSONAL_INFO.shortName}</span>
                </a>
              </div>

              {/* Resume Download Action Card */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] hover:bg-white dark:hover:bg-[#25282D] border border-[#E8E8E5] dark:border-[#2A2E33] text-xs font-medium text-[#171717] dark:text-[#EDEDEC] transition-all hover:border-[#526B83]/50 shadow-2xs cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-[#526B83] dark:text-[#768FA6]" />
                  <span>Download Complete Resume / CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Functional Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#18191C] border border-[#E8E8E5] dark:border-[#272A2E] shadow-2xs">
              <h3 className="text-base font-bold text-[#171717] dark:text-[#EDEDEC] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#737373] dark:text-[#9E9E9C] mb-6">
                Whether you have an inquiry regarding internships, software development, or a collaborative project.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you! Mukthar will review your message and reply via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#171717] dark:text-[#EDEDEC] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        required
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC] placeholder:text-[#737373]/60 focus:outline-none focus:border-[#526B83] dark:focus:border-[#768FA6] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[#171717] dark:text-[#EDEDEC] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jane@company.com"
                        required
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC] placeholder:text-[#737373]/60 focus:outline-none focus:border-[#526B83] dark:focus:border-[#768FA6] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-[#171717] dark:text-[#EDEDEC] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC] placeholder:text-[#737373]/60 focus:outline-none focus:border-[#526B83] dark:focus:border-[#768FA6] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#171717] dark:text-[#EDEDEC] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, team, or inquiry..."
                      required
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#FAFAF8] dark:bg-[#1E2024] border border-[#E8E8E5] dark:border-[#2A2E33] text-[#171717] dark:text-[#EDEDEC] placeholder:text-[#737373]/60 focus:outline-none focus:border-[#526B83] dark:focus:border-[#768FA6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#171717] text-white hover:bg-black dark:bg-[#EDEDEC] dark:text-[#171717] dark:hover:bg-white text-xs font-medium transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
