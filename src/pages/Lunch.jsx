import Recipe from "../components/Recipe";
import "../styles/Lunch.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";

function Lunch() {
  var API = import.meta.env.VITE_API;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {

      try {
        const res = await axios.get(`${API}/recipes/lunch`);
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <div className="lunch section-x2">
      <Filter />
        <div className="lunch-container container">
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

export default Lunch;
