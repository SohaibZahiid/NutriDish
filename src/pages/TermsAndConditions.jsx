import React from 'react';
import '../styles/Terminosycondiciones.css'; // Make sure to import the corresponding CSS

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using the NutriDish website, you agree to comply with the following terms and conditions...</p>
        {/* Continue with the rest of the terms and conditions content here */}
        <h2>Use of the Website</h2>
        <p>You may use this website only in accordance with these Terms.</p>
        <h2>Privacy</h2>
        <p>Our privacy policy explains how we treat your personal information.</p>
        <h2>Modifications</h2>
        <p>We reserve the right to modify these Terms and Conditions at any time.</p>
        {/* You can keep adding more sections as needed */}
      </div>
    </div>
  );
}

export default TermsAndConditions;
