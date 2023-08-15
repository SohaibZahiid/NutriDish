import React, { useState } from "react"
import "../styles/Single.css"
import imgfirst from '../../public/imgs/dieta.png'
import { useParams } from "react-router"


function SingelBreakfast({recipesBrakfast}) {
  const [receta, setReceta] = useState(false)
  const { id} = useParams();
  console.log(useParams());

  const recBreakfast = recipesBrakfast.find((recipe) => recipe.id.toString() === id);


  return (
    <>
    <h2>{recBreakfast.name}</h2>
        <div className="div-single container section-x2">
      <img className="firstimg" src="" alt="firstimg" />
      <div>
        
      
        

        <button onClick={() => setReceta(false)}>Receta</button>
        <button onClick={() => setReceta(true)}>Descripcion</button>       
        <div className="text">
          <div className={receta ? "" : "text-f"}>
            <p>{recBreakfast.description}</p>
          </div>
          <div className={receta ? "text-s" : ""}>
            <div>
              <p></p>
              <p>sal 2g</p>
              <p>sal 2g</p>
              <p>sal 2g</p>
              <p>sal 2g</p>
              <p>sal 2g</p>
              <p>sal 2g</p>
              <p>sal 2g</p>
            </div>
          </div>

        </div>
      </div>
    </div>


    </>
  )
}

export default SingelBreakfast