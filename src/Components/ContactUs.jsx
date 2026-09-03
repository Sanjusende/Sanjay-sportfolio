import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaSpinner, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        state: 'error',
        message: 'Please fill in your name, email, and message.'
      });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      const payload = {
        ...formData,
        access_key: "7f1e229c-5d94-47ed-91a7-46b4eac04885",
        subject: formData.subject ? `Portfolio: ${formData.subject}` : `New Portfolio Message from ${formData.name}`,
        from_name: "Sanjay Sende Portfolio"
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message was sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Something went wrong. Please reach out directly via email.'
        });
      }
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'Network error. Please email me directly at shendesanju89@gmail.com'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#faf8f5] dark:bg-[#07090e] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 dark:bg-orange-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Contact Card Shell */}
        <div className="rounded-[2.5rem] bg-white dark:bg-[#0d1017] p-8 sm:p-12 lg:p-16 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-white/10 transition-colors duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Contact Info (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                {/* Subtitle Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-[2px] bg-orange-500"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                    LET'S CONNECT
                  </span>
                </div>

                {/* Big Headline */}
                <h2 className="text-xl sm:text-xl lg:text-xl font-extrabold font-display text-[#0e1726] dark:text-white tracking-tight leading-[1.18] mb-5">
                  Looking for an <br />
                  <span className="text-[#f97316] bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                    internship, job opportunity,
                  </span> <br />
                  or collaboration?
                </h2>


                {/* Description Paragraph */}
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                  I’m a Computer Science student and Full-Stack MERN Developer. Feel free to reach out!
                </p>
              </div>

              {/* Direct Reach Contact Cards */}
              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-white/10">
                
                {/* Email Item */}
                <a
                  href="mailto:shendesanju89@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-orange-200/60 dark:border-orange-500/20">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                      Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0e1726] dark:text-white group-hover:text-orange-500 transition-colors">
                      shendesanju89@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+918815926552"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-blue-200/60 dark:border-blue-500/20">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                      Phone
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0e1726] dark:text-white group-hover:text-orange-500 transition-colors">
                      +91 8815926552
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-sm border border-emerald-200/60 dark:border-emerald-500/20">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0e1726] dark:text-white">
                      Bhopal, Madhya Pradesh, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Strip */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-3">
                  Connect on Social Media
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/sanjay-sende-20a3b3278/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-[#0077b5] dark:text-[#38bdf8] border border-indigo-200/60 dark:border-indigo-500/20 text-xs font-bold hover:scale-105 transition-all shadow-sm"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Sanjusende"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-bold hover:scale-105 transition-all shadow-sm"
                    title="GitHub"
                  >
                    <FaGithub size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.instagram.com/sanjusende_/profilecard/?igsh=emlra21qenpqMXZy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200/60 dark:border-pink-500/20 text-xs font-bold hover:scale-105 transition-all shadow-sm"
                    title="Instagram"
                  >
                    <FaInstagram size={15} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CvydQr5bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/20 text-xs font-bold hover:scale-105 transition-all shadow-sm"
                    title="Facebook"
                  >
                    <FaFacebook size={15} />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://web.whatsapp.com/send?phone=918815926552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20 text-xs font-bold hover:scale-105 transition-all shadow-sm"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Elevated Form Card (6 Cols) */}
            <div className="lg:col-span-6 bg-slate-50/80 dark:bg-[#121622] p-7 sm:p-10 rounded-3xl border border-slate-200/70 dark:border-white/10 shadow-lg dark:shadow-xl">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field 1: Name */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#181e2e] text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium border border-slate-200 dark:border-white/10 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-sm transition-all"
                  />
                </div>

                {/* Field 2: Email */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#181e2e] text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium border border-slate-200 dark:border-white/10 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-sm transition-all"
                  />
                </div>

                {/* Field 3: Subject */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship / Job Opportunity / Project"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#181e2e] text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium border border-slate-200 dark:border-white/10 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-sm transition-all"
                  />
                </div>

                {/* Field 4: Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#181e2e] text-slate-900 dark:text-white placeholder-slate-400 text-sm font-medium border border-slate-200 dark:border-white/10 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Message Alert */}
                {status.message && (
                  <div
                    className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                      status.state === 'success'
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                        : status.state === 'error'
                        ? 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20'
                        : 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400'
                    }`}
                  >
                    {status.state === 'success' && <FaCheckCircle size={14} />}
                    {status.state === 'error' && <FaExclamationCircle size={14} />}
                    {status.state === 'loading' && <FaSpinner className="animate-spin text-sm" />}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Action Pill Button: Send Message */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.state === 'loading'}
                    className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                      {status.state === 'loading' ? (
                        <FaSpinner className="animate-spin text-xs" />
                      ) : (
                        <FaArrowRight size={11} />
                      )}
                    </div>
                    <span>{status.state === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
