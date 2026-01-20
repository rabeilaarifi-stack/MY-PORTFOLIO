import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string; // Thumbnail
  size: 'small' | 'large' | 'wide';
  demoUrl?: string;
  
  // Clean Modal Fields
  clientLogo?: string; // Optional context
  description?: string; // Brief 2-line description
  videoUrl?: string; // For Video Ads
  fullPageUrl?: string; // Legacy: Single long image
  gallery?: string[]; // NEW: Array of images (Behance style)
  
  // Legacy/Optional
  tools?: string[];
  objective?: string;
  result?: string;
  mobileImageUrl?: string;
  tags?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}