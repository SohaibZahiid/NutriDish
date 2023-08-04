
function Testimonial({desc, name}) {
  return (
    <div  className="testimonial">
        <div>
            <p>{desc}
            </p>
            <p>{name}</p>
          </div>
     </div>
  )
}

export default Testimonial