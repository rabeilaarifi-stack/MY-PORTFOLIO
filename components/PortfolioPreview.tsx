import React, { useState, useMemo, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { Eye, X, PlayCircle, MessageCircle, ArrowRight, Share2 } from 'lucide-react';

const PortfolioPreview: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter Logic
  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'landing', label: 'صفحات الهبوط', dataVal: 'صفحة هبوط' },
    { id: 'video', label: 'إعلانات فيديو', dataVal: 'إعلان فيديو' },
    { id: 'social', label: 'سوشيال ميديا', dataVal: 'سوشيال ميديا' },
    { id: 'product', label: 'صفحات المنتجات', dataVal: 'صفحة منتج' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    const catData = categories.find(c => c.id === selectedCategory);
    return PROJECTS.filter(p => p.category === catData?.dataVal);
  }, [selectedCategory]);

  const openProject = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset'; // Unlock background scroll
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const getWhatsAppLink = (projectName: string) => {
    const text = `مرحباً، لقد أعجبني مشروع "${projectName}" وأرغب في طلب تصميم مماثل.`;
    return `https://wa.me/966551234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="work" className="py-24 bg-brand-bg relative min-h-[600px]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-brand-blue font-bold tracking-wider text-sm mb-2">أعمال مختارة</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark mb-8">معرض المشاريع</h3>
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b border-gray-200 pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-sm md:text-base font-bold pb-4 px-2 transition-all relative ${
                  selectedCategory === cat.id 
                    ? 'text-brand-orange' 
                    : 'text-brand-dark/60 hover:text-brand-dark'
                }`}
              >
                {cat.label}
                {selectedCategory === cat.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-orange rounded-t-full animate-scale-up"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY / BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] animate-fade-in">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => openProject(project)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gray-200
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                ${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {/* THUMBNAIL: Object-Cover ensures smooth crop without distortion */}
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {(project.category.includes('فيديو') || project.videoUrl) && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 delay-100">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <PlayCircle className="text-white w-8 h-8 fill-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full text-right delay-75">
                <span className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold rounded-full mb-2">
                    {project.category}
                </span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-gray-400 font-bold">
               لا توجد مشاريع في هذا القسم حالياً.
            </div>
        )}

        <div className="mt-12 text-center">
           <a href="#" className="inline-block px-8 py-3 bg-white text-brand-dark border border-gray-200 font-bold rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all shadow-sm">
            تحميل المزيد
          </a>
        </div>
      </div>

      {/* =================================================================================
          BEHANCE STYLE VIEWER (FULL SCREEN OVERLAY)
          This replaces the old modal. It's a full page slide-over.
      ================================================================================= */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in-up scroll-smooth">
          
          {/* 1. STICKY HEADER NAV */}
          <div className="sticky top-0 left-0 right-0 z-[110] bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between shadow-sm">
             <div className="flex items-center gap-4">
                 <button 
                    onClick={closeProject} 
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label="إغلاق"
                 >
                    <ArrowRight size={22} />
                 </button>
                 <div className="hidden md:block border-r border-gray-200 pr-4 mr-2">
                    <h2 className="text-lg font-bold text-gray-900 leading-none">{activeProject.title}</h2>
                    <span className="text-xs font-bold text-brand-orange mt-1 block">{activeProject.category}</span>
                 </div>
             </div>

             <div className="flex items-center gap-3">
                 <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-brand-blue hover:border-brand-blue transition-colors">
                    <Share2 size={18} />
                 </button>
                 <a 
                   href={getWhatsAppLink(activeProject.title)}
                   target="_blank" 
                   rel="noreferrer"
                   className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-orange transition-colors shadow-lg"
                 >
                    <MessageCircle size={18} />
                    <span>اطلب تصميم</span>
                 </a>
             </div>
          </div>

          {/* 2. MAIN SCROLLABLE CANVAS */}
          <div className="w-full max-w-6xl mx-auto py-10 px-0 md:px-6">
             
             {/* Mobile Title (Since header title is hidden on mobile) */}
             <div className="md:hidden px-6 mb-8 text-center">
                <h1 className="text-2xl font-black text-gray-900 mb-2">{activeProject.title}</h1>
                <span className="text-sm font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-full">{activeProject.category}</span>
             </div>

             {/* 3. MEDIA PRESENTATION STACK */}
             <div className="flex flex-col gap-8 md:gap-16 w-full mb-16">
                
                {/* VIDEO PLAYER */}
                {(activeProject.videoUrl) && (
                   <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mx-auto">
                      <video 
                          src={activeProject.videoUrl} 
                          poster={activeProject.imageUrl}
                          controls 
                          autoPlay 
                          className="w-full h-full object-contain"
                      />
                   </div>
                )}

                {/* IMAGES (GALLERY OR SINGLE LONG) */}
                {activeProject.gallery && activeProject.gallery.length > 0 ? (
                    // Gallery Mode
                    activeProject.gallery.map((img, idx) => (
                        <div key={idx} className="w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                            <img 
                                src={img} 
                                alt={`${activeProject.title} - View ${idx + 1}`} 
                                className="w-full h-auto block"
                                loading="lazy"
                            />
                        </div>
                    ))
                ) : (
                    // Single Long Image Mode (Landing Pages)
                    // Logic: w-full h-auto allows the image to be 5000px tall naturally.
                    !activeProject.videoUrl && (
                        <div className="w-full bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
                             <img 
                                src={activeProject.fullPageUrl || activeProject.imageUrl} 
                                alt={activeProject.title} 
                                className="w-full h-auto block" 
                            />
                        </div>
                    )
                )}

             </div>

             {/* 4. FOOTER DETAILS & CTA */}
             <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2rem] p-8 md:p-16 text-center mb-12 border border-gray-100">
                 <h3 className="text-3xl font-black text-gray-900 mb-6">هل أعجبك هذا العمل؟</h3>
                 <p className="text-lg text-gray-600 leading-loose max-w-2xl mx-auto mb-10">
                    {activeProject.description || activeProject.objective || 'هذا المشروع هو نتيجة لعملية إبداعية مدروسة تهدف لتحقيق أهداف العميل وزيادة المبيعات.'}
                 </p>
                 
                 {activeProject.tags && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {activeProject.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500">
                                #{tag}
                            </span>
                        ))}
                    </div>
                 )}

                 <a 
                   href={getWhatsAppLink(activeProject.title)}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-3 px-10 py-5 bg-[#f48221] text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-brand-orange/20"
                 >
                    <MessageCircle size={24} />
                    <span>ابدأ مشروعك الآن</span>
                 </a>
             </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default PortfolioPreview;