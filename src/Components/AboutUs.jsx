import React from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    institution: "Higher Secondary School",
    date: "July 2020 - July 2021",
    description: "I scored 83% in 10th and 83% in 12th. I had Maths and Science subjects in my 11th and 12th. During my school time, I always tried to learn something new and did something new every time.",
    icon: <FaGraduationCap className="mr-2" />
  },
  {
    institution: "Govt. Polytechnic College Balaghat",
    date: "Dec 2021 - May 2024",
    description: "Pursuing a Diploma in Computer Science & Engineering from Govt. Polytechnic College Balaghat, with a strong academic foundation reflected by a CGPA of 7.98% Passionate about leveraging technology to solve real-world problems and continuously learning to stay at the cutting edge of innovation.",
    icon: <FaGraduationCap className="mr-2" />
  },
  {
    institution: "Sagar Institute of Research & Technology Bhopal ",
    date: "August 2024 - Running",
    description: "Sagar Institute of Research & Technology (SIRT) is self-finance private engineering institute in Bhopal, the capital city of Madhya Pradesh. The institute is approved by AICTE and affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal and Barkatullah University, Bhopal for engineering and Management program respectively.",
    icon: <FaGraduationCap className="mr-2" />
  }
];

const certificatesData = [
  {
    title: "MERN Stack Internship",
    date: "Completed on 10 Oct 2023",
    description: "MERN Stack Intern at Connect Siksha, Balaghat, worked on full-stack web development using MongoDB, Express, React, and Node.js, building responsive and scalable applications.",
    icon: <FaBriefcase className="mr-2" />
  },
  {
    title: "HashedBit Innovtion Pvt Ltd",
    date: "27-September 2024 ,Running",
    description: "Full-Stack Developer Intern Built full-stack apps using MERN stack Developed responsive UIs with React and Tailwind CSS Created APIs with Node.js and Express Managed MongoDB databases.",
    icon: <FaBriefcase className="mr-2" />
  },
  {
    title: "State Level Championship Hackathon",
    date: "Participated on 10 Oct 2023",
    description: "Showcasing innovative problem-solving and technical skills in a highly competitive environment.",
    icon: <FaCertificate className="mr-2" />
  },
  {
    title: "Certificate of Industrial Training",
    date: "Networking, CCNA & Cloud (09 May 2023 - 24 May 2023)",
    description: "Gained hands-on experience in network management, routing protocols, and cloud technologies. Equipped with skills in designing and securing scalable networks, and proficient in cloud computing environments.",
    icon: <FaCertificate className="mr-2" />
  }
];

const EducationAndCertificates = () => {
  return (
    
    <section className="container mx-auto p-4 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
      <h1 className="flex justify-center mb-8 items-center text-5xl mt-4 lg:text-6xl tracking-widest text-gray-500 font-bold">
        <span className="text-[var(--orange-color)]">A</span>bout
      </h1>

      {/* Education Section */}
      {educationData.map((edu, index) => (
        <div key={index} className="mb-8 lg:mx-40 border-l-4 border-yellow-500 pl-4">
          <h3 className="text-xl font-bold text-black flex items-center mb-2">
            {edu.icon} {edu.institution}
          </h3>
          <p className="text-sm text-gray-500">{edu.date}</p>
          <p className="text-gray-700">{edu.description}</p>
        </div>
      ))}

      {/* Certificates Section */}
      <h2 className="text-2xl font-semibold text-center text-green-700 mt-8 mb-4">
        Certifications
      </h2>

      {certificatesData.map((cert, index) => (
        <div key={index} className="mb-8 lg:mx-40 border-l-4 border-yellow-500 pl-4">
          <h3 className="text-xl font-bold text-black flex items-center mb-2">
            {cert.icon} {cert.title}
          </h3>
          <p className="text-sm text-gray-500">{cert.date}</p>
          <p className="text-gray-700">{cert.description}</p>
        </div>
      ))}
    </section>
  );
};

export default EducationAndCertificates;
