export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Full-Stack' | 'Systems & Tools';
  tagline: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
  previewType: 
    | 'aetherpath'
    | 'rag-chatbot'
    | 'content-analyzer'
    | 'sentinel-trust'
    | 'movie-planner'
    | 'gatherflow'
    | 'study-assistant'
    | 'noteshare'
    | 'research-paper';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl?: string;
  badgeCode: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade?: string;
  highlights: string[];
}

