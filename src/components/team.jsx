import React from 'react';
import './team.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Maria Rangwala',
    title: 'Frontend Developer',
    image: 'maria.jpg',
    linkedin: 'https://in.linkedin.com/in/mariaarangwala',
    github: 'https://github.com/maria-rangwala'
  },
  {
    name: 'Mohit Gupta',
    title: 'Backend Developer',
    image: 'mohit.jpg',
    linkedin: 'https://www.linkedin.com/in/mohit-gupta09',
    github: 'https://github.com/mohitgupta09'
  },
  {
    name: 'Mudit Thakre',
    title: 'Chatbot Developer & UI/UX Designer',
    image: 'mudit.jpg',
    linkedin: 'https://www.linkedin.com/in/mudit-thakre/',
    github: 'https://github.com/mudit0204',
  },
  {
    name: 'Prakhar Patni',
    title: 'Chatbot Developer & ML Engineer',
    image: 'prakhar.jpg',
    linkedin: 'https://www.linkedin.com/in/prakhar-patni-177607277',
    github: 'https://github.com/PrakharPatni08'
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="left-column">
        <h2 className="section-title">Meet Team HerbSphere</h2>
        <div className="mentor-card">
          <img
            src="#"
            alt="Mentor"
            className="mentor-img"
          />
          <div className="mentor-info">
            <h3 className="mentor-name">Prof. Anuraag Punde</h3>
            <p className="mentor-title">Our Mentor</p>
            <div className="mentor-socials">
              <a href="https://www.linkedin.com/in/anuraag-punde-b166b3157/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="right-column">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-details">
              <h4 className="team-name">{member.name}</h4>
              <p className="team-title">{member.title}</p>
              <div className="mentor-socials">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
