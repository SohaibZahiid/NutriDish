import React, { useState } from "react"
import "../styles/Single.css"
import imgfirst from '../../public/imgs/dieta.png'

function Single() {
  const [receta, setReceta] = useState(false)
  return (
    <> <div className="div-single container section-x2">
      <img className="firstimg" src={imgfirst} alt="firstimg" />
      <div>

        <button onClick={() => setReceta(false)}>Receta</button>
        <button onClick={() => setReceta(true)}>Descripcion</button>       
        <div className="text">
          <div className={receta ? "" : "text-f"}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem
              aliquid deleniti, unde rerum quis in accusantium eos. Voluptatem
              necessitatibus perferendis fuga deserunt fugiat nemo mollitia vitae
              alias ut quo?</p>
          </div>
          <div className={receta ? "text-s" : ""}>
            <div>
              <p>sal 2g</p>
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

export default Single