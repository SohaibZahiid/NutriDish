import React, { useEffect, useState } from "react";
import "../styles/Single.css"; 
import { useParams } from "react-router";
import axios from "axios";

function SingleRecipe() {
  const [receta, setReceta] = useState(true); // Cambio aquí: true para mostrar ingredientes por defecto
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
        <img className="r-image" src={`/imgs/ImagenesRecetasPlatos/${recipe.image}`} alt="recipe image" />
        <div className="r-content">
          <div className="cont-btn">
            <button className="btn" onClick={() => setReceta(true)}>Receta</button> 
            <button className="btn" onClick={() => setReceta(false)}>Descripcion</button> 
          </div>
          <div className="recipe-text-section">
            <div className={receta ? "hidden" : "r-description"}>
              <p>{ recipe.description}</p>
            </div>
            <ul className={receta ? "r-ingredients" : "hidden"}>
              {recipe.ingredients?.map((ingredient) => (
                <li key={ingredient.id}>{receta && ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRecipe;
