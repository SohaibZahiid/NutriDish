import React, { useEffect, useState } from "react";
import "../styles/Single.css";
import { useParams } from "react-router";
import axios from "axios";

function Single() {
  const [receta, setReceta] = useState(false);
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
      <h2>{recipe.name}</h2>
      <div className="div-single container section-x2">
        <img className="recipe-img" src={`/imgs/ImagenesRecetasPlatos/${recipe.image}`} alt="recipe image" />
        <div>
          <button onClick={() => setReceta(false)}>Receta</button>
          <button onClick={() => setReceta(true)}>Descripcion</button>
          <div className="text">
            <div className={receta ? "" : "text-f"}>
              <p>{recipe.description}</p>
            </div>
            <div className={receta ? "text-s" : ""}>
            {recipe.ingredients?.map((ingredient) => (
                <p key={ingredient.id}>{ingredient.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
