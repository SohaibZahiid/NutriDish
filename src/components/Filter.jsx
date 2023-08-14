import React, { useState } from "react";
import "../styles/Filter.css";


/*Hay que hacer que cuando se de click en el texto se active la box!!*/
const Filter = () => {
  const [alergico, setAlergico] = useState(false);

  return (
    <>
      <div className="btnalergico">
        <h3>Do you have any allergies?</h3>
        <div className="btnYn">
          <button className="Ybtn btn" onClick={() => setAlergico(true)}>
            Yes
          </button>
          <button className="Ybtn btn" onClick={() => setAlergico(false)}>
            No
          </button>
        </div>
      </div>

      <div className="allergy-filter-container">
        <form className="allergy-filter-form">
          {alergico ? (
            <div className="allergy-checkbox-group">
              <div className="allergy-checkbox-list">
                <div className="allergy-checkbox-item">
                  <input
                    className="allergy-check"
                    type="checkbox"
                    name="tag"
                    value="vegan"
                  />
                  <label>Frutos secos</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="vegetarian" />
                  <label>Huevo</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" />
                  <label>Mariscos</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" />
                  <label>Pescado</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" />
                  <label>Leche</label>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="filter container">
        <form className="filter-form">
          <div className="form-group">
            <input type="text" className="search" placeholder="Search..." />
          </div>
          <div className="form-group">
            <div className="tags-container">
              <div className="tag">
                <input type="checkbox" name="tag" value="vegan" />
                <label>Vegan</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="vegetarian" />
                <label>Vegeterian</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Non-Vegeterian</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Paleto</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Pescadian</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
