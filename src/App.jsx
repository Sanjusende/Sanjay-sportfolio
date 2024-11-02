import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GoToTop from './Components/GoToTop';
import About from './Components/About';
import Skill from './Components/Skill';
import Portfolio from './Components/Portfolio';



function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Skill/>
      <About/>
      <Services />
      <Portfolio/>
      <Contact />
      <Footer />
      <GoToTop />
     


      <Routes>
        
       
      </Routes>
    </Router>
  );
}

export default App;
