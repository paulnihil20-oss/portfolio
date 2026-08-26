export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
  skills: string[];
  pdfPath: string;
  badge: string;
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  category: 'EDUCATION' | 'ACHIEVEMENT' | 'PROJECT' | 'CERTIFICATION';
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  code: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: string;
  }[];
}
