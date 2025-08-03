import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/AboutUs';
import Skill from './Components/Skills';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/ContactUs';
import Footer from './Components/Footer';
import GoToTop from './Components/GoToTop';
import './App.css';

import Home from './Pages/Home';
import CardSwap from './Components/Cardswap';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/swap" element={<CardSwap />} />
      </Routes>
      <Footer />
      <GoToTop />
    </Router>
  );
}

export default App;
