import Recipe from "../components/Recipe";
import "../styles/Favorite.css";
import { AuthContext } from './../contexts/AuthContext';

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Filter from "../components/Filter";

function Favorite() {
  const [recipes, setRecipes] = useState([]);

  const { currentUser} = useContext(AuthContext);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;


      try {
        const res = await axios.get(`${API}/recipes/favorite/${currentUser.id}`);
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <div className="favorites section-x2">
        <Filter />
        <div className="favorites-container container">
          {recipes.map(({recipe}) => (
            <Recipe
              key={recipe.id}
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

export default Favorite;
