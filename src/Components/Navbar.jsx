import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import sanju from '../assets/sanju.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about-us' },
    { name: 'Skills', to: '/skills' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact Us', to: '/contact-us' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 mb-10 bg-[var(--bg-color)] dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 mt-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-5xl font-extrabold text-yellow-500 hover:text-gray-500">S</span>
            <span className="text-2xl font-semibold text-black hover:text-yellow-500 dark:text-gray-300">anju</span>
          </Link>

          {/* Center Image and Search Bar */}
          <div className="flex items-center mx-auto">
            <img src={sanju} alt="Logo" className="h-10 mr-5 rounded-full hidden lg:block bg-gray-200" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="border font-bold px-3 py-2 dark:bg-gray-700 dark:text-white rounded-xl bg-gray-200"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <Link 
                  to={item.to}
                  className="text-lg font-semibold text-black dark:text-gray-300 transition duration-300 flex items-center relative"
                >
                  {/* First letter styling */}
                  <span className="group-hover:text-yellow-500">{item.name.charAt(0)}</span>
                  {item.name.slice(1)}
                  {/* Border Animation */}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[var(--orange-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-[var(--orange-color)] focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list">
                <path
                  fillRule="evenodd"
                  d="M3 12.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40">
            <div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={toggleMenu} className="flex items-center">
                  <span className="text-5xl font-extrabold text-yellow-500">S</span>
                  <span className="text-2xl font-semibold text-black dark:text-gray-300">anju</span>
                </Link>
                <button onClick={toggleMenu} className="text-[var(--orange-color)] focus:outline-none">
                  <ImCross />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    <Link 
                      to={item.to}
                      onClick={toggleMenu} 
                      className="text-lg text-gray-700 dark:text-gray-300 transition duration-300 flex items-center relative group"
                    >
                      {/* First letter styling */}
                      <span className="group-hover:text-yellow-500">{item.name.charAt(0)}</span>
                      {item.name.slice(1)}
                      {/* Border Animation */}
                      <span className="absolute left-0 bottom-0 w-24 h-0.5 bg-[var(--orange-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
