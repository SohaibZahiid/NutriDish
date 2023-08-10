import React,{useState} from "react";
import "../styles/Filter.css";

const Filter = () => {
  const [alergico, setAlergico] = useState(false)

  return (
    <>
    <div className="btnalergico">
        <h3>Eres Alergico</h3>
    <button onClick={()=>setAlergico(true)}>si</button>
    <button onClick={()=>setAlergico(false)}>no</button>
    </div>
  
      <div className="container ">
        <form className="filter-form">
          <div className="form-group">
            <input type="text" className="search" placeholder="Search..." />
          </div>
{alergico?
          <div className="form-group">
            <div className="tags-container">
              <div className="tag">
                <input className="chek1" type="checkbox" name="tag" value="vegan" />
                <label>Frutos secos</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="vegetarian" />
                <label>Huevo</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Mariscos</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Pescado</label>
              </div>
              <div className="tag">
                <input type="checkbox" name="tag" value="non-vegeterian" />
                <label>Leche</label>
              </div>
            </div>
          </div>
          :""}
        </form>
      </div>
    </>
  );
};

export default Filter;
