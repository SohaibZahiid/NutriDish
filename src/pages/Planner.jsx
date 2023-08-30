import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../styles/Planner.css";
import { toast } from "react-toastify";
import Recipe from "../components/Recipe";
import Calcula from "./Calcula";
import Modal from "../components/Modal";

function Planner() {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("meal")) || {}
  );
  const [calories, setCalories] = useState(0);
  const [dietary, setDietary] = useState("non-vegetarian");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const localStorageData = JSON.parse(localStorage.getItem("calories"));

  const dropRef = useRef();

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getRecipes = async () => {
    const API = import.meta.env.VITE_API;

    if (calories) {
      try {
        const res = await axios.get(
          `${API}/recipes/suggestions/${calories}/${dietary}`
        );
        if (res.data.success) {
          setRecipes(res.data.data);
          localStorage.setItem("meal", JSON.stringify(res.data.data));
        } else {
          toast.error(res.data?.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Please enter the calories");
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (!dropRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", handler);
    }
  });

  return (
    <>
      <div className="planner section-x2">
        <div className="planner-container container">
          <div>
            <div className="container-explanation">
              <h2>Caloric expenditure calculator</h2>
              <p>
                This tool allows you to estimate the number of calories your
                body needs in a day, based on factors like your age, weight,
                height, gender, and level of physical activity.
              </p>
              <p>
                The calculator provides you with information about your basal
                metabolism, the calories needed to maintain, lose or gain
                weight.
              </p>
              <p>
                Use this information as a reference for your nutritional goals.
                It is always recommended to consult with a professional for
                personalized advice.
              </p>
            </div>
          </div>
          {!localStorageData && (
            <div className="btn-calories-container">
              <button
                className="btn-modal btn"
                onClick={() => setOpenModal(true)}
              >
                Calculate calories
              </button>
            </div>
          )}
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
          <Calcula />
          <div className="container-explanation">
            <h2>Meal planner</h2>
            <p>Your personalized guide to reach your daily caloric goals.</p>
            <p>
              Simply enter the number of calories you wish to consume, and our
              planner will automatically select the recipes that fit your needs.
            </p>
            <p>
              Enjoy delicious meals while staying on track towards your
              nutritional goals.
            </p>
          </div>
          <div className="top">
            <div className="input-container">
              <div className="input-box">
                <label>Calories</label>
                <input
                  type="number"
                  onChange={handleChange}
                  placeholder="Ejemplo: 2000"
                />
              </div>
              <div className="input-box">
                <label>Diet</label>
                <div
                  onClick={() => setOpen(!open)}
                  className={`select ${open && "active"}`}
                  ref={dropRef}
                >
                  <input
                    type="text"
                    className="text-box"
                    placeholder={dietary}
                  />
                  <div className="option">
                    <div onClick={() => setDietary("non-vegetarian")}>
                      Non-Vegetarian
                    </div>
                    <div onClick={() => setDietary("vegetarian")}>
                      Vegetarian
                    </div>
                    <div onClick={() => setDietary("vegan")}>Vegan</div>
                    <div onClick={() => setDietary("pescatarian")}>
                      Pescatarian
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn" onClick={getRecipes}>
              Get plan
            </button>
          </div>
          {recipes.recipes && (
            <div className="total-nutritions">
              <p>Calories: {recipes.combinedNutrition.calories}</p>
              <p>Proteins: {recipes.combinedNutrition.protein}</p>
              <p>Carbohydrates: {recipes.combinedNutrition.carbohydrates}</p>
              <p>Fats: {recipes.combinedNutrition.fats}</p>
            </div>
          )}
          <div className="planned-meals">
            {recipes.recipes &&
              recipes.recipes.map(
                ({ id, image, mealType, name, createdBy, favorite, tags }) => (
                  <Recipe
                    key={id}
                    id={id}
                    image={`imgs/ImagenesRecetasPlatos/${image}`}
                    type={mealType}
                    title={name}
                    creator={createdBy}
                    favorite={favorite}
                    allergens={tags}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Planner;
