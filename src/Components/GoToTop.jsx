import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-white/90 dark:bg-[#121624]/90 hover:bg-orange-500 hover:text-slate-950 dark:hover:bg-orange-500 dark:hover:text-slate-950 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
      title="Scroll to top"
    >
      <FaArrowUp className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default GoToTop;
