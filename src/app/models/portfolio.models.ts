export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroData {
  name: string;
  title: string;
  headline: string;
  intro: string;
  availabilityStatus: string;
  isAvailable: boolean;
  resumePath: string;
  profileImagePath: string;
  socialLinks: SocialLink[];
  techIcons: TechIcon[];
}

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export interface AboutData {
  summary: string;
  highlights: AboutHighlight[];
  yearsExperience: string;
  projectsCompleted: string;
  technologiesUsed: string;
  profileImagePath: string;
}

export interface AboutHighlight {
  icon: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

export type ProjectCategory = 'All' | 'MERN Stack' | 'SharePoint' | 'React' | 'Next.js' | 'Angular';

export interface ServiceCard {
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
