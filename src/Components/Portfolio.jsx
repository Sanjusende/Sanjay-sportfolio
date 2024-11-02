// MyWorks.jsx
import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import movieImage from "../assets/movie.png"; 
import project2 from "../assets/project2.png"; 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const works = [
  {
    title: "Movie Seat Booking",
    description: "The movie seat booking feature enables users to view seat availability, select preferred seats, and confirm their booking with a clear, interactive layout.",
    technologies: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    ],
    image: movieImage,
    github: "https://github.com/Sanjusende/HashedBit-Internship/tree/main/Assignment-VIII/movie",
    live: "https://movieseatbook.vercel.app/",
  },
  {
    title: "GOLF",
    description: "Make this project on HTML, CSS, JavaScript, and GSAP.",
    technologies: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    ],
    image: project2,
    github: "https://github.com/Sanjusende/firstwebsite",
    live: "https://sanjay-ivory.vercel.app/",
  },
  {
    title: "Workex",
    description: "A job portal application that connects job seekers with employers, featuring a user-friendly interface and dynamic filtering options.",
    technologies: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    ],
    // image: workexImage,
    github: "https://github.com/yourusername/workex", // Replace with your GitHub link
    live: "https://workex.vercel.app/", // Replace with your live link
  },
  {
    title: "Todoist",
    description: "A task management application that helps users organize their tasks efficiently with a clean interface and responsive design.",
    technologies: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    ],
    // image: todoistImage,
    github: "https://github.com/yourusername/todoist", // Replace with your GitHub link
    live: "https://todoist.vercel.app/", // Replace with your live link
  },
  // Add more projects as needed
];

const MyWorks = () => {
  return (
    <section className="my-works mt-10 bg-gray-100 py-10">
      <div className="container mx-auto px-5">
      <h1 className="flex justify-center mb-8 items-center text-3xl mt-4 lg:text-5xl tracking-widest text-gray-500 font-bold">
          <span className="text-gray-600  text-3xl lg:text-5xl">03.</span>
          <span className="text-[var(--orange-color)] border-b-2 px-2 py-1 rounded-2xl border-gray-500">P</span>ortfolio
          <div className="flex items-center pl-3">
                        <span className="block w-20 lg:w-24 h-1 rounded bg-[#fe9901]"></span>
                    </div>
        </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },      // Mobile screens
            640: { slidesPerView: 1 },      // Larger mobile screens
            768: { slidesPerView: 2 },      // Tablets
            1024: { slidesPerView: 3 },     // Large screens
            1280: { slidesPerView: 3 },     // Extra-large screens
          }}
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="relative group bg-white rounded-lg shadow-md overflow-hidden h-80">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-500 bg-opacity-70 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-5">
                  <h3 className="text-2xl font-semibold mt-8 mb-2 text-yellow-500">{work.title}</h3>
                  <p className="text-lg text-gray-200 mb-2 text-center">{work.description}</p>
                  <div className="flex flex-wrap justify-center gap-4 mb-4">
                    {work.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex gap-2 px-2 rounded-lg shadow bg-slate-300 text-gray-200 items-center group-hover:text-black hover:bg-white">
                        <div className='text-2xl'>{tech.icon}</div>
                        <p className="text-lg mt-1">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-4 text-yellow-500">
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 px-2 py-2 rounded-xl hover:bg-yellow-500 hover:text-blue-400"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 px-2 py-2 rounded-xl hover:bg-yellow-500 hover:text-blue-400"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyWorks;
