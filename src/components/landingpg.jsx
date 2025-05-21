import React, { useRef } from 'react';
import './landingpg.css';
import Plantlist from './plantlist';
import About from './about';
import TeamSection from './team';
import SearchPlant from './search';
import Footer from './footer';

function Landingpg() {
  const aboutRef = useRef(null);
  const plantsRef = useRef(null);
  const searchRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div className='landingpg'>
    <div className='landingpg-img'>
      <div className='landingpg-overlay'>
        <nav className='nav'>
          <img className='logo' src="/hs-color.png"/>
          <ul className='nav-links'>
            <li onClick={() => scrollToSection(aboutRef)}>About HerbSphere</li>
            <li onClick={() => scrollToSection(plantsRef)}>Explore Plants</li>
            <li onClick={() => window.open("https://herbsperechatbotremedy.streamlit.app/", "_blank")}>Ask the Chatbot</li>
            <li onClick={() => scrollToSection(searchRef)}>Search Plants</li>
          </ul>
        </nav>
      <div className='hero'>
        <div className='content'>
          <h2>Welcome to HerbSphere</h2>
          <h3>Discover the Healing Power of <br/>Medicinal Plants</h3>
          <p>Empower your wellness journey with trusted knowledge from Ayurveda, Unani, Siddha, and Homeopathy – delivered through AI-powered search and chatbot technology.</p>
          <button onClick={() => scrollToSection(plantsRef)} className='explore-btn'>Explore Plants</button>
          <button className='explore-btn' onClick={() => window.open("https://herbsperechatbotremedy.streamlit.app/", "_blank")}>Ask the Chatbot</button>
        </div>
        <div className='hero-image'>
          <img src="/herbs.png" alt="Plant Image" className='hero-img'/>
        </div>
      </div>
      </div>
   </div> 
      <section ref={aboutRef} className='section'>
        <About />
      </section>

      <section ref={plantsRef} className='section'>
        <h2 id='explore-plant'>Explore Medicinal Plants</h2>
        <section ref={searchRef} className='section'>
        <SearchPlant /> 
        </section>
        <Plantlist />
      </section>
      <section className='section'>
        <TeamSection />
      </section>
      <Footer />
  </div>
  );
}

export default Landingpg;
