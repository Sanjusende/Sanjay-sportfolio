import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { icon: <FaReact />, name: "React", percentage: 90 },
  { icon: <FaNodeJs />, name: "Node.js", percentage: 85 },
  { icon: <SiExpress />, name: "Express", percentage: 80 },
  { icon: <FaDatabase />, name: "MongoDB", percentage: 80 },
  { icon: <FaJsSquare />, name: "JavaScript", percentage: 75 },
  { icon: <FaCss3Alt />, name: "Tailwind CSS", percentage: 95 },
  { icon: <FaHtml5 />, name: "HTML", percentage: 90 },
  { icon: <FaGitAlt />, name: "Git", percentage: 85 },
  { icon: <FaGithub />, name: "GitHub", percentage: 90 },
];

const Skill = () => {
  const [skillCounts, setSkillCounts] = useState(Array(skillsData.length).fill(0));
  const [startCounting, setStartCounting] = useState(false);
  const skillsRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const incrementCount = (index, target, duration) => {
      let start = 0;
      const step = () => {
        if (start < target) {
          start += Math.ceil(target / (duration / 100));
          setSkillCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
          requestAnimationFrame(step);
        } else {
          setSkillCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
        }
      };
      requestAnimationFrame(step);
    };

    if (startCounting) {
      skillsData.forEach((skill, index) => {
        incrementCount(index, skill.percentage, 2000);
      });
    }
  }, [startCounting]);

  // Start counting when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        } else {
          setStartCounting(false); // reset when out of view
          setSkillCounts(Array(skillsData.length).fill(0)); // reset counters
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="skills"
      className="text-white mt-10 py-12 px-6 md:px-12 lg:px-24 overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto mt-6 text-center" ref={skillsRef}>
        <motion.h1
          className="flex justify-center mb-8 items-center text-3xl mt-4 lg:text-5xl tracking-widest text-gray-500 font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gray-600 text-3xl lg:text-5xl">02.</span>
          <span className="text-[var(--orange-color)] border-b-2 px-2 py-1 rounded-2xl border-gray-500">S</span>kills
          <div className="flex items-center pl-3">
            <span className="block w-20 lg:w-24 h-1 rounded bg-[#fe9901]"></span>
          </div>
        </motion.h1>

        {/* Skills grid with staggered animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex shadow-lg hover:shadow-yellow-500 hover:shadow-2xl bg-gray-300 shadow-gray-600 flex-col items-center p-4 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-6xl mb-2 text-gray-500">{skill.icon}</div>
              <CircularProgressbar
                value={skillCounts[index]}
                text={`${skillCounts[index]}%`}
                styles={buildStyles({
                  pathColor: `#ffa500`,
                  textColor: '#f59e0b',
                  trailColor: '#e5e7eb',
                })}
                className="w-24 h-24 mb-2"
              />
              <span className="text-gray-800 text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all"
        >
          Let’s Collaborate
        </a>
      </motion.div>

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-20 h-20 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
    </motion.section>
  );
};

export default Skill;
