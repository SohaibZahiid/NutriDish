import React from 'react'

const SinglePage = ({ type, title, creator,like,likefood,dislikefood,likefoto,dislike}) => {
  return (
  <>
    <div className="recipe">
        <div className="recipe-container">
          <img src="imgs/veggieNoodles.webp" />
          <div  >
            <img className='dislike' onClick={likefood} src={dislike} alt="Dislike"/>
            <img onClick={dislikefood} className={like?"like":"hid"} src={likefoto} alt="like" />
          </div>
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

export default SinglePage