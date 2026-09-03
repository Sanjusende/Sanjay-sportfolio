import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import sanju from '../assets/sanju.jpg';
import resumePDF from '../assets/resume.pdf';
import { useTheme } from '../context/ThemeContext';

const roles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React.js Specialist",
  "Backend & API Architect"
];

const Hero = () => {
  const { theme } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? role.substring(0, currentText.length - 1)
            : role.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#faf8f5] dark:bg-[#07090e] text-slate-800 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content (7 Cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col text-left z-10"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Tagline: — HELLO, I'M — */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#f97316]"></span>
              <span className="text-xs sm:text-sm font-bold font-mono uppercase tracking-widest text-[#f97316]">
                HELLO, I'M
              </span>
              <span className="w-6 h-[2px] bg-[#f97316]"></span>
            </div>

            {/* Main Name: Sanjay (Dark in Light Mode / White in Dark Mode) Sende (Orange) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-[#0e1726] dark:text-white tracking-tight leading-[1.08] mb-3">
              Sanjay <span className="text-[#f97316] bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Sende</span>
            </h1>


            {/* Subtitle with Animated Typing Effect */}
            <div className="flex items-center text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-5 min-h-[40px]">
              <span>{currentText}</span>
              <span className="text-orange-500 animate-pulse font-normal ml-1">|</span>
            </div>

            {/* Descriptive Body Paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* Primary Orange Pill CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 text-sm font-extrabold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <span>HIRE ME</span>
                <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Button: View Work */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white dark:bg-[#121620] hover:bg-slate-50 dark:hover:bg-[#181e2b] text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-orange-500 text-sm font-bold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>VIEW WORK</span>
                <FaExternalLinkAlt className="text-xs text-orange-500" />
              </a>

              {/* Resume / CV Link */}
              <a
                href={resumePDF}
                download="Sanjay_Sende_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-amber-500 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-xs font-bold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                title="Download CV"
              >
                <FaFileDownload className="text-xs" />
                <span>RESUME</span>
              </a>
            </div>

            {/* Status Indicator: ● AVAILABLE FOR OPPORTUNITIES */}
            <div className="flex items-center gap-2.5 mb-6 text-xs sm:text-sm font-mono tracking-wider font-semibold text-slate-600 dark:text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="uppercase text-[11px] sm:text-xs">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/Sanjusende"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121620] hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-800 hover:border-slate-900 shadow-sm"
                title="GitHub"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-sende-20a3b3278/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121620] hover:bg-[#0077b5] hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-800 hover:border-[#0077b5] shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin size={15} />
              </a>


              <a
                href="https://leetcode.com/u/sanjaysende"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121620] hover:bg-amber-500 hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-sm"
                title="LeetCode"
              >
                <SiLeetcode size={15} />
              </a>

            </div>

          </motion.div>

          {/* Right Hero Visual Area (5 Cols) with Orbital Tech Rings & Badges */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-[420px] aspect-[1/1] flex items-center justify-center">

              {/* Outer Circular Tech Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/25 dark:border-orange-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-orange-500/20 dark:border-orange-500/15 pointer-events-none" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-orange-500/15 via-transparent to-amber-500/15 dark:from-orange-500/10 dark:to-amber-500/10 blur-xl pointer-events-none" />

              {/* Profile Image with Rounded Orange Circle Frame */}
              <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden flex items-center justify-center shadow-2xl shadow-orange-500/15 border-2 border-orange-500/30 bg-white dark:bg-[#121620]">
                <img
                  src={sanju}
                  alt="Sanjay Sende"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Tech Badge: React.js (Top Right) */}
              <motion.div
                className="absolute -top-2 right-2 bg-white/95 dark:bg-[#121620]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-500/30 text-sky-500 dark:text-sky-400 flex items-center gap-2 shadow-xl z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <SiReact className="text-base text-sky-500 dark:text-sky-400 animate-spin-slow" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">React.js</span>
              </motion.div>

              {/* Floating Tech Badge: Node.js (Mid Left) */}
              <motion.div
                className="absolute top-1/4 -left-6 bg-white/95 dark:bg-[#121620]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 shadow-xl z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              >
                <SiNodedotjs className="text-base text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">Node.js</span>
              </motion.div>

              {/* Floating Tech Badge: Express.js (Bottom Left) */}
              <motion.div
                className="absolute bottom-6 -left-3 bg-white/95 dark:bg-[#121620]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center gap-2 shadow-xl z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <SiExpress className="text-base text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">Express.js</span>
              </motion.div>

              {/* Floating Tech Badge: MongoDB (Bottom Right) */}
              <motion.div
                className="absolute bottom-2 right-4 bg-white/95 dark:bg-[#121620]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 shadow-xl z-20"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
              >
                <SiMongodb className="text-base text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">MongoDB</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
