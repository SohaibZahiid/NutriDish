import React from "react";
import "../styles/Terminosycondiciones.css"; // Reuse the same CSS file
import "../styles/AboutUs.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
function AboutUs() {
  return (
    <div className="terms-container">
      {" "}
      {/* Renamed the class */}
      <div className="terms-content">
        <h2>About Us</h2>
        <p className="about-us-text">
          NutriDish is a dedicated platform for healthy food enthusiasts. Our
          mission is to provide personalized and healthy recipes to anyone
          looking to improve their diet and lifestyle.
        </p>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-members-card">
              <img src="/imgs/mir.jpg" alt="Team Member 1" />
              Mirjan
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mirjan-kapxhiu-ba742527b"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/mirjankapxhiu" target="_blank">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="team-members-card">
              <img src="/imgs/so.jpg" alt="Team Member 2" />
              Sohaib
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sohaibzahid"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/SohaibZahiid/" target="_blank">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="team-members-card">
              <img src="/imgs/sac.jpg" alt="Team Member 3" />
              Santiago
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/santiagocartagenah"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/scartage" target="_blank">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="team-members-card">
              <img src="/imgs/mac.jpg" alt="Team Member 4" />
                Marc
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marc-adell-fern%C3%A1ndez-46b30017a"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/marccadell" target="_blank">
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p className="about-us-text">
            We believe in the power of nutritious food. We strive to make
            healthy eating accessible, enjoyable, and personalized for everyone.
            Join us on this exciting journey to a healthier you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
