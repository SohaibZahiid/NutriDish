import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
      <div className="links">
        <h2>Quick Links</h2>
        <a href="/About">About Us</a><br></br>
        <a href="/TermsAndConditions">Terms & Conditions</a><br></br> 
      </div>
      <div className="links">
        <h2>Devs who have worked on this project</h2>
        <a href="https://www.linkedin.com/in/mirjan-kapxhiu-ba742527b">Mirjam</a><br></br>
        <a href="https://www.linkedin.com/in/sohaibzahid">Sohaib</a><br></br>
        <a href="https://www.linkedin.com/in/santiagocartagenah">Santiago</a><br></br>
        <a href="https://www.linkedin.com/in/marc-adell-fern%C3%A1ndez-46b30017a">Marc</a><br></br>
      </div>
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      </div>
    </>
  )
}

export default Footer