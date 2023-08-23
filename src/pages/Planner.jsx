import { useState } from "react";
import axios from "axios";
import "../styles/Planner.css";
import { toast } from "react-toastify";
import Recipe from "../components/Recipe";

function Planner() {
  const [recipes, setRecipes] = useState({});
  const [calories, setCalories] = useState(0);
  const [dietary, setDietary] = useState("non-vegetarian");
  const [open, setOpen] = useState(false);

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

  return (
    <div className="planner section-x2">
      <div className="planner-container container">
        <div className="container-explanation">
          <h2>Planificador de Calorías</h2>
          <p>
            Tu guía personalizada para alcanzar tus metas calóricas diarias.{" "}
          </p>
          <p>
            Simplemente introduce la cantidad de calorías que deseas consumir y
            nuestro planificador seleccionará automáticamente las recetas que se
            ajusten a tu necesidad.{" "}
          </p>
          <p>
            Disfruta de deliciosas comidas mientras te mantienes en el camino
            hacia tus metas nutricionales.
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
              >
                <input type="text" className="text-box" placeholder={dietary} />
                <div className="option">
                  <div onClick={() => setDietary("non-vegetarian")}>
                    Non-Vegetarian
                  </div>
                  <div onClick={() => setDietary("vegetarian")}>Vegetarian</div>
                  <div onClick={() => setDietary("vegan")}>Vegan</div>
                  <div onClick={() => setDietary("pescatarian")}>
                    Pescatarian
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn" onClick={getRecipes}>
            Get Plan
          </button>
        </div>
        {recipes.recipes && (
          <div className="total-nutritions">
            <p>Total Calories: {recipes.combinedNutrition.calories}</p>
            <p>Total Proteins: {recipes.combinedNutrition.protein}</p>
            <p>
              Total Carbohydrates: {recipes.combinedNutrition.carbohydrates}
            </p>
            <p>Total Fats: {recipes.combinedNutrition.fats}</p>
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
  );
}

export default Planner;
