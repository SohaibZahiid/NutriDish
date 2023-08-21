import axios from "axios";
import "../styles/Recipe.css";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Recipe({
  id,
  image,
  type,
  title,
  creator,
  favorite,
  updateFavoriteStatus,
  allergens,
}) {
  const { currentUser } = useContext(AuthContext);
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();
  const addFavorite = async (recipeId) => {
    try {
      if (currentUser) {
        const res = await axios.post(
          `${API}/recipe/${currentUser.id}/favorites/${recipeId}`
        );
        updateFavoriteStatus(recipeId, !favorite);
        if (res.data.status == 200) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fillHeart = favorite ? "filled" : "";

  const redirectToDetails = () => {
    navigate(`/recipe/${id}`)
  }

  const handleFavorite = e => {
    e.stopPropagation()
    addFavorite(id)
  }

  const allergenImages = {
    'Lácteos': '/imgs/allergens/Lacteos.svg',
    'Gluten': '/imgs/allergens/Gluten.svg',
    'Frutos secos': '/imgs/allergens/FrutosCascara.svg',
    'Soja': '/imgs/allergens/Soja.svg',
    'Huevos': '/imgs/allergens/huevo.svg',
    'Cacahuetes': '/imgs/allergens/Cacahuete.svg'
  };

  return (
    <div className="recipe" onClick={redirectToDetails}>
      <div className="recipe-container">
        <img src={image} />
        <FaHeart
          className={`heart ${fillHeart}`}
          onClick={handleFavorite}
        />
        <div className="recipe-description">
          <div className="small">{type}</div>
          <div className="title">{title}</div>
          <div className="creator">{creator}</div>
        </div>
      </div>
    </div>
  );
}

/* <div>
          {allergens.map(allergen => (
            <img
              src={allergenImages[allergen.name]}
              alt={allergen.name}
            />
          ))}
        </div>*/   //por si te sirve de algo, ahi te lo dejo
export default Recipe;
