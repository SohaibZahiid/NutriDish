import axios from "axios";
import "../styles/Recipe.css";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./../contexts/AuthContext";

function Recipe({
  id,
  image,
  type,
  title,
  creator,
  favorite,
  updateFavoriteStatus,
}) {
  const { currentUser } = useContext(AuthContext);
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  const addFavorite = async (recipeId) => {
    try {
      if (currentUser) {
        await axios.post(
          `${API}/recipe/${currentUser.id}/favorites/${recipeId}`
        );
        updateFavoriteStatus(recipeId, true);
      } else {
        navigate("/login")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fillHeart = favorite ? "filled" : "";

  return (
    <>
      <div className="recipe">
        <div className="recipe-container">
          <img src="/imgs/veggieNoodles.webp" />
          <FaHeart
            className={`heart ${fillHeart}`}
            onClick={() => addFavorite(id)}
          />

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
