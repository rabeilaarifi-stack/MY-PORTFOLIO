import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد الغامدي',
    role: 'مدير تسويق - نون',
    content: 'تعاملنا مع ربيع في حملة رمضان، وكانت النتائج مذهلة. تصاميم احترافية وفهم عميق للسوق السعودي.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'سارة العلي',
    role: 'مؤسسة متجر ليلي',
    content: 'صفحة الهبوط التي صممها ضاعفت مبيعاتنا بنسبة 150% في أسبوع واحد. أنصح به بشدة لأي متجر إلكتروني.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'فهد المطيري',
    role: 'رائد أعمال',
    content: 'السرعة في التنفيذ والجودة العالية هو ما يميز ربيع. الإعلانات التي أنتجها كانت الأفضل أداءً في تاريخ شركتنا.',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-wider text-sm mb-2">ماذا يقول العملاء</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark">شركاء النجاح</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-2xl relative flex flex-col gap-6 hover:border-brand-orange/50 transition-colors">
              <Quote className="absolute top-6 left-6 text-brand-lightblue/20" size={48} />
              
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f48221" className="text-brand-orange" />
                ))}
              </div>

              <p className="text-brand-dark/80 font-medium leading-loose relative z-10 text-lg">
                "{t.content}"
              </p>

              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange/20" />
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;