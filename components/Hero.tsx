import React from 'react';
import { ArrowDownCircle, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-bg to-white/50"></div>
        {/* Abstract Blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Personal Image / Visual (Right in RTL - First in Grid) */}
          <div className="relative flex justify-center lg:justify-start animate-fade-in-up">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                {/* Decorative circle behind */}
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-blue/20 to-brand-orange/20 rounded-full blur-2xl transform -rotate-6 scale-110"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Rabie Laarifi" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-0 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float z-20">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold tracking-wide">نسبة رضا العملاء</p>
                        <p className="text-xl font-black text-brand-dark">98%</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Text Content (Left in RTL - Second in Grid) */}
          <div className="flex flex-col gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/20 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue"></span>
              </span>
              <span className="text-sm font-bold text-brand-blue">متاح لاستقبال مشاريع جديدة</span>
            </div>
            
            {/* Typography Fix: Removed br, used flex-col and leading-normal */}
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark tracking-normal flex flex-col gap-2">
              <span className="leading-normal">أحول الزوار إلى</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-blue to-brand-lightblue leading-normal py-1">
                عملاء دائمين.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-dark/70 max-w-lg font-medium leading-loose tracking-wide">
              مرحباً، أنا <b>ربيع العريفي</b>. أساعد العلامات التجارية على النمو من خلال صفحات هبوط احترافية، إعلانات فيديو تخطف الأنظار، وتصاميم تزيد المبيعات.
            </p>

            <div className="flex flex-col gap-4 text-brand-dark/80 font-bold">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-brand-orange w-6 h-6 shrink-0" />
                    <span>زيادة معدلات التحويل (ROI)</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-brand-orange w-6 h-6 shrink-0" />
                    <span>تصاميم عصرية تناسب السوق العربي</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#contact"
                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-3 text-lg"
              >
                تواصل معي الآن
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 bg-white text-brand-dark border border-gray-200 font-bold rounded-xl hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm flex items-center justify-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </span>
                شاهد أعمالي السابقة
              </a>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-dark/40 hidden md:block">
          <ArrowDownCircle size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;