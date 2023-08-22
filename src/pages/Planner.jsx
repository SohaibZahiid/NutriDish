import { useState } from "react";
import axios from "axios";
import "../styles/Planner.css";
import { toast } from "react-toastify";
import Recipe from "../components/Recipe";

function Planner() {
  const [recipes, setRecipes] = useState({});
  const [calories, setCalories] = useState(0);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getRecipes = async () => {
    const API = import.meta.env.VITE_API;

    if (calories) {
      try {
        const res = await axios.get(`${API}/recipes/suggestions/${calories}`);
        if (res.data.success) {
          setRecipes(res.data.data);
          console.log(res.data);
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
        <h2>Plan your meal today</h2>
        <div className="top">
          <input type="number" onChange={handleChange} />
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
