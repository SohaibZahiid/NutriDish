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
          className={`content ${toggleState == "description" ? "active-content" : ""
            }`}
        >
          <h2>Description</h2>
          <hr />
          <p>{recipe.description}</p>
          <div className="time-servings-container">
            <div className="time-container">
              <h2>Total Time:</h2>
              <p>{recipe.totalTime}</p>
            </div>
            <div className="servings-container">
              <h2>Number of servings:</h2>
              <p>{recipe.servings}</p>
            </div>
          </div>

        </div>
        <div
          className={`content ${toggleState == "ingredients" ? "active-content" : ""
            }`}
        >
          <h2>Ingredients</h2>
          <hr />

          <ul className="ingredient-list">
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>
            ))}
          </ul>
        </div>
        <div
          className={`content ${toggleState == "nutritions" ? "active-content" : ""
            }`}
        >
          <h2>Nutritions</h2>
          <hr />
          <p>
            Calorias: {recipe.nutrition?.calories} <br />
            Carbohydrates: {recipe.nutrition?.carbohydrates}<br />
            Facts: {recipe.nutrition?.fats}<br />
            Protein: {recipe.nutrition?.protein}<br />
          </p>
        </div>

        <div
          className={`content ${toggleState == "instructions" ? "active-content" : ""
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
