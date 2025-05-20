import React from 'react';
import './about.css'

function About() {
  return (
    <div className='about-container'>
      <h2>About Us</h2>
      <div className='about-content'>
      <div className='about-text'>
        <h3>HerbSphere - A World of Medicinal Plants</h3>
        <p>
        HerbSphere is an AI-powered platform that bridges ancient traditional medicine with modern technology. Rooted in the rich legacy of the AYUSH system (Ayurveda, Yoga, Unani, Siddha, and Homeopathy), HerbSphere is your interactive digital gateway to exploring the therapeutic power of nature. Through smart search, intuitive navigation, and an AI chatbot, we bring curated information on medicinal plants to your fingertips—personalized, trusted, and always accessible.
        <br/>
        We aim to educate, engage, and empower users to make informed health decisions using herbal remedies, supported by a verified database, interactive tools, and community-driven insights.
        </p>
      </div>
      <div className='about-img'>
        <img src="/about.png" alt="Herbs Image" className="about-herb"/>
      </div>
      </div>
    </div>
  )
}

export default About;
