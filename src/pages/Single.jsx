import React, { useEffect, useState } from "react";
import "../styles/Single.css";
import { useParams } from "react-router";
import axios from "axios";
import Tab from "../components/Tab";

function SingleRecipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}/recipe/${id}`);
        setRecipe(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipe();
  }, []);

  return (
    <>
      <div className="r-header">
        <h2>{recipe.name}</h2>
      </div>
      <div className="r-container">
        <img
          className="r-image"
          src={`/imgs/ImagenesRecetasPlatos/${recipe.image}`}
          alt="recipe image"
        />
        <div className="r-content">
          <Tab recipe={recipe}/>
        </div>
      </div>
    </>
  );
}

export default SingleRecipe;
