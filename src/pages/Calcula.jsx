import React, { useState, useEffect } from "react";
import "../styles/Calcula.css";
import Modal from "../components/Modal";
const Calcula = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("calories"));
  return (
    <>
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
