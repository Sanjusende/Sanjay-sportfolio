import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { icon: <FaReact />, name: "React", percentage: 90 },
  { icon: <FaNodeJs />, name: "Node.js", percentage: 85 },
  { icon: <SiExpress />, name: "Express", percentage: 80 },
  { icon: <FaDatabase />, name: "MongoDB", percentage: 80 },
  { icon: <FaJsSquare />, name: "JavaScript", percentage: 75 },
  { icon: <FaCss3Alt />, name: "Tailwind CSS", percentage: 95 },
  { icon: <FaHtml5 />, name: "HTML", percentage: 90 },
  { icon: <FaGitAlt />, name: "Git", percentage: 85 }, // Added Git
  { icon: <FaGithub />, name: "GitHub", percentage: 90 }, // Added GitHub
];

const Skill = () => {
  const [skillCounts, setSkillCounts] = useState(
    Array(skillsData.length).fill(0)
  );
  const [startCounting, setStartCounting] = useState(false);
  const skillsRef = useRef(null);

  // Counter effect
  useEffect(() => {
    const incrementCount = (index, target, duration) => {
      let start = 0;
      const step = () => {
        if (start < target) {
          start += Math.ceil(target / (duration / 100));
          setSkillCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });
          requestAnimationFrame(step);
        } else {
          setSkillCounts((prevCounts) => {
            const newCounts = [...prevCounts];
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="text-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Skills Progress Section */}
      <div className="max-w-7xl mx-auto mt-6 text-center" ref={skillsRef}>
        <h1 className="flex mb-5 justify-center items-center text-4xl lg:text-6xl tracking-widest text-gray-500 font-bold">
          <span className="text-[var(--orange-color)] ">S</span>kill
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex shadow-lg hover:shadow-yellow-500 hover:shadow-2xl bg-gray-300 shadow-gray-600 flex-col items-center">
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
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 relative z-10">
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all"
        >
          Let’s Collaborate
        </a>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-20 h-20 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Skill;
