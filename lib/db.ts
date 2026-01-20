import { Project } from '../types';

// Initial Seed Data (Matches the hardcoded data from before)
const INITIAL_PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'منصة استثمار كابيتال', 
    category: 'صفحة هبوط', 
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
    size: 'large',
    description: 'تصميم واجهة مستخدم احترافية لشركة استثمارية تهدف لزيادة الثقة وجذب رؤوس الأموال.',
    fullPageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=2000&q=80',
    tags: ['React', 'Finance', 'UI/UX']
  },
  { 
    id: '2', 
    title: 'مشروب طاقة نيون', 
    category: 'سوشيال ميديا', 
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    size: 'small',
    description: 'هوية بصرية وتصاميم سوشيال ميديا تستهدف فئة الشباب (Gen Z) بأسلوب عصري وجريء.',
    tags: ['Social Media', 'Branding']
  },
  { 
    id: '3', 
    title: 'عسل النحل الملكي', 
    category: 'صفحة منتج', 
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    size: 'small',
    description: 'صفحة منتج تفاعلية رفعت معدل التحويل للمتجر بنسبة 4.5% خلال شهر واحد.',
    fullPageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1800&q=80',
    tags: ['E-commerce', 'Shopify']
  },
  { 
    id: '4', 
    title: 'مؤتمر الرياض التقني', 
    category: 'إعلان فيديو', 
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
    size: 'wide',
    description: 'فيديو تشويقي ديناميكي للترويج لأكبر مؤتمر تقني في المنطقة، تم استخدامه في حملات يوتيوب.',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    tags: ['Video Editing', 'Premiere Pro']
  },
];

const STORAGE_KEY = 'portfolio_projects_db';

export const db = {
  // Simulate Fetching Data
  getProjects: async (): Promise<Project[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    return JSON.parse(stored);
  },

  // Simulate Adding Data
  addProject: async (project: Omit<Project, 'id'>): Promise<Project> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const projects = await db.getProjects();
    const newProject: Project = {
      ...project,
      id: Math.random().toString(36).substr(2, 9),
    };
    
    const updatedProjects = [newProject, ...projects];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
    return newProject;
  },

  // Simulate Deleting Data
  deleteProject: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const projects = await db.getProjects();
    const updatedProjects = projects.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  },
  
  // Update Project
  updateProject: async (id: string, updates: Partial<Project>): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const projects = await db.getProjects();
    const updatedProjects = projects.map(p => p.id === id ? { ...p, ...updates } : p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  }
};
