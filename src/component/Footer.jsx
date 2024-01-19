import "../styles/Footer.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    if(e.target.value == '') {

    } else {
      setEmail(e.target.value)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_eoxot7h",
      "template_tf0ieji",
      e.target,
      "Ex5GmigFjQiD8hId1"
    );
  };

  return (
    <footer className="footer">
        <div className="links">
          <h2>Quick links</h2>
          <a href="/About">About Us</a>
          <br></br>
          <a href="/TermsAndConditions">Terms & conditions</a>
          <br></br>
        </div>
        <div className="links">
          <h2>Contact</h2>
          <a
            href="https://www.linkedin.com/in/mirjan-kapxhiu-ba742527b"
            target="_blank"
          >
            Mirjan
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/sohaibzahid" target="_blank">
            Sohaib
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/santiagocartagenah"
            target="_blank"
          >
            Santiago
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/marc-adell-fern%C3%A1ndez-46b30017a"
            target="_blank"
          >
            Marc
          </a>
          <br></br>
        </div>
        <div className="newsletter">
          <h2>Subscribe to our newsletter</h2>
          <form onSubmit={sendEmail}>
            <input
              type="email"
              name="email_from"
              placeholder="Enter your email"
              value={email}
              onChange={handleInput}
              required
            />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="ods-image">
          <a href="https://www.un.org/sustainabledevelopment/es/" target="_blank">
            <img src="/imgs/ODS.png" alt="ODS" />
          </a>
        </div>
        </footer>
  );
}

export default Footer;
