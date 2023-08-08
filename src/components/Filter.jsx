import "../styles/Filter.css";

const Filter = () => {
  return (
    <>
      <div className="filter container">
        <form className="filter-form">
          <div className="form-group">
            <input type="text" className="search" placeholder="Search..." />
          </div>
          <div className="form-group">
            <div className="tags-container">
              <div className="tag">
                <input type="radio" name="tag" value="vegan" />
                <label>Vegan</label>
              </div>
              <div className="tag">
                <input type="radio" name="tag" value="vegetarian" />
                <label>Vegeterian</label>
              </div>
              <div className="tag">
                <input type="radio" name="tag" value="non-vegeterian" />
                <label>Non-Vegeterian</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
