import React from 'react';

const Hero = () => {
    return (
        <div className="head lg:mt-5 mt-28 font-serif">
        {/* Home Section Start */}
        <section id="Home" className="bg-[var(--bg-color)] dark:text-gray-100">
          <div className="container mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h3 className="lg:text-4xl font-bold text-4xl text-black">
                Hello, I am
              </h3>
              <h1 className="lg:text-6xl text-[3rem] mb-4">
                <span className="text-[var(--orange-color)] font-bold">Sanjay</span>{" "}
                Sende
              </h1>
              <p className="mb-5 text-xl lg:text-lg">
                Skilled Full Stack Developer with expertise in front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, MongoDB, MySQL) technologies. 
                <br className="hidden md:inline lg:hidden" />
                Experienced in building scalable web apps, developing APIs, and deploying to cloud platforms like AWS. Passionate about clean, efficient code and enhancing user experiences.
              </p>
              {/* Social Media Icons */}
              <div
                id="icons"
                className="flex gap-3 items-center lg:gap-7 ml-[3rem] lg:ml-0 mb-8"
              >
                {/* Facebook, WhatsApp, Instagram, LinkedIn, GitHub Icons */}
                {/* ... (icons remain unchanged) ... */}
              </div>
              {/* Buttons */}
              <div className="btn-box flex ml-[5rem] lg:ml-0 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
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
              </div>
            </div>
            {/* Image Section */}
            <div className="flex items-center justify-center rounded-s-3xl lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-gray-300 hover:transition-all shadow-xl shadow-yellow-600 hover:translate-y-[-1rem]">
  <img 
    id="profile-img"
    src="./src/assets/sanju.png"
    alt="Sanjay"
    className="object-contain h-full w-full"
  />
</div>

          </div>
        </section>
        {/* Home Section End */}
      </div>
    );
};

export default Hero;
