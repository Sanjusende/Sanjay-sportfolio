import React from 'react';
import { FaGraduationCap, FaUniversity, FaAward, FaCalendarAlt } from 'react-icons/fa';

const educationList = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "Technocrats Institute of Technology (Excellence)",
    location: "Bhopal, MP",
    duration: "2024 – 2027",
    status: "Pursuing",
    cgpa: null,
    focus: [
      "Advanced Data Structures & Algorithms",
      "Full-Stack Web Architectures",
      "Database Management Systems & Cloud Integrations",
      "Object-Oriented Design Principles"
    ]
  },
  {
    degree: "Diploma in Engineering",
    major: "Mechanical Engineering",
    institution: "Govt. Polytechnic College",
    location: "Balaghat, MP",
    duration: "2020 – 2023",
    status: "Completed",
    cgpa: "7.98 / 10.0 CGPA",
    focus: [
      "Core Engineering Mathematics & Applied Physics",
      "Analytical Problem Solving & Modeling",
      "Technical Documentation & Engineering Projects"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#fcfaf6] dark:bg-[#090b11] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            05. ACADEMICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            Education <span className="text-[#f59e0b]">& Degrees</span>
          </h2>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="p-8 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 hover:border-[#fbb034] dark:hover:border-amber-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <FaGraduationCap size={20} />
                  </div>
                  <span className="text-xs font-bold font-mono text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-500/20">
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0e1726] dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {edu.major}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <FaUniversity className="text-[#fbb034] shrink-0" />
                  <span>{edu.institution}, {edu.location}</span>
                </div>

                {edu.cgpa && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-4 border border-emerald-200 dark:border-emerald-500/20">
                    <FaAward className="text-emerald-600 dark:text-emerald-400" />
                    <span>Graduated with {edu.cgpa}</span>
                  </div>
                )}

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Core Coursework:
                  </span>
                  {edu.focus.map((item, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fbb034]"></span>
                      <span>{item}</span>
                    </div>
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

export default Education;
