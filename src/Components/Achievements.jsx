import React from 'react';
import { FaCode, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaAward, FaCheckCircle, FaStar } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    icon: <SiLeetcode className="text-amber-500 text-2xl" />,
    stats: "100+ Problems Solved",
    title: "LeetCode Problem Solver",
    category: "Data Structures & Algorithms",
    description: "Consistent problem-solving track record across Arrays, Strings, Hash Maps, Two Pointers, Linked Lists, Binary Trees, and Recursion using Java and JavaScript.",
    link: "https://leetcode.com/u/5xX6DHi5BQ/",
    linkText: "View LeetCode Profile"
  },
  {
    icon: <FaBriefcase className="text-amber-500 text-2xl" />,
    stats: "3 Software Internships",
    title: "Verified Industry Experience",
    category: "Full-Stack Web Engineering",
    description: "Hands-on engineering across 3 internships at ClaudWent Solution Pvt. Ltd. (6 mos), HashedBit Innovations, and Connect Shiksha building full-stack MERN features, REST APIs, and responsive UIs.",
    link: "#experience",
    linkText: "View Timeline"
  },
  {
    icon: <FaAward className="text-amber-500 text-2xl" />,
    stats: "5 Production Deployments",
    title: "Full-Stack Project Deliveries",
    category: "Live Web Applications",
    description: "Architected, built, and publicly deployed 5 real-world web applications with database management, responsive UI, ticket reservations, and AI integrations on Vercel.",
    link: "#projects",
    linkText: "View Live Projects"
  }
];

const certifications = [
  {
    name: "Software Development Internship",
    issuer: "ClaudWent Solution Pvt. Ltd.",
    period: "6 Months",
    type: "Industry Internship"
  },
  {
    name: "React Developer Internship",
    issuer: "HashedBit Innovations",
    period: "Sep 2024 – Nov 2024",
    type: "Industry Internship"
  },
  {
    name: "MERN Stack Web Development Internship",
    issuer: "Connect Shiksha",
    period: "Oct 2023 – Nov 2023",
    type: "Industry Internship"
  },
  {
    name: "Java & Object-Oriented Programming Fundamentals",
    issuer: "Academic & Self-Paced Training",
    period: "2023 – Present",
    type: "Core Skill"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#faf8f5] dark:bg-[#0d0f17] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            06. VERIFIED MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            Achievements & <span className="text-[#f59e0b]">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Real milestone accomplishments and verifiable technical certifications.
          </p>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 hover:border-[#fbb034] dark:hover:border-amber-500/40 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-500/20">
                    {item.stats}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0e1726] dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-tight mb-1">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#f59e0b] block mb-3">
                  {item.category}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 shadow-md">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-[#f59e0b] flex items-center justify-center">
              <FaCertificate size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0e1726] dark:text-white">
                Technical Certifications & Training
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified training and practical internship credentials
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-200/80 dark:border-white/5 hover:border-[#fbb034] dark:hover:border-amber-500/30 hover:bg-white dark:hover:bg-[#1f273d] transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-amber-500 dark:text-amber-400 mb-2">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-[#121624] px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 w-fit">
                  {cert.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
