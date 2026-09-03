import React, { useState, useRef, useEffect } from 'react';
import { 
  FaComments, 
  FaTimes, 
  FaPaperPlane, 
  FaRedo, 
  FaExternalLinkAlt, 
  FaFileDownload, 
  FaWhatsapp, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt,
  FaRobot
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import logo from '../assets/logo.png';
import resumePDF from '../assets/resume.pdf';

const SANJAY_DATA = {
  name: "Sanjay Sende",
  title: "Full-Stack MERN Developer",
  location: "Bhopal, Madhya Pradesh, India",
  email: "shendesanju89@gmail.com",
  phone: "+91 8815926552",
  whatsapp: "https://web.whatsapp.com/send?phone=918815926552",
  linkedin: "https://www.linkedin.com/in/sanjay-sende-20a3b3278/",
  github: "https://github.com/Sanjusende",
  leetcode: "https://leetcode.com/u/5xX6DHi5BQ/",
  resume: resumePDF,
  
  internships: [
    {
      role: "Software Development Intern",
      company: "ClaudWent Solution Pvt. Ltd.",
      duration: "6 Months",
      points: [
        "Developed scalable REST APIs using React.js, Node.js, Express & MongoDB.",
        "Implemented JWT authentication and role-based access authorization.",
        "Collaborated in Agile/Scrum team workflows, code reviews, and quality assurance."
      ]
    },
    {
      role: "React Developer Intern",
      company: "HashedBit Innovations",
      duration: "Sep 2024 – Nov 2024",
      points: [
        "Built responsive, component-driven user interfaces with React.js & Tailwind CSS.",
        "Created modular, reusable UI components and handled state management.",
        "Performed bug fixes, cross-browser UI testing, and performance tuning."
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Connect Shiksha",
      duration: "Oct 2023 – Nov 2023",
      points: [
        "Implemented end-to-end full-stack CRUD functionality using React, Node & MongoDB.",
        "Integrated client-side state with backend APIs and maintained code on GitHub.",
        "Delivered mobile-friendly, responsive layouts across screens."
      ]
    }
  ],

  projects: [
    {
      name: "KrishiMitra AI Platform",
      desc: "Smart agricultural portal featuring Gemini Vision AI for crop disease detection, mandi crop pricing, and farmer advisory.",
      tech: "React.js, Node.js, Express.js, MongoDB, Gemini Vision AI",
      live: "https://krishimitra2026.vercel.app/",
      github: "https://github.com/Sanjusende/HackInMotion-RICR-HIM-1157"
    },
    {
      name: "Real Estate Management System",
      desc: "Comprehensive property marketplace with listings, advanced category filters, Redux state, and secure MERN stack backend.",
      tech: "React.js, Tailwind CSS, Node.js, Express, MongoDB, Redux",
      live: "https://real-state-managment-system.vercel.app/",
      github: "https://github.com/Sanjusende/Real_State_Managment_System"
    },
    {
      name: "Movie Seat Booking App",
      desc: "Interactive cinema seat selector with live pricing updates, seat reservation states, and responsive interface.",
      tech: "React.js, Tailwind CSS, LocalStorage",
      live: "https://movieseatbook.vercel.app/",
      github: "https://github.com/Sanjusende/HashedBit-Internship"
    },
    {
      name: "RS Photography Studio",
      desc: "Client-facing portfolio for professional photography studio with dynamic category filters and inquiry flow.",
      tech: "React.js, Tailwind CSS, Framer Motion",
      live: "https://rsphotography.vercel.app/",
      github: "https://github.com/Sanjusende/rsphotography"
    },
    {
      name: "Developer Portfolio System",
      desc: "Sleek portfolio built with modern aesthetics, dark mode, rich animations, and Web3Forms contact integration.",
      tech: "React.js, Tailwind CSS, Framer Motion, Web3Forms",
      live: "https://sanjay-sportfolio.vercel.app/",
      github: "https://github.com/Sanjusende/Sanjay-sportfolio"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Technocrats Institute of Technology (Excellence), Bhopal",
      duration: "2024 – 2027",
      status: "Pursuing"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institute: "Govt. Polytechnic College, Balaghat",
      duration: "2020 – 2023",
      status: "Completed (7.98 CGPA)"
    }
  ],

  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MVC Architecture"],
    database: ["MongoDB", "Mongoose", "PostgreSQL basics"],
    dsa: ["Java", "Data Structures & Algorithms", "100+ LeetCode Solved"],
    tools: ["Git", "GitHub", "Postman", "Vite", "Vercel", "VS Code"]
  }
};

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Namaste! 🙏 Main **Sanjay Sende** ka official AI Portfolio Assistant hoon.\n\nAap Sanjay ke **skills, 3 internships, live projects, resume ya contact details** ke bare me kuch bhi pooch sakte hain!",
    chips: [
      "Tell me about Sanjay",
      "3 Internships",
      "Projects & Live Links",
      "Tech Skills",
      "Download Resume",
      "Contact Info"
    ]
  }
];

function getBotResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // 1. GREETINGS
  if (/^(hi|hello|hey|namaste|pranam|hola|kaisa|kaise ho|hlo)/i.test(query)) {
    return {
      text: "Hello! 👋 Main Sanjay ka AI Assistant hoon. Main aapko Sanjay ki **internships, projects, skills, education, resume** aur **contact details** ke bare me sab bata sakta hoon. Aap kya jaan na chahte hain?",
      links: [
        { label: "View Resume", url: SANJAY_DATA.resume },
        { label: "LinkedIn Profile", url: SANJAY_DATA.linkedin }
      ]
    };
  }

  // 2. ABOUT SANJAY / INTRODUCTION
  if (query.includes('about') || query.includes('who is') || query.includes('bare me') || query.includes('intro') || query.includes('introduce') || query.includes('profile')) {
    return {
      text: `**Sanjay Sende** ek passionate **Full-Stack MERN Developer** hain from Bhopal, MP, India.\n\n` +
            `• 🎓 **Education**: B.Tech in CSE at TIT Bhopal (2024-2027) & Diploma from Govt. Polytechnic Balaghat (7.98 CGPA).\n` +
            `• 💼 **Experience**: **3 Software Development Internships** (ClaudWent Solution, HashedBit Innovations, Connect Shiksha).\n` +
            `• ⚡ **Tech Stack**: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs, JWT Auth.\n` +
            `• 🧩 **Problem Solving**: 100+ problems solved on LeetCode with Java.\n\n` +
            `Sanjay currently full-time MERN stack developer opportunities & internships ke liye open hain!`,
      links: [
        { label: "Download Resume", url: SANJAY_DATA.resume },
        { label: "Connect on LinkedIn", url: SANJAY_DATA.linkedin },
        { label: "LeetCode Profile", url: SANJAY_DATA.leetcode }
      ]
    };
  }

  // 3. INTERNSHIPS / EXPERIENCE
  if (query.includes('intern') || query.includes('experience') || query.includes('job') || query.includes('company') || query.includes('claudwent') || query.includes('hashedbit') || query.includes('connect shiksha') || query.includes('kaam kiya')) {
    let expText = `Sanjay ke paas **3 Real Software Development Internships** ka hands-on industry experience hai:\n\n`;
    SANJAY_DATA.internships.forEach((item, idx) => {
      expText += `**${idx + 1}. ${item.role} — ${item.company}** (${item.duration})\n`;
      item.points.forEach(pt => {
        expText += `   • ${pt}\n`;
      });
      expText += `\n`;
    });
    expText += `**Summary**: Proven experience across React.js, Node.js, Express, MongoDB, REST APIs, JWT Auth, Agile/Scrum & code reviews.`;

    return {
      text: expText,
      links: [
        { label: "Check Resume for Details", url: SANJAY_DATA.resume },
        { label: "LinkedIn Experience", url: SANJAY_DATA.linkedin }
      ]
    };
  }

  // 4. PROJECTS / LIVE DEMOS
  if (query.includes('project') || query.includes('krishimitra') || query.includes('real estate') || query.includes('movie') || query.includes('photography') || query.includes('live') || query.includes('work') || query.includes('demo')) {
    let projText = `Sanjay ne several impactful full-stack projects build kiye hain:\n\n`;
    SANJAY_DATA.projects.forEach((proj, idx) => {
      projText += `**${idx + 1}. ${proj.name}**\n` +
                  `   ${proj.desc}\n` +
                  `   🛠️ *Tech*: ${proj.tech}\n` +
                  `   🔗 [Live Demo](${proj.live}) | 💻 [GitHub](${proj.github})\n\n`;
    });
    return {
      text: projText,
      links: [
        { label: "KrishiMitra AI Live", url: "https://krishimitra2026.vercel.app/" },
        { label: "Real Estate Live", url: "https://real-state-managment-system.vercel.app/" },
        { label: "GitHub Profile", url: SANJAY_DATA.github }
      ]
    };
  }

  // 5. SKILLS / TECH STACK
  if (query.includes('skill') || query.includes('tech') || query.includes('mern') || query.includes('react') || query.includes('node') || query.includes('mongo') || query.includes('stack') || query.includes('language') || query.includes('java')) {
    return {
      text: `Sanjay ka technical expertise:\n\n` +
            `• **Frontend**: ${SANJAY_DATA.skills.frontend.join(", ")}\n` +
            `• **Backend**: ${SANJAY_DATA.skills.backend.join(", ")}\n` +
            `• **Databases**: ${SANJAY_DATA.skills.database.join(", ")}\n` +
            `• **Problem Solving & DSA**: ${SANJAY_DATA.skills.dsa.join(", ")}\n` +
            `• **Tools & Platforms**: ${SANJAY_DATA.skills.tools.join(", ")}\n\n` +
            `Special focus: Production-grade RESTful APIs, clean modular React architecture, authentication, and responsive UI.`,
      links: [
        { label: "LeetCode (100+ Solved)", url: SANJAY_DATA.leetcode },
        { label: "GitHub Codebase", url: SANJAY_DATA.github }
      ]
    };
  }

  // 6. RESUME / CV
  if (query.includes('resume') || query.includes('cv') || query.includes('biodata') || query.includes('download')) {
    return {
      text: `Aap Sanjay Sende ka verified resume neeche diye link se direct view aur download kar sakte hain:\n\n` +
            `📄 **Sanjay Sende Resume (PDF)**\n` +
            `Includes: 3 Internships, Top Projects, Education & Technical Skills.`,
      links: [
        { label: "📄 Download / View Resume", url: SANJAY_DATA.resume }
      ]
    };
  }

  // 7. LEETCODE / DSA / PROBLEM SOLVING
  if (query.includes('leetcode') || query.includes('dsa') || query.includes('algorithm') || query.includes('problem solving') || query.includes('coding')) {
    return {
      text: `Sanjay active problem-solver hain:\n\n` +
            `• **LeetCode Profile**: [leetcode.com/u/5xX6DHi5BQ/](${SANJAY_DATA.leetcode})\n` +
            `• **Stats**: 100+ Data Structures & Algorithms problems solved.\n` +
            `• **Languages**: Java, JavaScript.\n` +
            `• **Key Topics**: Arrays, Strings, Two Pointers, Sliding Window, Linked Lists, Recursion.`,
      links: [
        { label: "Visit LeetCode Profile", url: SANJAY_DATA.leetcode }
      ]
    };
  }

  // 8. EDUCATION / COLLEGE / DEGREE
  if (query.includes('education') || query.includes('college') || query.includes('degree') || query.includes('btech') || query.includes('polytechnic') || query.includes('school') || query.includes('padhai')) {
    return {
      text: `Sanjay ka academic background:\n\n` +
            `1. 🎓 **B.Tech in Computer Science & Engineering** (2024 – 2027)\n` +
            `   Technocrats Institute of Technology (Excellence), Bhopal\n` +
            `   Focus: Data Structures, Algorithms, Web Architectures, Database Systems.\n\n` +
            `2. 📜 **Diploma in Mechanical Engineering** (2020 – 2023)\n` +
            `   Govt. Polytechnic College, Balaghat, MP\n` +
            `   Score: **7.98 / 10.0 CGPA** (First Class with Distinction).`,
      links: [
        { label: "View Resume", url: SANJAY_DATA.resume }
      ]
    };
  }

  // 9. CONTACT / HIRE / OPPORTUNITY / PHONE / EMAIL
  if (query.includes('contact') || query.includes('hire') || query.includes('phone') || query.includes('email') || query.includes('whatsapp') || query.includes('call') || query.includes('number') || query.includes('kaise mile') || query.includes('location') || query.includes('opportunity')) {
    return {
      text: `Aap Sanjay se directly in channels ke through connect kar sakte hain:\n\n` +
            `• 📧 **Email**: [shendesanju89@gmail.com](mailto:${SANJAY_DATA.email})\n` +
            `• 📱 **Phone / WhatsApp**: [${SANJAY_DATA.phone}](tel:${SANJAY_DATA.phone.replace(/\\s/g, '')})\n` +
            `• 💬 **WhatsApp Chat**: [Click to message on WhatsApp](${SANJAY_DATA.whatsapp})\n` +
            `• 💼 **LinkedIn**: [linkedin.com/in/sanjay-sende-20a3b3278](${SANJAY_DATA.linkedin})\n` +
            `• 📍 **Location**: Bhopal, Madhya Pradesh, India\n\n` +
            `Sanjay is actively available for Full-Stack / MERN Developer roles and internships!`,
      links: [
        { label: "Chat on WhatsApp", url: SANJAY_DATA.whatsapp },
        { label: "Connect on LinkedIn", url: SANJAY_DATA.linkedin },
        { label: "Send Email", url: `mailto:${SANJAY_DATA.email}` }
      ]
    };
  }

  // DEFAULT / FALLBACK
  return {
    text: `Main Sanjay Sende ke bare me sab jaanta hoon! Aap inme se kisi bhi topic ke bare me pooch sakte hain:\n\n` +
          `• 💼 **3 Internships** (ClaudWent, HashedBit, Connect Shiksha)\n` +
          `• 🚀 **Projects** (KrishiMitra AI, Real Estate System, Movie Booking)\n` +
          `• ⚡ **Tech Stack** (React, Node.js, Express, MongoDB, Tailwind)\n` +
          `• 🧩 **LeetCode & DSA** (100+ solved)\n` +
          `• 🎓 **Education** (B.Tech CSE TIT Bhopal)\n` +
          `• 📄 **Resume Download**\n` +
          `• 📞 **Contact Information**`,
    links: [
      { label: "Resume PDF", url: SANJAY_DATA.resume },
      { label: "LinkedIn", url: SANJAY_DATA.linkedin },
      { label: "WhatsApp", url: SANJAY_DATA.whatsapp }
    ]
  };
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate smart thinking/typing
    setTimeout(() => {
      const botResponse = getBotResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponse.text,
        links: botResponse.links
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <div className="relative group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open Sanjay AI Chatbot"
            className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer ${
              isOpen 
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 rotate-90 scale-95' 
                : 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-slate-950 shadow-orange-500/35 hover:shadow-orange-500/50 hover:scale-110 active:scale-95 ring-4 ring-orange-500/20'
            }`}
            title="Chat with Sanjay's AI"
          >
            {isOpen ? (
              <FaTimes size={20} />
            ) : (
              <>
                <FaComments size={24} />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white dark:ring-slate-900"></span>
                </span>
              </>
            )}
          </button>

          {/* Quick Floating Tooltip / Label */}
          {!isOpen && (
            <div 
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex absolute left-16 top-1/2 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#121624] border border-slate-200/80 dark:border-white/10 shadow-lg text-xs font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap cursor-pointer hover:border-orange-500 transition-all pointer-events-auto"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Ask Sanjay AI</span>
              <span className="text-orange-500 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-orange-50 dark:bg-orange-500/10">Online</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] max-h-[580px] h-[550px] bg-white dark:bg-[#0c0f18] rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-2xl shadow-black/30 flex flex-col overflow-hidden backdrop-blur-2xl transition-all animate-fadeIn"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Modal Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-slate-950 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-white/90 p-0.5 shadow-sm">
                <img src={logo} alt="Sanjay Logo" className="w-full h-full object-contain" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-white"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold leading-tight">Sanjay AI Assistant</h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-slate-950/15 font-bold uppercase">Bot</span>
                </div>
                <p className="text-[11px] text-slate-900/80 font-medium">Ask anything about Sanjay</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-full hover:bg-black/10 text-slate-950 transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <FaRedo size={12} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/10 text-slate-950 transition-colors cursor-pointer"
                title="Close chat"
              >
                <FaTimes size={15} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 px-4 py-4 overflow-y-auto space-y-3.5 bg-[#fcfaf6] dark:bg-[#0c0f18]/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-medium rounded-tr-none shadow-sm'
                      : 'bg-white dark:bg-[#151928] text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-white/10 rounded-tl-none shadow-sm whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Action Links attached to bot responses */}
                {msg.links && msg.links.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                    {msg.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 hover:bg-orange-500 hover:text-slate-950 dark:hover:text-slate-950 transition-all shadow-xs"
                      >
                        <span>{link.label}</span>
                        <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Prompt Suggestion Chips (on initial message) */}
                {msg.chips && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip)}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-white/5 hover:bg-orange-500 hover:text-slate-950 dark:hover:bg-orange-500 dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white dark:bg-[#151928] border border-slate-200/70 dark:border-white/10 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-bounce [animation-delay:0.3s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-3 py-1.5 bg-slate-100/70 dark:bg-white/5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-[10px] font-mono">Suggested:</span>
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <button
                onClick={() => handleSend("Tell me about 3 internships")}
                className="px-2 py-0.5 rounded-md hover:bg-orange-500/10 hover:text-orange-500 text-[10px] whitespace-nowrap cursor-pointer"
              >
                💼 Internships
              </button>
              <button
                onClick={() => handleSend("Show projects with live links")}
                className="px-2 py-0.5 rounded-md hover:bg-orange-500/10 hover:text-orange-500 text-[10px] whitespace-nowrap cursor-pointer"
              >
                🚀 Projects
              </button>
              <button
                onClick={() => handleSend("Download resume")}
                className="px-2 py-0.5 rounded-md hover:bg-orange-500/10 hover:text-orange-500 text-[10px] whitespace-nowrap cursor-pointer"
              >
                📄 Resume
              </button>
              <button
                onClick={() => handleSend("How to contact Sanjay")}
                className="px-2 py-0.5 rounded-md hover:bg-orange-500/10 hover:text-orange-500 text-[10px] whitespace-nowrap cursor-pointer"
              >
                📞 Contact
              </button>
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-[#0c0f18] border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Sanjay..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className={`p-2.5 rounded-xl transition-all ${
                inputValue.trim()
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md shadow-orange-500/25 cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-400 cursor-not-allowed'
              }`}
              title="Send message"
            >
              <FaPaperPlane size={13} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
