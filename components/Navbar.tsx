import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'أعمالي', href: '#work' },
  { label: 'خدماتي', href: '#services' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصل معي', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-panel shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ر
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              ربيع<span className="text-brand-blue">العريفي</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-bold text-brand-dark hover:text-brand-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="group px-6 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-full transition-all hover:shadow-lg hover:bg-opacity-90 flex items-center gap-2"
            >
              ابدأ مشروعك
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer (Right Side) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white shadow-2xl z-[60] transform transition-transform duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-gray-100 shrink-0 bg-gray-50/50">
           {/* Logo (Right) */}
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ر
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-dark">
              ربيع<span className="text-brand-blue">العريفي</span>
            </span>
          </div>

          {/* Close Button (Left) - Absolute Positioned */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 left-5 p-2 text-gray-400 hover:text-brand-orange hover:bg-orange-50 rounded-full transition-all"
            aria-label="إغلاق القائمة"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 p-8 overflow-y-auto flex-grow">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors text-right border-b border-gray-50 pb-2 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="p-6 border-t border-gray-100 shrink-0 bg-gray-50">
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl shadow-lg shadow-brand-orange/20 hover:bg-opacity-90 transition-all active:scale-[0.98]"
          >
            اطلب استشارة مجانية
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;