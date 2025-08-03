import React, { useState } from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Calculator from "../assets/calculator.png";
import todo from "../assets/todo.jpeg";
import Golf from "../assets/project2.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const works = [
  {
    title: "Movie Seat Booking",
    description: "The movie seat booking feature enables users to view seat availability.",
    tech: ["React.js", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/7991379/pexels-photo-7991379.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Sanjusende/HashedBit-Internship",
    live: "https://movieseatbook.vercel.app/",
    category: "fullstack"
  },
  {
    title: "GOLF",
    description: "Make this project on HTML, CSS, JavaScript, and GSAP.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: Golf,
    github: "https://github.com/Sanjusende/firstwebsite",
    live: "https://sanjay-ivory.vercel.app/",
    category: "frontend"
  },
  {
    title: "Workex",
    description: "A job portal application that connects job seekers with employers.",
    tech: ["React.js", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Sanjusende/workex",
    live: "https://workex.vercel.app/",
    category: "fullstack"
  },
  {
    title: "Calculator",
    description: "A calculator app with responsive design.",
    tech: ["React.js", "TailwindCSS", "HTML", "CSS"],
    image: Calculator,
    github: "https://github.com/Sanjusende/Todo_App",
    live: "https://todo-app.vercel.app/",
    category: "frontend"
  },
  {
    title: "Todoist",
    description: "A task management app with a clean interface.",
    tech: ["React.js", "TailwindCSS", "HTML", "CSS"],
    image: todo,
    github: "https://github.com/Sanjusende/Todo_App",
    live: "https://todo-app.vercel.app/",
    category: "frontend"
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' }
];

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredWorks = activeFilter === 'all'
    ? works
    : works.filter(work => work.category === activeFilter);

  return (
    <section id="portfolio" className="my-works mt-10 py-10 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-5">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="flex justify-center mb-8 items-center text-3xl mt-4 lg:text-5xl tracking-widest text-gray-500 font-bold">
            <span className="text-gray-600 text-3xl lg:text-5xl">04.</span>
            <span className="text-[var(--orange-color)] border-b-2 px-2 py-1 rounded-2xl border-gray-500">P</span>ortfolio
            <div className="flex items-center pl-3">
              <span className="block w-20 lg:w-24 h-1 rounded bg-[#fe9901]"></span>
            </div>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 text-xl transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md font-semibold  
                  ${activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{work.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-300 shadow-lg shadow-yellow-300 dark:bg-slate-700 text-black px-3 py-2 rounded-lg text-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyWorks;
