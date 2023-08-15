import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Recipe from "../components/Recipe";
import Filter from "../components/Filter";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/Meal.css";

function Meal({ APIEndpoint }) {
  const [recipes, setRecipes] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}${APIEndpoint}`, {
          params: {
            searchKey: searchTerm
          }
        });
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, [currentUser, APIEndpoint, searchTerm]);

  const updateFavoriteStatus = (recipeId, isFavorite) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, favorite: isFavorite } : recipe
      )
    );
  };

  return (
    <>
      <div className={`meal section-x2`}>
        <Filter onSearch={(term) => setSearchTerm(term)}/>
        <div className={`meal-container container`}>
          {recipes.map(({ id, image, mealType, name, createdBy, favorite }) => (
            <Recipe
              key={id}
              id={id}
              image={`imgs/ImagenesRecetasPlatos/${image}`}
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

export default Meal;
