import Recipe from "../components/Recipe";
import "../styles/Breakfast.css";

import { useEffect, useState } from "react";
import axios from "axios";

function Breakfast() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}/recipes/breakfast`);
        setRecipes(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <div className="breakfast section">
        <div className="breakfast-container container">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              image={recipe.image}
              type={recipe.mealType}
              title={recipe.name}
              creator={recipe.createdBy}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Breakfast;
