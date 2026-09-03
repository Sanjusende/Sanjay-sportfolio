import React from 'react';
import { FaCode, FaRocket, FaLightbulb, FaHandsHelping, FaCheck } from 'react-icons/fa';

const values = [
  {
    icon: <FaCode className="text-[#f59e0b] text-2xl" />,
    title: "Full-Stack Proficiency",
    badge: "MERN Stack",
    tagline: "End-to-End Implementation",
    description: "Ability to take ideas from frontend UI design down to database schemas and REST API endpoints without architectural fragmentation."
  },
  {
    icon: <FaRocket className="text-amber-500 text-2xl" />,
    title: "Problem Solver Mindset",
    badge: "DSA & Logic",
    tagline: "100+ LeetCode Solutions",
    description: "Strong foundation in data structures, computational time complexity, and clean modular code writing."
  },
  {
    icon: <FaLightbulb className="text-amber-400 text-2xl" />,
    title: "Modern Tech & AI Aware",
    badge: "Gemini AI & APIs",
    tagline: "Future-Ready Skills",
    description: "Hands-on experience integrating Google Gemini AI and third-party APIs into real user-facing workflows."
  },
  {
    icon: <FaHandsHelping className="text-emerald-500 text-2xl" />,
    title: "Reliable & Growth-Driven",
    badge: "3 Internships",
    tagline: "Fast Learner & Team Player",
    description: "Hands-on industry track record across ClaudWent Solution, HashedBit Innovations & Connect Shiksha shipping milestones on time with clean code."
  }
];

const WhyWorkWithMe = () => {
  return (
    <section className="py-20 bg-[#fcfaf6] dark:bg-[#090b11] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            07. VALUE PROPOSITION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            How I Bring <span className="text-[#f59e0b]">Ideas to Life</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Key engineering strengths and practical skills I bring to engineering teams and projects.
          </p>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="p-7 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 hover:border-[#fbb034] dark:hover:border-amber-500/40 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] dark:bg-[#181e30] flex items-center justify-center mb-4 border border-slate-100 dark:border-white/5">
                  {val.icon}
                </div>

                <span className="text-[10px] font-bold font-mono text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full uppercase block mb-2 w-fit border border-amber-200 dark:border-amber-500/20">
                  {val.badge}
                </span>

                <h3 className="text-lg font-bold text-[#0e1726] dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-snug mb-1">
                  {val.title}
                </h3>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {val.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;
