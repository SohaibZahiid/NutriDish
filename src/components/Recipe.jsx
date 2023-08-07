import '../styles/Recipe.css'

function Recipe({image, type, title, creator}) {
  return (
    <>
      <div className="recipe">
        <div className="recipe-container">
          <img src="imgs/veggieNoodles.webp" />
          <div className="recipe-description">
            <div className="small">{type}</div>
            <div className="title">{title}</div>
            <div className="creator">{creator}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe