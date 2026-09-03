import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { 
  FaSun, 
  FaMoon, 
  FaArrowRight, 
  FaFileDownload,
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp 
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';
import resumePDF from '../assets/resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const allMobileLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Modern Glassmorphic Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:shadow-black/40 py-3 border-b border-slate-200/80 dark:border-white/10'
            : 'bg-white/70 dark:bg-[#07090e]/70 backdrop-blur-md py-4 border-b border-slate-200/40 dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            
            {/* Logo + Brand Name */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Sanjay Sende Portfolio Home"
            >
              <div className="relative">
               
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#07090e] animate-pulse" title="Available for work"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Sanjay <span className="text-orange-500 font-medium">Sende</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 -mt-0.5 hidden sm:block">
                  Full-Stack MERN Dev
                </span>
              </div>
            </a>

            {/* Floating Pill Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-lg shadow-inner">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-all duration-200 block ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold shadow-sm scale-100'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Quick Resume Button (Desktop) */}
              <a
                href={resumePDF}
                download="Sanjay_Sende_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 rounded-full border border-slate-200 dark:border-white/10 transition-all"
                title="Download Resume (PDF)"
              >
                <FaFileDownload className="text-orange-500 text-[11px]" />
                <span>Resume</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-amber-400 flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200 dark:border-white/10 shadow-sm cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                {theme === 'dark' ? (
                  <FaSun size={15} className="text-amber-400 transition-transform duration-500 hover:rotate-90" />
                ) : (
                  <FaMoon size={14} className="text-slate-700 transition-transform duration-500 hover:-rotate-45" />
                )}
              </button>

              {/* Primary "Let's Talk" CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95 transition-all duration-200"
              >
                <span>Let's Talk</span>
                <FaArrowRight className="text-[10px]" />
              </a>

              {/* Mobile Menu Hamburger Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-slate-700 dark:text-slate-200 hover:text-orange-500 bg-slate-100 dark:bg-white/10 rounded-xl focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
                </button>
              </div>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-2xl z-40 border-b border-slate-200 dark:border-white/10 px-6 py-6 flex flex-col justify-between max-h-[calc(100vh-65px)] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Navigation Menu</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for work
              </span>
            </div>

            {allMobileLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/10 flex flex-col gap-3">
            <a
              href={resumePDF}
              download="Sanjay_Sende_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full py-2.5 text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <FaFileDownload />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400 pt-1">
              <a href="https://github.com/Sanjusende" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white" title="GitHub">
                <FaGithub size={15} />
              </a>
              <a href="https://www.linkedin.com/in/sanjay-sende-20a3b3278/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-blue-500" title="LinkedIn">
                <FaLinkedin size={15} />
              </a>
              <a href="https://www.instagram.com/sanjusende_/profilecard/?igsh=emlra21qenpqMXZy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-pink-500" title="Instagram">
                <FaInstagram size={15} />
              </a>
              <a href="https://www.facebook.com/share/1CvydQr5bb/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-blue-600" title="Facebook">
                <FaFacebook size={15} />
              </a>
              <a href="https://web.whatsapp.com/send?phone=918815926552" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-emerald-500" title="WhatsApp">
                <FaWhatsapp size={15} />
              </a>
              <a href="https://leetcode.com/u/5xX6DHi5BQ/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-amber-500" title="LeetCode">
                <SiLeetcode size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
