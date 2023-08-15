import Recipe from "../components/Recipe";
import "../styles/Breakfast.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

function Breakfast({recipesBrakfast}) {
 /* const [recipes, setRecipes] = useState([]);

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
*/

  return (
    <>
      <div className="breakfast section-x2">
        <Filter />
        <div className="breakfast-container container">
          
        {recipesBrakfast.map((recipe) => (
            <Link to={`/singelbreakfast/${recipe.id}`}>
                  <div className="recipe">
        <div className="recipe-container">
          <img src="imgs/veggieNoodles.webp" />
          <div className="recipe-description">
            <div className="small">{recipe.mealType}</div>
            <div className="title">{recipe.mealType}</div>
            <div className="creator">{recipe.createdBy}</div>
          </div>
        </div>
      </div></Link>
            

          ))}
        </div>
      </div>
    </>
  );
}

export default Breakfast;
