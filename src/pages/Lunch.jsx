import Recipe from "../components/Recipe";
import "../styles/Lunch.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";

function Lunch({recipesLunch}) {
  /*var API = import.meta.env.VITE_API;
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
  }, []);*/


  return (
    <>
      <div className="lunch section-x2">
      <Filter />
        <div className="lunch-container container">
        {recipesLunch.map((recipelunch) => (
            <Link to={`/singlelunch/${recipelunch.id}`}>
                  <div className="recipe">
        <div className="recipe-container">
          <img src="imgs/veggieNoodles.webp" />
          <div className="recipe-description">
            <div className="small">{recipelunch.mealType}</div>
            <div className="title">{recipelunch.mealType}</div>
            <div className="creator">{recipelunch.createdBy}</div>
          </div>
        </div>
      </div></Link>
            

          ))}
        </div>
      </div>
    </>
  );
}

export default Lunch;
