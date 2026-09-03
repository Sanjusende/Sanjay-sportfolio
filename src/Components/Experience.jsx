import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    role: "Software Development Intern",
    company: "ClaudWent Solution Pvt. Ltd.",
    period: "Recent",
    duration: "6 Months",
    highlights: [
      "Engineered robust RESTful APIs and full-stack features using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented secure JWT user authentication and role-based access authorization protocols.",
      "Participated actively in Agile/Scrum sprints, peer code reviews, and quality assurance workflows.",
      "Optimized database queries and structured scalable backend schemas for seamless web performance."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Agile / Scrum"]
  },
  {
    role: "React Developer Intern",
    company: "HashedBit Innovations",
    period: "Sep 2024 – Nov 2024",
    duration: "3 Months",
    highlights: [
      "Developed high-performance frontend interfaces utilizing React.js and modern utility styling with Tailwind CSS.",
      "Built modular, highly reusable component architectures for improved maintainability and scalability.",
      "Ensured pixel-perfect responsive user experiences across mobile, tablet, and desktop viewports.",
      "Conducted thorough bug fixing, cross-browser debugging, and frontend UI optimization."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Component Architecture", "Responsive UI"]
  },
  {
    role: "MERN Stack Intern",
    company: "Connect Shiksha",
    period: "Oct 2023 – Nov 2023",
    duration: "2 Months",
    highlights: [
      "Architected and implemented end-to-end full-stack CRUD capabilities using React, Node.js, and MongoDB.",
      "Designed clean, responsive interfaces with intuitive user interaction flows.",
      "Collaborated via Git and GitHub for version control, code quality checks, and structured code reviews.",
      "Integrated backend endpoints with frontend client states for real-time data synchronization."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Full-Stack CRUD", "Git & GitHub"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#faf8f5] dark:bg-[#0d0f17] text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            03. CAREER TIMELINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            Work <span className="text-[#f59e0b]">Experience</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            3 Software Development Internships — ClaudWent Solution, HashedBit Innovations & Connect Shiksha, with hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs and JWT authentication.
          </p>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Marker Pill */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#121624] border-2 border-[#fbb034] flex items-center justify-center text-[#fbb034] shadow-sm">
                <FaBriefcase size={12} />
              </div>

              {/* Date chip on desktop */}
              <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-amber-500 block">
                  {exp.period}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  {exp.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-lg dark:hover:border-amber-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#0e1726] dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-500 mt-0.5">
                      <FaBuilding size={12} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="sm:hidden flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 font-bold text-amber-500">
                      {exp.duration}
                    </span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {(exp.highlights || []).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-[#fbb034] text-xs shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/10">
                  {(exp.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-[#181e30] border border-slate-200 dark:border-white/5 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
