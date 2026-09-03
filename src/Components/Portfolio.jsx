import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';

import krishiMitra from '../assets/krishi_mitra.png';
import rsPhotography from '../assets/rsphotography.png';
import realState from '../assets/real_state.png';
import movieBooking from '../assets/movie.png';
import sanjuDev from '../assets/sanju.jpg';

const projects = [
  {
    id: 1,
    title: "KrishiMitra AI Platform",
    subtitle: "AI-Powered Agriculture Ecosystem",
    description: "An end-to-end intelligent agricultural management system designed to assist farmers with real-time crop disease diagnosis, weather insights, dynamic marketplace for equipment/seeds, and an AI advisory assistant.",
    image: krishiMitra,
    categories: ['fullstack', 'ai'],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "Tailwind CSS", "JWT Auth"],
    features: [
      "AI crop disease diagnosis with Gemini Vision API",
      "Real-time farmer marketplace with cart & checkout",
      "Dynamic weather alerts and localized advisories",
      "Secure user authentication with JWT & bcrypt"
    ],
    live: "https://krishimitra2026.vercel.app/",
    github: "https://github.com/Sanjusende/HackInMotion-RICR-HIM-1157",
    featured: true,
    typeBadge: "Full-Stack + AI System"
  },
  {
    id: 2,
    title: "Real Estate Management System",
    subtitle: "Property Discovery & Inquiry Portal",
    description: "A full-stack real estate platform for browsing, searching, buying, and renting properties with user authentication, property listings, dynamic filters, and agent contact features.",
    image: realState,
    categories: ['fullstack', 'frontend'],
    technologies: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Multi-criteria property search (price, location, type)",
      "Detailed property view with high-res photo carousels",
      "Direct agent inquiry and scheduled tour bookings",
      "Mortgage estimation and EMI calculation tools"
    ],
    live: "https://real-state-managment-system.vercel.app/",
    github: "https://github.com/Sanjusende/Real_State_Managment_System",
    featured: true,
    typeBadge: "Full-Stack Portal"
  },
  {
    id: 3,
    title: "Movie Seat Booking",
    subtitle: "Cinema Ticket & Seat Reservation Platform",
    description: "The movie seat booking feature enables users to view real-time cinema seat availability, select preferred rows and seats, dynamically calculate total ticket price, and simulate instant booking confirmation.",
    image: movieBooking,
    categories: ['frontend', 'fullstack'],
    technologies: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
    features: [
      "Dynamic cinema seat grid with live seat selection",
      "Real-time occupied vs available seat indicators",
      "Dynamic ticket counter and automated pricing calculator",
      "Responsive UI optimized for desktop and mobile devices"
    ],
    live: "https://movieseatbook.vercel.app/",
    github: "https://github.com/Sanjusende/HashedBit-Internship",
    featured: true,
    typeBadge: "Interactive Web App"
  },
  {
    id: 4,
    title: "RS Photography Studio Platform",
    subtitle: "Creative Showcase & Booking Management",
    description: "A full-stack photography portfolio and management application built to showcase photography work, category filtering, package booking inquiry workflows, and manage portfolio content.",
    image: rsPhotography,
    categories: ['fullstack', 'frontend'],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Web3Forms"],
    features: [
      "Interactive photography gallery with category filters",
      "Client package booking workflow with validation",
      "Automated email inquiry notification system",
      "Modern animations and lightbox image modal view"
    ],
    live: "https://rsphotography.vercel.app/",
    github: "https://github.com/Sanjusende/rsphotography",
    featured: true,
    typeBadge: "Production Web App"
  },
  {
    id: 5,
    title: "Developer Portfolio System",
    subtitle: "High-Performance Portfolio & Showcase",
    description: "A developer portfolio built with React.js, Tailwind CSS, and Framer Motion. Engineered for recruiter clarity with structured experience timelines, interactive skill matrices, and verified metrics.",
    image: sanjuDev,
    categories: ['frontend'],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Web3Forms API", "Responsive UI"],
    features: [
      "Dynamic category filtering across project catalog",
      "Dark and Light theme toggle with state persistence",
      "Direct Web3Forms contact submission with feedback",
      "Semantic HTML5 structure and SEO optimization"
    ],
    live: "https://sanjay-sportfolio.vercel.app/",
    github: "https://github.com/Sanjusende/Sanjay-sportfolio",
    featured: false,
    typeBadge: "Frontend Architecture"
  }
];

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack MERN' },
  { id: 'ai', label: 'AI-Powered' },
  { id: 'frontend', label: 'Frontend & UI' }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-[#fcfaf6] dark:bg-[#090b11] text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#fef3c7] dark:bg-amber-500/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold font-mono tracking-wider text-[#f59e0b] uppercase block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight relative">
              Recent <br className="hidden sm:block" />
              <span className="text-[#f59e0b]">
                Projects & Work
              </span>
              <svg className="w-20 sm:w-28 h-3 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M2 6 Q 15 1, 30 6 T 60 6 T 90 6" />
              </svg>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md">
              Every project is unique. Here are a few full-stack & AI systems I'm proud to have built.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#fbb034] text-[#0e1726] shadow-md shadow-amber-500/20'
                    : 'bg-white dark:bg-[#121624] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181e30] border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#121624] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-xl dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Project Image Preview Box */}
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 dark:bg-[#0d0f17] skeleton-shimmer overflow-hidden m-3 rounded-2xl border border-slate-100 dark:border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    {/* Top Pill Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#0d0f17]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 dark:text-amber-400 shadow-sm border border-slate-200 dark:border-white/10">
                      {project.typeBadge}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 pt-2">
                    <h3 className="text-lg font-bold text-[#0e1726] dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1 mb-4 text-[11px] text-slate-700 dark:text-slate-300">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <FaCheckCircle className="text-[#fbb034] text-[10px] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#181e30] text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300 border border-transparent dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-white/10 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors"
                  >
                    <FaGithub size={13} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-[#fef3c7] dark:bg-amber-500/10 hover:bg-[#fbb034] text-[#0e1726] dark:text-amber-400 dark:hover:text-[#0e1726] text-xs font-bold transition-all duration-200 group/btn"
                  >
                    <span>Live Demo</span>
                    <div className="w-6 h-6 rounded-full bg-[#fbb034] group-hover/btn:bg-white text-[#0e1726] flex items-center justify-center transition-colors">
                      <FaArrowRight size={10} />
                    </div>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
