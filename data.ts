import { Project } from './types';

/**
 * ====================================================================
 *  ADMIN AREA: EDIT YOUR PROJECTS HERE
 * ====================================================================
 *  
 *  Categories Must Match Filter Values:
 *  - 'صفحة هبوط'
 *  - 'إعلان فيديو'
 *  - 'سوشيال ميديا'
 *  - 'صفحة منتج'
 *  
 */

export const PROJECTS: Project[] = [
  { 
    id: 'landing-1', 
    title: 'بروتين ماكس - كمال الأجسام', 
    category: 'صفحة هبوط', 
    // Uses the custom image. object-top in CSS ensures we see the header in the grid.
    imageUrl: 'https://i.ibb.co/1fbNtFRD/PP.jpg', 
    size: 'large',
    description: 'صفحة هبوط ديناميكية لمنتج مكملات رياضية. تم التركيز على التصميم الجريء والتباين العالي لتحقيق أعلى معدل تحويل.',
    // Empty gallery forces the "Single Long Image" view in the modal
    gallery: [], 
    fullPageUrl: 'https://i.ibb.co/1fbNtFRD/PP.jpg',
    tags: ['Fitness', 'High Conversion', 'Landing Page']
  },
  { 
    id: 'video-1', 
    title: 'مؤتمر الرياض التقني', 
    category: 'إعلان فيديو', 
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
    size: 'wide',
    description: 'فيديو تشويقي ديناميكي للترويج لأكبر مؤتمر تقني في المنطقة، تم استخدامه في حملات يوتيوب وانستقرام.',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    tags: ['Video Editing', 'Premiere Pro', 'Event Promo']
  },
  { 
    id: 'social-1', 
    title: 'مشروب طاقة نيون', 
    category: 'سوشيال ميديا', 
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    size: 'small',
    description: 'هوية بصرية وتصاميم سوشيال ميديا تستهدف فئة الشباب (Gen Z) بأسلوب عصري وجريء يعتمد على ألوان النيون.',
    gallery: [
        'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Social Media', 'Branding', 'Gen Z']
  },
  { 
    id: 'product-1', 
    title: 'عسل النحل الملكي', 
    category: 'صفحة منتج', 
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    size: 'small',
    description: 'صفحة منتج تفاعلية لمتجر عسل فاخر. تم التركيز على نقاء المنتج من خلال استخدام المساحات البيضاء.',
    gallery: [
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    tags: ['E-commerce', 'Shopify', 'Product Design']
  },
];