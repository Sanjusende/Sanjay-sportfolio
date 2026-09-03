import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSun, FaHeart, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1726] text-white pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">Sanjay</span>
              <FaSun className="text-[#fbb034] text-lg" />
              <span className="text-xs font-handwriting text-2xl text-[#38bdf8] ml-[-2px] pt-1">
                .dev
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Full-Stack MERN Developer crafting practical, scalable, and high-performance web applications with clean code architecture and AI technologies.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://github.com/Sanjusende"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white hover:text-[#0e1726] text-slate-300 flex items-center justify-center transition-all"
                title="GitHub"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-sende-20a3b3278/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-slate-300 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/sanjusende_/profilecard/?igsh=emlra21qenpqMXZy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/share/1CvydQr5bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                title="Facebook"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=918815926552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href="https://leetcode.com/u/5xX6DHi5BQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f59e0b] hover:text-[#0e1726] text-slate-300 flex items-center justify-center transition-all"
                title="LeetCode"
              >
                <SiLeetcode size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#fbb034] font-bold">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Selected Projects</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education & Degrees</a></li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#fbb034] font-bold">
              LET'S CONNECT
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a href="mailto:shendesanju89@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope className="text-[#38bdf8]" />
                <span>shendesanju89@gmail.com</span>
              </a>
              <a href="tel:+918815926552" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhoneAlt className="text-[#fbb034]" />
                <span>+91 8815926552</span>
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Circular Badge / Motto (2 Cols - matching the "Design with heart" stamp in reference) */}
          <div className="lg:col-span-2 flex items-center justify-start lg:justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#fbb034]/60 flex flex-col items-center justify-center text-center p-2 transform hover:rotate-12 transition-transform duration-300">
              <span className="text-[10px] font-handwriting text-lg text-[#fbb034] leading-tight">
                Built with passion
              </span>
              <FaHeart className="text-[#fbb034] text-xs mt-0.5" />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Sanjay Sende. All rights reserved.</p>
          <p className="font-handwriting text-base text-slate-400">
            Crafting software that inspires & performs ☀️
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
