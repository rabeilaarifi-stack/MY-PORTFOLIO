import React from 'react';
import { Layout, Video, Smartphone, ShoppingBag, ArrowUpLeft } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'landing',
    title: 'صفحات الهبوط',
    description: 'تصميم صفحات هبوط عالية التحويل تركز على تحويل الزائر إلى مشتري بأسرع وقت.',
    icon: Layout,
    tags: ['فيجما', 'رياكت', 'تحسين التحويل']
  },
  {
    id: 'video',
    title: 'إعلانات فيديو',
    description: 'مونتاج فيديوهات إعلانية سينمائية تجذب الانتباه في أول 3 ثواني لضمان المشاهدة.',
    icon: Video,
    tags: ['بريمير', 'أفتر إفكت', 'ستوري بورد']
  },
  {
    id: 'social',
    title: 'تصاميم السوشيال ميديا',
    description: 'محتوى بصري مبتكر لمنصات انستقرام، تيك توك وسناب شات يوقف التصفح.',
    icon: Smartphone,
    tags: ['ريلز', 'تيك توك', 'تصاميم فيرال']
  },
  {
    id: 'ecommerce',
    title: 'صفحات المنتجات',
    description: 'تجهيز صفحات منتجات متكاملة للمتاجر الإلكترونية ترفع قيمة السلة وتزيد المبيعات.',
    icon: ShoppingBag,
    tags: ['شوبيفاي', 'يو كان', 'سلة']
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-lightblue/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl mx-auto text-center md:text-right md:mx-0">
          <h2 className="text-brand-blue font-bold tracking-wider text-sm mb-2">خبراتي</h2>
          
          {/* Typography Fix: Changed leading-tight to flex layout for better Arabic spacing */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 flex flex-col gap-3">
            <span className="leading-normal">خدمات مُصممة</span>
            <span className="relative inline-block leading-normal w-fit mx-auto md:mx-0">
                للنمو والتأثير
                <span className="absolute bottom-2 right-0 w-full h-3 bg-brand-orange/20 -z-10"></span>
            </span>
          </h3>
          
          <p className="text-brand-dark/60 text-lg leading-loose">
            أجمع بين الدقة الجمالية وسيكولوجية التسويق لتقديم أعمال لا تبدو جميلة فقط، بل تحقق نتائج وأرقام حقيقية.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden text-right"
            >
              <div className="absolute top-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpLeft className="text-brand-blue transform rotate-45" />
              </div>

              <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 text-brand-blue shadow-sm">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-xl font-bold text-brand-dark mb-3 leading-normal">{service.title}</h4>
              <p className="text-brand-dark/60 leading-loose mb-6 flex-grow text-sm">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-bold px-2 py-1 bg-gray-100 rounded text-gray-500 border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 right-0 w-0 h-1.5 bg-brand-orange group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;