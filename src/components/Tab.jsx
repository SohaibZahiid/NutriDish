import "../styles/Tab.css";
import { useState } from "react";

function Tab({ recipe }) {
  const [toggleState, setToggleState] = useState("description");

  const toggleTab = (nutri) => {
    setToggleState(nutri);
  };
  return (
    <div className="tab-container">
      <div className="tabs">
        <button
          onClick={() => toggleTab("description")}
          className={`tab ${toggleState == "description" ? "active-tab" : ""}`}
        >
          Description
        </button>
        <button
          onClick={() => toggleTab("ingredients")}
          className={`tab ${toggleState == "ingredients" ? "active-tab" : ""}`}
        >
          Ingredients
        </button>
        <button
          onClick={() => toggleTab("nutritions")}
          className={`tab ${toggleState == "nutritions" ? "active-tab" : ""}`}
        >
          Nutritions
        </button>
        <button
          onClick={() => toggleTab("instructions")}
          className={`tab ${toggleState == "instructions" ? "active-tab" : ""}`}
        >
          Instructions
        </button>
      </div>
      <div className="content-container">
        <div
          className={`content ${
            toggleState == "description" ? "active-content" : ""
          }`}
        >
          <h2>Description</h2>
          <hr />
          <p>{recipe.description}</p>
        </div>
        <div
          className={`content ${
            toggleState == "ingredients" ? "active-content" : ""
          }`}
        >
          <h2>Ingredients</h2>
          <hr />
          <p>
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient.id}>{recipe && ingredient.name}</li>
            ))}
          </p>
        </div>
        <div
          className={`content ${
            toggleState == "nutritions" ? "active-content" : ""
          }`}
        >
          <h2>Nutritions</h2>
          <hr />
          <p>
            {recipe.nutrition?.calories}
            {recipe.nutrition?.carbohydrates}
            {recipe.nutrition?.fats}
            {recipe.nutrition?.protein}
          </p>
        </div>

        <div
          className={`content ${
            toggleState == "instructions" ? "active-content" : ""
          }`}
        >
          <h2>Instructions</h2>
          <hr />
          <p>
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tab;
