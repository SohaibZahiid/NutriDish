import React from 'react';
import '../styles/Terminosycondiciones.css'; // Asegúrate de importar el CSS correspondiente

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Términos y Condiciones</h1>
      <div className="terms-content">
        <h2>Aceptación de los Términos</h2>
        <p>Al acceder y utilizar el sitio web NutriDish, aceptas cumplir con los siguientes términos y condiciones...</p>
        {/* Continúa con el resto del contenido de los términos y condiciones aquí */}
        <h2>Uso del Sitio Web</h2>
        <p>Podrás utilizar este sitio web únicamente de conformidad con estos Términos...</p>
        <h2>Privacidad</h2>
        <p>Nuestra política de privacidad explica cómo tratamos tu información personal...</p>
        <h2>Modificaciones</h2>
        <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento...</p>
        {/* Puedes seguir agregando más secciones según tus necesidades */}
      </div>
    </div>
  );
}

export default TermsAndConditions;