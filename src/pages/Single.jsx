import React, { useEffect, useState } from "react";
import "../styles/Single.css";
import { useParams } from "react-router";
import axios from "axios";

function Single() {
  const [receta, setReceta] = useState(false);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}/recipe/${id}`);
        console.log(res);
        setRecipe(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <h2>{recipe.name}</h2>
      <div className="div-single container section-x2">
        <img
          className="recipe-img"
          src={`/imgs//ImagenesRecetasPlatos/${recipe.image}`}
          alt="recipe image"
        />
        <div>
          <button onClick={() => setReceta(false)}>Receta</button>
          <button onClick={() => setReceta(true)}>Descripcion</button>
          <div className="text">
            <div className={receta ? "" : "text-f"}>
              <p>{recipe.description}</p>
            </div>
            <div className={receta ? "text-s" : ""}>
              {recipe.ingredients && (
                <div>
                  {recipe.ingredients.map((ingredient) => (
                    <p key={ingredient.id}>
                      {ingredient.name} {ingredient.quantity} {ingredient.unit}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
