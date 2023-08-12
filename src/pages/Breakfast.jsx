import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Recipe from "../components/Recipe";
import Filter from "../components/Filter";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/Breakfast.css";

function Breakfast() {
  const [recipes, setRecipes] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const endpoint = !currentUser
          ? "/recipes/breakfast"
          : `/recipes/favorites/${currentUser.id}`;

        const res = await axios.get(`${API}${endpoint}`);
        setRecipes(res.data);;
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, [currentUser]);

  const updateFavoriteStatus = (recipeId, isFavorite) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, favorite: isFavorite } : recipe
      )
    );
  };

  return (
    <>
      <div className="breakfast section-x2">
        <Filter />
        <div className="breakfast-container container">
          {recipes.map(({ id, image, mealType, name, createdBy, favorite }) => (
            <Recipe
              key={id}
              id={id}
              image={image}
              type={mealType}
              title={name}
              creator={createdBy}
              favorite={favorite}
              updateFavoriteStatus={updateFavoriteStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Breakfast;
