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

    // if (!isFavorite) {
    //   setRecipes((prevRecipes) =>
    //     prevRecipes.filter((recipe) => recipe.id !== recipeId)
    //   );
    // }
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
        <div className={`meal-container container`}>
          {recipes.map(({ id, image, mealType, name, createdBy, favorite, tags }) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Meal;
