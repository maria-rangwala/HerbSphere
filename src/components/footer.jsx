import React from 'react';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaFileAlt, FaSearch, FaRobot
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer >
      <div className="containerF">
        <div className="row-wise">
          <div className="clg-logo" id="copyright">
            <div className='footer-img'>
              <div className="img-wrapper"><img id='img1' src="./hs-color.png" alt="HerbSphere Logo"/></div>
              <div className="img-wrapper"><img id='img2' src="./acro.png" alt="Acropolis Logo"/></div>
              <div className="img-wrapper"><img id='img3' src="./cse.png" alt="Department Logo"/></div>
            </div>
            <p style={{margin: '0 0 20px'}}>All rights reserved © 2025</p>
          </div>

          <div className="clg-logo">
            <h3 style={{ fontSize: '18px' }}>Quick Links</h3>
            <div className="quick-links">
              <a href="./Synopsis-HerbSphere.pdf" target="_blank" rel="noopener noreferrer" className="quick-link"><FaFileAlt /> Synopsis</a>
              <a href="./pdfs/HerbSphere-Technical-Poster.pdf" target="_blank" rel="noopener noreferrer" className="quick-link"><FaFileAlt /> Technical Poster</a>
              <a href="./pdfs/HerbSphere-Research-Paper.pdf" target="_blank" rel="noopener noreferrer" className="quick-link"><FaFileAlt /> Research Paper</a>
              <a href="/search" className="quick-link"><FaSearch /> Search Plants</a>
              <a href="/chatbot" className="quick-link"><FaRobot /> Ask the Chatbot</a>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
