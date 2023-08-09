import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-us-text">NutriDish is a dedicated platform for healthy food enthusiasts. Our mission is to provide personalized and healthy recipes to anyone looking to improve their diet and lifestyle.</p>
        <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
        <div>
      <img src="/imgs/mir.jpg" alt="Team Member 1" />
      <a href="https://www.linkedin.com/in/mirjan-kapxhiu-ba742527b" target="_blank">Mirjan</a>
    </div>
    <div>
      <img src="/imgs/so.jpg" alt="Team Member 2" />
      <a href="https://www.linkedin.com/in/sohaibzahid" target="_blank">Sohaib</a>
    </div>
    <div>
      <img src="/imgs/sac.jpg" alt="Team Member 3" />
      <a href="https://www.linkedin.com/in/santiagocartagenah" target="_blank">Santiago</a>
    </div>
    <div>
      <img src="/imgs/mac.jpg" alt="Team Member 4" />
      <a href="https://www.linkedin.com/in/marc-adell-fern" target="_blank">Marc</a>
    </div>
        </div>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p className='about-us-text'>We believe in the power of nutritious food. We strive to make healthy eating accessible, enjoyable, and personalized for everyone. Join us on this exciting journey to a healthier you!</p>
      </div>
    </div>
  );
}

export default AboutUs;