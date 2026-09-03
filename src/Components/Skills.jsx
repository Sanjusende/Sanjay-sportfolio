import React from 'react';
import { 
  FaJava, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaTerminal 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMongoose, 
  SiJsonwebtokens, 
  SiPostman 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBinaryTree, TbLayersIntersect, TbNetwork, TbCpu } from 'react-icons/tb';
import { MdSecurity, MdOutlineStorage } from 'react-icons/md';

const skillCategories = [
  {
    category: "Languages",
    description: "Core programming languages for system logic and web architecture",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" />, level: "OOP / DSA" },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-amber-500" />, level: "Modern Async / DOM" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Responsive, accessible, and reactive user interfaces",
    skills: [
      { name: "React.js", icon: <FaReact className="text-sky-500" />, level: "Hooks / State / Routing" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: "Utility-First Styling" },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Semantic Markup" },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Flexbox & Grid" },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: "Responsive UI" }
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side architecture, business logic, and API endpoints",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" />, level: "Runtime Environment" },
      { name: "Express.js", icon: <SiExpress className="text-slate-800 dark:text-slate-200" />, level: "REST API Framework" },
      { name: "RESTful APIs", icon: <FaTerminal className="text-sky-500" />, level: "Endpoints & Middleware" }
    ]
  },
  {
    category: "Database Management",
    description: "NoSQL schema modeling and data persistence",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, level: "Document Store" },
      { name: "Mongoose", icon: <SiMongoose className="text-red-500" />, level: "ODM & Validation" }
    ]
  },
  {
    category: "Authentication & Security",
    description: "Identity verification and data protection standards",
    skills: [
      { name: "JWT (Tokens)", icon: <SiJsonwebtokens className="text-pink-500" />, level: "Stateless Auth" },
      { name: "bcrypt", icon: <MdSecurity className="text-emerald-500" />, level: "Password Hashing" }
    ]
  },
  {
    category: "Developer Tools",
    description: "Version control, API testing, and coding environments",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: "Version Control" },
      { name: "GitHub", icon: <FaGithub className="text-slate-800 dark:text-slate-200" />, level: "Collaboration" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: "API Testing" },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" />, level: "Primary IDE" },
      { name: "MongoDB Compass", icon: <SiMongodb className="text-emerald-500" />, level: "GUI Management" }
    ]
  },
  {
    category: "Core Computer Science",
    description: "Fundamental engineering principles and algorithms",
    skills: [
      { name: "Data Structures & Algorithms", icon: <TbBinaryTree className="text-sky-500" />, level: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", icon: <TbLayersIntersect className="text-indigo-400" />, level: "Architecture" },
      { name: "DBMS", icon: <MdOutlineStorage className="text-amber-500" />, level: "Database Systems" },
      { name: "Operating Systems", icon: <TbCpu className="text-emerald-500" />, level: "Core Concepts" },
      { name: "Computer Networks", icon: <TbNetwork className="text-purple-400" />, level: "Protocols & TCP/IP" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#faf8f5] dark:bg-[#0d0f17] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#f59e0b] mb-2">
            02. TECHNICAL TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e1726] dark:text-white tracking-tight">
            Skills & <span className="text-[#f59e0b]">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Practical full-stack development toolkit with a solid foundation in core computer science concepts.
          </p>
          <svg className="w-16 h-2 text-[#fbb034] mt-1" viewBox="0 0 100 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M2 6 Q 25 1, 50 6 T 98 6" />
          </svg>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`p-6 rounded-3xl bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 hover:border-[#fbb034] dark:hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${
                idx === skillCategories.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-[#0e1726] dark:text-white">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/20">
                    {cat.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-50 dark:bg-[#181e30] border border-slate-100 dark:border-white/5 hover:border-[#fbb034] dark:hover:border-amber-500/30 transition-all duration-200"
                    >
                      <span className="text-lg transition-transform group-hover:scale-110">
                        {skill.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.level}
                        </span>
                      </div>
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

export default Skills;
