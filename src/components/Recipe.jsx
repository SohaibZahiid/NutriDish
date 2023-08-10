import React,{useState} from 'react'
import '../styles/Recipe.css'
import likefoto from '/imgs/like.png'
import dislike from '/imgs/dislike.png'
import SinglePage from '../pages/SinglePage'

function Recipe({image, type, title, creator}) {
  const [like, setLike] = useState(false)
  const [single] = useState(true)

  const likefood =()=>{
    setLike(true)

  }
  const dislikefood=()=>{
    setLike(false)
  }
  return (
    <>
      <div className="recipe">
        <div className="recipe-container">
          <img src="imgs/veggieNoodles.webp" />
          <div>
            <img className='dislike' onClick={likefood} src={dislike} alt="Dislike"/>
            <img onClick={dislikefood} className={like?"like":"hid"} src={likefoto} alt="like" />
          </div>
          <div className="recipe-description">
            <div className="small">{type}</div>
            <div className="title">{title}</div>
            <div className="creator">{creator}</div>
            <a href="/SingelPage">{single? <h3>Ver Mas</h3>:<SinglePage type={type}title={title}creator={creator} like={like}
            likefood={likefood} dislikefood={dislikefood} likefoto={likefoto}dislike={dislike} 
            />}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe