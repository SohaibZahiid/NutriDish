import { useState } from "react";
import "../styles/Modal.css";
import { FaXmark } from "react-icons/fa6";

function Modal({ open, onClose }) {
  if (!open) return null;

  const [data, setData] = useState({
    age: "",
    weight: "",
    height: "",
    sex: "",
    exercise: "",
    resultado: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setData((prevData) => ({ ...prevData, sex: value }));
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const valorEdad = parseFloat(data.age);
        const valueWeight = parseFloat(data.weight);
        const valueHeight = parseFloat(data.height);
        const valueExercise = parseFloat(data.exercise);

        if (!valueWeight || !valueHeight || !valorEdad || !valueExercise) {
            alert("Todos los campos son requeridos");
            return;
        }

        let basal, mantener, adelgazar, subir;

        if (data.genero === "hombre") {
            basal = Math.round(66 + (13.7 * valueWeight) + (5 * valueHeight) - (6.8 * valorEdad));
        } else if (data.genero === "mujer") {
            basal = Math.round(655 + (9.6 * valueWeight) + (1.8 * valueHeight) - (4.7 * valorEdad));
        } else {
            alert("El Genero es Obligatorio");
            return;
        }

        mantener = Math.round(basal * valueExercise);
        adelgazar = Math.round((basal * valueExercise) / 1.17633517495);
        subir = Math.round((basal * valueExercise) * 1.15);

        const resultadoCalculado = {
            basal: basal,
            mantener: mantener,
            adelgazar: adelgazar,
            subir: subir
        };

        setData(prevData => ({ ...prevData, resultado: resultadoCalculado }));

        // Guardar datos en local storage
        localStorage.setItem('data', JSON.stringify({ ...data, resultado: resultadoCalculado }));
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <FaXmark />
        </button>
        <div className="form-nutrition">
          <div className="input-box">
            <div className="gender-switch">
              <button
                className={data.sex === "male" ? "active" : ""}
                onClick={() => handleGenderChange("male")}
              >
                Male
              </button>
              <button
                className={data.sex === "female" ? "active" : ""}
                onClick={() => handleGenderChange("female")}
              >
                Female
              </button>
            </div>
          </div>
          <div className="input-box">
            <label>Age</label>
            <input
              onChange={handleChange}
             
              type="number"
              placeholder="23"
              required
            />
          </div>
          <div className="input-box">
            <label>Height</label>
            <input
              onChange={handleChange}
        
              type="number"
              placeholder="175 Cm"
              required
            />
          </div>
          <div className="input-box">
            <label>Weight</label>
            <input
              onChange={handleChange}
      
              type="number"
              placeholder="82 Kg"
              required
            />
          </div>
          <div className="input-box">
            <label>Activity</label>
            <select
              name="exercise"
              onChange={handleChange}
              value={data.exercise}
              required
            >
              <option value="">Activity</option>
              <option value="1.2">Sedentary: little or no exercicse</option>
              <option value="1.375">Light: exercise 1-3 times/week</option>
              <option value="1.55">Moderate: exercise 4-5 times/week</option>
              <option value="1.725">
                Active: instense exercise 6-7 times/week
              </option>
              <option value="1.9">
                Very Active: very intense exercise daily, of physical job
              </option>
            </select>
          </div>
          <button onClick={calculateResult} className="btn">
            Calculate
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
