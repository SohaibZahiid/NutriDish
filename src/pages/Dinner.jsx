import Recipe from "../components/Recipe";
import "../styles/Dinner.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";

function Dinner() {
  var API = import.meta.env.VITE_API;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {

      try {
        const res = await axios.get(`${API}/recipes/dinner`);
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <div className="dinner section-x2">
      <Filter />
        <div className="dinner-container container">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
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

export default Dinner;
