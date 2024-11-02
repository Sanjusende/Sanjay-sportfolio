import React from 'react';
import { DiNodejsSmall } from "react-icons/di";
import { FaDesktop, FaMobileAlt } from "react-icons/fa"; 

const Services = () => {
  const services = [
    {
      title: 'Web Designer',
      description: 'Boost your online presence with our expert website design. We create stunning, user-friendly sites that reflect your brand, featuring responsive layouts and seamless navigation for optimal engagement.',
      icon: <DiNodejsSmall />, 
    },
    {
      title: 'Web Developer',
      description: 'We offer expert website development services, creating visually appealing and user-friendly sites with cutting-edge technology. Whether you need a new website or a revamp, strong online presence.',
      icon: <FaDesktop />, 
    },
    {
      title: 'Responsive Website',
      description: 'Responsive website design adapts to different devices for an optimal user experience. It uses flexible layouts and grids to ensure seamless viewing on desktops, tablets, and smartphones.',
      icon: <FaMobileAlt />, 
    },
  ];

  return (
    <section id="Services" className="mt-16 ml-4 lg:ml-0">
      <h1 className="flex justify-center items-center text-5xl lg:text-6xl tracking-widest text-gray-500 mb-8 font-bold">
        <span className="text-[var(--orange-color)]">S</span>ervices
      </h1>
      <div className="flex flex-col sm:flex-row lg:justify-center lg:items-center gap-10 lg:ml-10   lg:mr-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-gray-700"
          >
            <div className="flex flex-col text-white items-center pb-10 hover:shadow-xl hover:shadow-yellow-600 bg-gray-500 ">
              <div className="border-2 text-5xl text-gray-500 shadow-xl shadow-amber-500 bg-white border-[var(--orange-color)] p-5 rounded-full">
                {service.icon} {/* Render the React Icon */}
              </div>
              <h5 className="mt-7 text-white text-3xl dark:text-white font-bold">{service.title}</h5>
              <span className="text-xl text-white dark:text-gray-400 flex justify-center items-center pl-5 pt-6">
                {service.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
