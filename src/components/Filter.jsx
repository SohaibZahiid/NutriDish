import React from "react";
import "../styles/Filter.css";

const Filter = ({ onSearch, onTagCheckboxChange, selectedTags }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <>
      <div className="filter container allergy-filter-container">
        <form className="filter-form allergy-filter-form">
          <div className="form-group">
            <input
              type="text"
              onChange={handleSearchChange}
              className="search"
              placeholder="Search..."
            />
          </div>

          <div className="form-group allergy-checkbox-group">
            <div className="tags-container allergy-checkbox-list">
              <div className="tag allergy-checkbox-item">
                <input
                  type="checkbox"
                  name="tag"
                  value="vegan"
                  id="veganCheckbox"
                  checked={selectedTags.includes("vegan")}
                  onChange={() => onTagCheckboxChange("vegan")}
                />
                <label htmlFor="veganCheckbox">
                  <img src="/imgs/diete/icons8-vegan-94.png" />
                </label>
              </div>

              <div className="tag allergy-checkbox-item">
                <input
                  type="checkbox"
                  name="tag"
                  value="vegetarian"
                  id="vegeCheckbox"
                  checked={selectedTags.includes("vegetarian")}
                  onChange={() => onTagCheckboxChange("vegetarian")}
                />
                <label htmlFor="vegeCheckbox">
                  <img src="/imgs/diete/icons8-vegetarian-94.png" />
                </label>
              </div>

              <div className="tag allergy-checkbox-item">
                <input
                  type="checkbox"
                  name="tag"
                  value="non vegetarian"
                  id="non-vegeBox"
                  checked={selectedTags.includes("non vegetarian")}
                  onChange={() => onTagCheckboxChange("non vegetarian")}
                />
                <label htmlFor="non-vegeBox"><img src="/imgs/diete/icons8-meat-94.png" /></label>
              </div>
              <div className="tag allergy-checkbox-item">
                <input
                  type="checkbox"
                  name="tag"
                  value="pescatarian"
                  id="pescatarianBox"
                  checked={selectedTags.includes("pescatarian")}
                  onChange={() => onTagCheckboxChange("pescatarian")}
                />
                <label htmlFor="pescatarianBox"><img src="/imgs/diete/icons8-fish-94.png" /></label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
