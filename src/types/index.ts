export interface Feature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  category: 'core' | 'planning' | 'insights' | 'engagement';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TestimonialType {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
} 