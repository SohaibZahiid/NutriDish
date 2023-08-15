import React, { useState, useEffect } from "react";
import "../styles/Filter.css";

/*Hay que hacer que cuando se de click en el texto se active la box!!*/
const Filter = ({ onSearch }) => {
  const [alergico, setAlergico] = useState(false);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

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
                    id="frutosCheckbox"
                  />
                  <label htmlFor="frutosCheckbox">Frutos secos</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="vegetarian" id="huevoCheckbox"/>
                  <label htmlFor="huevoCheckbox">Huevo</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" id="marsicosCheckbox"/>
                  <label htmlFor="marsicosCheckbox">Mariscos</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" id="pescadoCheckbox"/>
                  <label htmlFor="pescadoCheckbox">Pescado</label>
                </div>
                <div className="allergy-checkbox-item">
                  <input type="checkbox" name="tag" value="non-vegeterian" id="lecheCheckbox"/>
                  <label htmlFor="lecheCheckbox">Leche</label>
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
            <input
              type="text"
              onChange={handleSearchChange}
              className="search"
              placeholder="Search..."
            />
          </div>
          <div className="form-group">
            <div className="tags-container">
              <div className="tag">
                <input type="checkbox" name="tag" value="vegan" id="veganCheckbox" />
                <label htmlFor="veganCheckbox">Vegan</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="vegetarian" id="vegeCheckbox" />
                <label htmlFor="vegeCheckbox">Vegeterian</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" id="non-vegeBox" />
                <label htmlFor="non-vegeBox">Non-Vegeterian</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="paleto" id="paletoBox"/>
                <label htmlFor="paletoBox">Paleto</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="pescadian" id="pescadianBox"/>
                <label htmlFor="pescadianBox">Pescadian</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
