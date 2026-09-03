import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaShieldAlt, 
  FaRobot, 
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaGraduationCap
} from 'react-icons/fa';

const highlights = [
  {
    icon: <FaLaptopCode className="text-[#f59e0b] text-xl" />,
    title: "Full-Stack Development",
    description: "End-to-end web architecture with React, Node.js, Express, and modern styling tools."
  },
  {
    icon: <FaServer className="text-amber-500 text-xl" />,
    title: "REST API Development",
    description: "Designing robust CRUD endpoints, request validation, middleware, and error handling."
  },
  {
    icon: <FaDatabase className="text-emerald-500 text-xl" />,
    title: "MongoDB & Database Design",
    description: "Data modeling, Mongoose schemas, relationships, indexing, and query optimization."
  },
  {
    icon: <FaShieldAlt className="text-pink-500 text-xl" />,
    title: "Authentication & Security",
    description: "Secure user sessions with JWT tokens, bcrypt password hashing, and role-based access."
  },
  {
    icon: <FaRobot className="text-purple-400 text-xl" />,
    title: "AI Integration",
    description: "Practical integration of Google Gemini AI APIs for generative assistance and image analysis."
  },
  {
    icon: <FaProjectDiagram className="text-sky-400 text-xl" />,
    title: "Data Structures & Algorithms",
    description: "Core computer science fundamentals with 100+ problem solutions solved in Java & JavaScript."
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-[#faf8f5] dark:bg-[#0d0f17] text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            01. BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            Who is <span className="text-[#f59e0b]">Sanjay Sende?</span>
          </h2>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed bg-white dark:bg-[#121624] p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-md">
            <p className="text-lg font-bold text-[#0e1726] dark:text-white border-l-4 border-[#fbb034] pl-4 py-1">
              I'm a Computer Science & Engineering student and Full-Stack MERN Developer focused on building real-world web applications. I work across frontend development, backend APIs, databases, authentication and AI integrations.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              My development journey includes 3 Software Development Internships (ClaudWent Solution, HashedBit Innovations & Connect Shiksha) with hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              I emphasize writing clean, modular code, building intuitive responsive interfaces, and architecting reliable backend services with MongoDB, Express, and Node.js.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <FaMapMarkerAlt className="text-[#fbb034]" />
                <span>Bhopal, MP, India</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <FaGraduationCap className="text-[#f59e0b]" />
                <span>B.Tech in CSE (Exp. 2027)</span>
              </div>
            </div>
          </div>

          {/* Key Engineering Highlights Card (5 Cols) */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 shadow-md">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
              <span>Engineering Snapshot</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">Verified</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Software Internships</span>
                <span className="text-sm font-mono font-bold text-amber-500">3 Completed</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">LeetCode DSA Solved</span>
                <span className="text-sm font-mono font-bold text-[#f59e0b]">100+ Problems</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Diploma CGPA (Polytechnic)</span>
                <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">7.98 / 10.0</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Full-Stack Projects Built</span>
                <span className="text-sm font-mono font-bold text-[#0e1726] dark:text-white">4+ Applications</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 hover:border-[#fbb034] dark:hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#faf8f5] dark:bg-[#181e30] border border-slate-100 dark:border-white/5 flex items-center justify-center mb-4 shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-[#0e1726] dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
