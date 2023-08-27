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
          <div className="content-desc">
            <p>{recipe.description}</p>
            <div className="time-servings-container">
              <div className="time-container">
                <h4>Total Time:</h4>
                <p>{recipe.totalTime}</p>
              </div>
              <div className="servings-container">
                <h4>Number of servings:</h4>
                <p>{recipe.servings}</p>
                {console.log(recipe.tags)}
              </div>
            </div>
            <div className="smallT">
              <div className="allergensT">
                {recipe.tags?.map((allergen) => (
                  <img
                    key={allergen.id}
                    src={`/imgs/AlergenosSinTexto/${allergen.name}.svg`}
                    alt=""
                  />
                ))}
              </div>
              </div>
          </div>
        </div>
        <div
          className={`content ${toggleState == "ingredients" ? "active-content" : ""
            }`}
        >
          <h2>Ingredients</h2>
          <hr />

          <ul className="content-desc ingredient-list">
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name} {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
        <div className={`content ${toggleState == "nutritions" ? "active-content" : ""}`}>
          <h2>Nutritions</h2>
          <hr />
          <div className="content-desc">
            <div className="nutrition-label">
              <div className="nutrition-row">
                <span className="label">Calories:</span>
                <span className="value">{recipe.nutrition?.calories}</span>
              </div>
              <div className="nutrition-row">
                <span className="label">Carbohydrates:</span>
                <span className="value">{recipe.nutrition?.carbohydrates}</span>
              </div>
              <div className="nutrition-row">
                <span className="label">Fats:</span>
                <span className="value">{recipe.nutrition?.fats}</span>
              </div>
              <div className="nutrition-row">
                <span className="label">Protein:</span>
                <span className="value">{recipe.nutrition?.protein}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`content ${toggleState == "instructions" ? "active-content" : ""
            }`}
        >
          <h2>Instructions</h2>
          <hr />
          <div className="content-desc">
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
