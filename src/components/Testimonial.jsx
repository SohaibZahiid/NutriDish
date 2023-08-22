import '../styles/Testimonial.css'

function Testimonial({desc, name}) {
  return (
    <div  className="testimonial">
        <div>
            <blockquote>{desc}</blockquote>
            <p>{name}</p>
          </div>
     </div>
  )
}

export default Testimonial