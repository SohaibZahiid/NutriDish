import React, { useState, useEffect } from "react";
import "../styles/Calcula.css";
import Modal from "../components/Modal";
const Calcula = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("calories"));
  return (
    <>
      <div className="planner-container container">
                      <div className="container-explanation">
                          <h2>Calculadora de Gasto Calórico</h2>
                          <p>
                              Esta herramienta te permite estimar la cantidad de calorías que tu cuerpo necesita en un día, basándose en factores como tu edad, peso, altura, género y nivel de actividad física.
                          </p>
                          <p>
                              La calculadora te proporciona información sobre tu metabolismo basal, las calorías necesarias para mantener el peso, para adelgazar y para ganar peso.
                          </p>
                          <p>
                              Usa esta información como referencia para tus objetivos nutricionales. Siempre es recomendable consultar con un profesional para recibir asesoramiento personalizado.
                          </p>
                      </div>
                  </div> 
      {data && (
        <div className="calculadora">
          <div>
            <h2 className="cal-resultado">Calorías</h2>
            <ul className="cal-ul">
              <li>
                <span>BMR:</span>{" "}
                <span className="end-cal">{data?.results.bmr}</span>
              </li>
              <li>
                <span>Maintain Weight:</span>{" "}
                <span className="end-cal">{data?.results.maintain}</span>
              </li>
              <li>
                <span>Lose Weight:</span>{" "}
                <span className="end-cal">{data?.results.lose}</span>
              </li>
              <li>
                <span>Gain Weight:</span>{" "}
                <span className="end-cal">{data?.results.gain}</span>
              </li>
            </ul>
            <button className="button-cal" onClick={() => setIsModalOpen(true)}>
              Update
            </button>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Calcula;
