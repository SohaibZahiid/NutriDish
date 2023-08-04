import Recipe from "../components/Recipe";
import Testimonial from "../components/Testimonial";
import "../styles/Home.css"

function Home() {
    return (
      <div>
      <section id="hero">
        {/* Hero Section */}
        <div id="hero-content">
          <h1>Comienza Tu Viaje hacia una Vida Más Saludable Hoy</h1>
          <p>Descubre recetas deliciosas y saludables que te encantarán.</p>
          <button>Explora Recetas</button>
        </div>
      </section>
  
        {/* Sección de Características */}
        <section id="features">
          <h2>Lo Que Ofrecemos</h2>
          <div className="feature">
            <h3>Recetas Personalizadas</h3>
            <h3>Guias nutricionales</h3>
            <h3>Soporte a la Comunidad</h3>
          </div>
          {/* Agrega más características aquí */}
        </section>
  
        {/* Sección de Recetas Destacadas */}
        <section id="recipes">
          <h2>Nuestras Recetas Mas Populares</h2>
          <div className="recipe-container container ">
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
          </div>
          {/* Agrega más recetas aquí */}
        </section>
  
        {/* Sección de Testimonios */}
        <section id="testimonials">
        <h2>Lo Que Nuestros Miembros Dicen</h2>
        <div className="testimonial-container testimonial">
          <Testimonial desc="Un lugar donde me dan deliciosas recetas personalizadas!!" name="Santiago C"/>
          <Testimonial desc="Delicoso y saludable!!" name="Sohaib Z"/>
          <Testimonial desc="Aqui encontre la importancia de comer sano" name="Mirjan K"/>
        </div>
        {/* Agrega más testimonios aquí */}
        </section>
  
        {/* CTA Final */}
        <section id="final-cta">
          <h2>Únete a Nosotros Hoy y Transforma Tu Salud</h2>
          <button>Regístrate Ahora</button>
        </section>
      </div>
    );
}

export default Home

