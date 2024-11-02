import React, { useEffect, useState } from "react";
import { FaArrowUp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdText, IoMdMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import { AiFillPhone } from "react-icons/ai"; // Call icon

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <FaLinkedin className="text-white bg-indigo-600 p-2 rounded w-14 h-14 hover:bg-indigo-500 transition duration-300" />
    ),
    tooltipBg: "bg-indigo-600", // LinkedIn tooltip color
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <FaInstagram className="text-white bg-pink-500 p-2 rounded w-14 h-14 hover:bg-pink-400 transition duration-300" />
    ),
    tooltipBg: "bg-pink-500", // Instagram tooltip color
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <FaFacebook className="text-white bg-blue-600 p-2 rounded w-14 h-14 hover:bg-blue-500 transition duration-300" />
    ),
    tooltipBg: "bg-blue-600", // Facebook tooltip color
  },
  {
    name: "Email",
    href: "https://mail.google.com",
    icon: (
      <IoMdMailUnread className="text-white bg-green-500 p-2 rounded w-14 h-14 hover:bg-green-400 transition duration-300" />
    ),
    tooltipBg: "bg-green-500", // Email tooltip color
  },
];

const contactIcons = [
  {
    name: "WhatsApp",
    href: "https://wa.me/your_whatsapp_number",
    icon: <FaWhatsapp className="text-2xl" />,
    bgColor: "bg-green-500",
    tooltipBg: "bg-green-700",
  },
  {
    name: "Call",
    href: "tel:+your_phone_number",
    icon: <AiFillPhone className="text-2xl" />,
    bgColor: "bg-blue-500",
    tooltipBg: "bg-blue-700",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <FaLinkedin className="text-2xl" />,
    bgColor: "bg-indigo-600",
    tooltipBg: "bg-indigo-700",
  },
];

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIcons, setShowIcons] = useState(false); // State to control icon visibility

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll to Top Button */}
      {isVisible && (
        <div
          className="fixed bottom-10 right-0 w-12 h-12 bg-pink-400 text-white flex justify-center items-center rounded-full shadow-lg cursor-pointer animate-bounce z-50"
          onClick={goToBtn}
        >
          <FaArrowUp className="text-2xl" />
        </div>
      )}

      {/* Toggle Button for Contacts */}
      <div className="fixed bottom-28 right-2 rounded-e-full flex flex-col gap-2 z-50">
        <button
          onClick={() => setShowIcons(!showIcons)} // Toggle icons on click
          className="bg-blue-500 text-white p-2 rounded flex justify-center items-center w-14 h-14"
        >
          {showIcons ? (
            <span className="text-xl">X</span>
          ) : (
            <IoMdText className="text-4xl rounded-full" />
          )}
        </button>

        {/* Contact Icons */}
        <div
          className={`flex flex-col gap-2 transition-transform duration-300 ${
            showIcons ? "transform translate-y-0" : "transform -translate-y-20"
          }`}
        >
          {showIcons &&
            contactIcons.map((contact, index) => (
              <div className="relative group z-50" key={index}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${contact.bgColor} text-white p-2 rounded-full w-14 h-14 flex justify-center items-center`}
                >
                  {contact.icon}
                </a>
                <span
                  className={`absolute text-xl left-16 bottom-2 w-max text-white p-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${contact.tooltipBg}`}
                >
                  {contact.name}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed bottom-32 left-2 flex flex-col gap-1 z-50">
        {socialLinks.map((social, index) => (
          <div key={index} className="relative group">
            <a href={social.href} target="_blank" rel="noreferrer" className="social-icon">
              {social.icon}
            </a>
            <span
              className={`absolute text-xl left-16 bottom-2 w-max text-white p-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.tooltipBg}`}
            >
              {social.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoToTop;
