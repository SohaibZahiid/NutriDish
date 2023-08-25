import { useState } from "react";
import "../styles/Modal.css";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

function Modal({ open, onClose }) {
  if (!open) return null;

  const localStorageData = JSON.parse(localStorage.getItem("calories"))

  const [data, setData] = useState({
    age: localStorageData?.age || "",
    weight: localStorageData?.weight || "",
    height: localStorageData?.height || "",
    sex: localStorageData?.sex || "",
    exercise: localStorageData?.exercise || "",
    results: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setData((prevData) => ({ ...prevData, sex: value }));
  };

  const calculateResult = (e) => {
    const { age, weight, height, sex, exercise } = data;

    if (!age || !weight || !height || !sex || !exercise) {
      toast.error("All fields are required");
      return;
    }

    let bmr = 0,
      maintain,
      lose,
      gain;
    if (sex === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (sex === "female") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    bmr = parseFloat(bmr.toFixed(0))

    maintain = Math.round(bmr * exercise);
    lose = Math.round((bmr * exercise) / 1.17633517495);
    gain = Math.round(bmr * exercise * 1.15);

    const calculatedResults = {
      bmr: bmr,
      maintain: maintain,
      lose: lose,
      gain: gain,
    };

    setData((prevData) => ({ ...prevData, results: calculatedResults }));

    localStorage.setItem('calories', JSON.stringify({ ...data, results: calculatedResults }));
    
    toast.success("Data created successfully")

    onClose()

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
              name="age"
              type="number"
              placeholder="23"
              value={data.age}
              required
            />
          </div>
          <div className="input-box">
            <label>Height</label>
            <input
              onChange={handleChange}
              name="height"
              type="number"
              placeholder="175 Cm"
              value={data.height}
              required
            />
          </div>
          <div className="input-box">
            <label>Weight</label>
            <input
              onChange={handleChange}
              name="weight"
              type="number"
              placeholder="82 Kg"
              value={data.weight}
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
