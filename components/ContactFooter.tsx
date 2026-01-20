import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Send } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white relative overflow-hidden pt-24 pb-12">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-brand-blue via-brand-lightblue to-brand-orange"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            {/* Typography Fix: Split into spans with flex-col for better vertical spacing */}
            <h2 className="text-4xl md:text-5xl font-black mb-6 flex flex-col gap-3">
              <span className="leading-normal">لنصنع شيئاً</span> 
              <span className="text-brand-orange leading-normal">استثنائياً معاً.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-loose">
              هل أنت جاهز للارتقاء بعلامتك التجارية؟ أنا أقبل حالياً مشاريع جديدة لهذا الربع. تواصل معي ودعنا نناقش رؤيتك.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@creative.dir" className="flex items-center gap-4 text-xl font-medium hover:text-brand-blue transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                hello@creative.dir
              </a>
              <div className="flex items-center gap-4 text-xl font-medium">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                +966 55 123 4567
              </div>
            </div>
          </div>

          <div className="glass-panel border-0 bg-white/5 p-8 rounded-3xl">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="الاسم الكريم" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors text-right"
                />
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors text-right"
                />
              </div>
              <select className="bg-white/10 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none text-right">
                <option className="bg-brand-dark text-gray-400">نوع الخدمة المطلوبة</option>
                <option className="bg-brand-dark">تصميم صفحة هبوط</option>
                <option className="bg-brand-dark">إنتاج فيديو إعلاني</option>
                <option className="bg-brand-dark">تصاميم سوشيال ميديا</option>
              </select>
              <textarea 
                rows={4} 
                placeholder="تفاصيل المشروع..." 
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors text-right leading-loose"
              ></textarea>
              <button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl mt-2 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                إرسال الرسالة
                <Send size={18} className="rotate-180" /> {/* Rotated icon for RTL */}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ر
            </div>
            <span className="font-bold text-xl">ربيع<span className="text-brand-blue">العريفي</span></span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
          </div>

          <p className="text-gray-500 text-sm font-medium">
            © 2024 ربيع العريفي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;