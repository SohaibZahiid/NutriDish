import Recipe from "../components/Recipe";
import "../styles/Dinner.css";
import '../styles/Recipe.css'
import {useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import Single from "./Single";

function Dinner({recipes}) {
/*  var API = import.meta.env.VITE_API;
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

*/
  return (
    <>
   <div className="dinner section-x2">
      <Filter />
        <div className="dinner-container container">
     
          {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`}>
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

export default Dinner;
