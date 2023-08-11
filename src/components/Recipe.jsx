import axios from "axios";
import "../styles/Recipe.css";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "./../contexts/AuthContext";

function Recipe({ id, image, type, title, creator }) {

  const { currentUser } = useContext(AuthContext);
  
  const addFavorite = async (recipeId) => {
    const API = import.meta.env.VITE_API;

    try {
      const res = await axios.post(
        `${API}/recipe/${currentUser.id}/favorites/${recipeId}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="recipe">
        <div className="recipe-container">
          <img src="/imgs/veggieNoodles.webp" />
          <FaHeart className="heart" onClick={() => addFavorite(id)} />
          <div className="recipe-description">
            <div className="small">{type}</div>
            <div className="title">{title}</div>
            <div className="creator">{creator}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
