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
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}${APIEndpoint}`, {
          params: {
            searchKey: searchTerm,
            tags: selectedTags.join(","),
          },
        });
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, [currentUser, APIEndpoint, searchTerm, selectedTags]);

  const updateFavoriteStatus = (recipeId, isFavorite) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, favorite: isFavorite } : recipe
      )
    );
  };

  const handleTagCheckboxChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <div className={`meal section-x2`}>
        <Filter
          onSearch={(term) => setSearchTerm(term)}
          onTagCheckboxChange={handleTagCheckboxChange}
          selectedTags={selectedTags}
        />
        <div className="allergens">
          <div className="allergens-container container">
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Cacahuetes.svg" alt="Cacahuetes" />
              <span className="tooltiptext">Cacahuetes</span>
            </div>
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Frutos secos.svg" alt="Frutos Secos" />
              <span className="tooltiptext">Frutos Secos</span>
            </div>
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Huevos.svg" alt="Huevos" />
              <span className="tooltiptext">Huevos</span>
            </div>
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Gluten.svg" alt="Gluten" />
              <span className="tooltiptext">Gluten</span>
            </div>
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Lácteos.svg" alt="Lacteos" />
              <span className="tooltiptext">Lácteos</span>
            </div>
            <div className="tooltip">
              <img src="/imgs/AlergenosSinTexto/Soja.svg" alt="Soja" />
              <span className="tooltiptext">Soja</span>
            </div>
          </div>

        </div>
        <div className={`meal-container container`}>
          {recipes.length > 0 ? recipes.map(({ id, image, mealType, name, createdBy, favorite, tags }) => (
            <Recipe
              key={id}
              id={id}
              image={`imgs/ImagenesRecetasPlatos/${image}`}
              type={mealType}
              title={name}
              creator={createdBy}
              favorite={favorite}
              updateFavoriteStatus={updateFavoriteStatus}
              allergens={tags}
            />
          )) : (
            <p>0 Recipes Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Meal;
