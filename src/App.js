import {useRef, useState, useEffect} from 'react';
import './App.css';
import{ FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import logo from './assets/logo.png'


import { Home } from './components/home';
import{ Partners } from './components/partners';
import { Features } from './components/features';
import { Pricing } from './components/pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/footer';


function App() {

  const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const handleLinkClick = () => {
        navRef.current.classList.remove("responsive_nav");
    }
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
      // Listen for scroll events and update the active section
      const handleScroll = () => {
          const sections = ['home', 'product','features','pricing'];
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          for (const section of sections) {
              const element = document.getElementById(section);
              if (element && element.offsetTop <= scrollPosition) {
                  setActiveSection(section);
              }
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div>
      <div className="navbar">
         <a href='#' className='logo'><p className='Lg'><img src={logo} alt="logo"/> LOGO</p></a>    
        <nav className="navigation" ref={navRef}>
            <Link
                to="home"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a  ${activeSection === 'home' ? 'active' : ''}`}
            >
                Home
            </Link>
            <Link
                to="product"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a  ${activeSection === 'product' ? 'active' : ''}`}
            >
                Product
            </Link>

            <Link
                to="features"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a ${activeSection === 'features' ? 'active' : ''}`}
            >
                Features
            </Link>

            <Link
                to="pricing"
                smooth={true}
                duration={100}
                onClick={handleLinkClick}
                className={`a ${activeSection === 'pricing' ? 'active' : ''}`}
            >
                Pricing
            </Link>
           

            <div className='btn'>
              <button  className='btn1' > 
                Get started
              </button>
              <button  className='btn2'> 
                Watch demo
              </button>
            </div>

            <button  className='nav-btn nav-close-btn' onClick={handleLinkClick}> 
              <FaTimes/>
            </button>
             
            
        </nav>
            <button className='nav-btn' onClick={showNavbar}> 
                  <FaBars/>
            </button>
                       
      </div>

      <Home />
      <Partners />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
