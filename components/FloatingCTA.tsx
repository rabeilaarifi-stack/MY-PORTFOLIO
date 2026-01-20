import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-brand-orange text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none group"
      aria-label="تواصل عبر واتساب"
    >
      <div className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-20 group-hover:opacity-0"></div>
      <MessageCircle size={32} />
      
      {/* Tooltip - Adjusted for RTL/Arabic */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-brand-dark text-white text-sm font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تحدث معي الآن
      </span>
    </a>
  );
};

export default FloatingCTA;