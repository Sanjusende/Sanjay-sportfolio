import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import sanju from "../assets/sanju.png";

const Hero = () => {
  return (
    <div className="head lg:mt-9 mt-[5.7rem]  font-serif">
      {/* Home Section Start */}
      <section id="Home" className="bg-[var(--bg-color)] dark:text-gray-100">
        <div className="container mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="lg:text-4xl font-bold text-4xl text-black dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1>Hello, I am Sanjay Sende</h1>
            </motion.h3>

            <motion.h1
              className="lg:text-4xl text-4xl mb-2 text-[var(--orange-color)] font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typewriter
                className="text-xl lg:text-5xl"
                words={["Full Stack Developer", "UI/UX Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h1>

            <motion.p
              className="mb-5 text-xl lg:text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                I’m <strong>Sanjay Sende</strong>, a{" "}
                <strong>Full Stack Web Developer</strong> based in
                <strong> Balaghat, Madhya Pradesh</strong>. I build modern,
                responsive websites and web apps using{" "}
                <strong>React.js, Node.js, MongoDB</strong> and other latest
                technologies. My focus is on clean, efficient code and creating
                solutions that perform seamlessly.
              </p>
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="btn-box flex ml-[5rem] lg:ml-0 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                id="hire-me-btn"
                href="#Contact"
                className="btn px-8 bg-[var(--orange-color)] shadow-xl shadow-gray-700 hover:bg-orange-600 transition duration-300 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Hire Me!
              </a>
              <a
                id="download-cv-btn"
                href="https://drive.google.com/file/d/1h3Eyub7bumswIKKHEXEXc3o2NVQKIgHj/view?usp=sharing"
                download=""
                className="btn px-8 bg-gray-300 shadow-xl shadow-gray-700 hover:bg-gray-400 transition duration-300 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex items-center justify-center rounded-s-3xl lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-gray-300 shadow-xl shadow-yellow-600"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <img
              id="profile-img"
              src={sanju}
              alt="Sanjay"
              className="object-contain h-full w-full"
            />
          </motion.div>
        </div>
      </section>
      {/* Home Section End */}
    </div>
  );
};

export default Hero;
