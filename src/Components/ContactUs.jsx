import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import hd from "../assets/hd.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7f1e229c-5d94-47ed-91a7-46b4eac04885",
          ...formData,
          redirect: "https://web3forms.com/success",
        }),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { icon: <FaLocationDot />, title: "ADDRESS", info: "BALAGHAT MP" },
    { icon: <FaPhone />, title: "CONTACT NUMBER", info: "+91-8815926552" },
    { icon: <MdEmail />, title: "EMAIL ADDRESS", info: "sendsanju89@gmail.com" },
  ];

  return (
    <section id="Contact" className="mt-36">
      {/* Heading */}
      <motion.h1
        className="flex justify-center mb-8 items-center text-3xl lg:text-5xl tracking-widest text-gray-500 font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-600 text-3xl lg:text-5xl">05.</span>
        <span className="text-[var(--orange-color)] border-b-2 px-2 py-1 rounded-2xl border-gray-500">C</span>ontact-Us
        <div className="flex items-center pl-3">
          <span className="block w-20 lg:w-24 h-1 rounded bg-[#fe9901]"></span>
        </div>
      </motion.h1>

      {/* Contact Info Cards */}
      <motion.div
        className="flex justify-evenly lg:flex-row flex-col gap-10 mt-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex gap-4 flex-col justify-center items-center">
            <div className="border text-2xl p-7 rounded-full bg-gray-300 text-[var(--orange-color)] shadow-xl shadow-gray-700 hover:shadow-yellow-500">
              {contact.icon}
            </div>
            <h1 className="text-xl font-bold">{contact.title}</h1>
            <h1 className="text-xl font-bold">{contact.info}</h1>
          </div>
        ))}
      </motion.div>

      {/* Contact Form Section */}
      <div className="grid max-w-screen-xl grid-cols-1 bg-[var(--second-bg)] gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once: false, amount: 0.2}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold lg:text-5xl">Let's talk!</h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src={hd} alt="Form" className="p-6 h-52 md:h-64" />
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="name" className="text-xl font-bold">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full p-3 rounded dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl font-bold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xl font-bold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              placeholder="Your message here"
              className="w-full p-3 rounded dark:bg-gray-800"
              required
            ></textarea>
          </div>
          <div className="btn-box ml-[3rem] lg:ml-0 flex flex-col space-y-4 sm:items-center sm:justify-center mt-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn px-8 hover:bg-[var(--orange-color)] rounded-lg lg:flex lg:justify-center shadow-gray-700 shadow-lg py-3 text-lg font-semibold border bg-gray-300 dark:border-gray-100 text-[#be185d]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
