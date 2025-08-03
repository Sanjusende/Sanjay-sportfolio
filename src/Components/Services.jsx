import React from 'react';
import { DiNodejsSmall } from "react-icons/di";
import { FaDesktop, FaMobileAlt, FaCode, FaPaintBrush, FaSearch, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and dynamic user interfaces with React.js, TailwindCSS, and modern UI/UX practices.',
      icon: <FaDesktop />,
      delay: 0.1
    },
    {
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side logic using Node.js, Express.js, and integrating MongoDB databases.',
      icon: <DiNodejsSmall />,
      delay: 0.2
    },
    {
      title: 'Responsive Web Design',
      description: 'Creating websites that adapt seamlessly to all devices, ensuring the best experience for every user.',
      icon: <FaMobileAlt />,
      delay: 0.3
    },
    {
      title: 'UI/UX Design',
      description: 'Designing clean, modern, and engaging interfaces to provide intuitive and enjoyable user experiences.',
      icon: <FaPaintBrush />,
      delay: 0.4
    },
    {
      title: 'SEO Optimization',
      description: 'Optimizing websites for better search engine ranking and visibility to drive organic traffic.',
      icon: <FaSearch />,
      delay: 0.5
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploying applications to cloud platforms like Vercel, Netlify, and AWS for high performance.',
      icon: <FaCloud />,
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="mt-28 px-6 lg:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-12 items-center text-3xl lg:text-5xl tracking-widest text-gray-700 dark:text-gray-200 font-bold"
      >
        <h1 className="flex justify-center mb-8 items-center text-3xl mt-4 lg:text-5xl tracking-widest text-gray-500 font-bold">
          <span className="text-gray-600  text-3xl lg:text-5xl">03.</span>
          <span className="text-[var(--orange-color)] border-b-2 px-2 py-1 rounded-2xl border-gray-500">S</span>ervices
          <div className="flex items-center pl-3">
                        <span className="block w-20 lg:w-24 h-1 rounded bg-[#fe9901]"></span>
                    </div>
        </h1>
        
      </motion.h1>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: service.delay }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-slate-800/80 backdrop-blur-md border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-500 text-3xl mb-6 shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
