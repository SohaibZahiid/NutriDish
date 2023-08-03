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
            <p>Descripción de esta característica.</p>
          </div>
          {/* Agrega más características aquí */}
        </section>
  
        {/* Sección de Recetas Destacadas */}
        <section id="recipes">
          <h2>Recetas Populares</h2>
          <div className="recipe">
            <img src="recipe-image.jpg" alt="Nombre de la receta" />
            <h3>Nombre de la Receta</h3>
            <p>Descripción breve de la receta.</p>
          </div>
          {/* Agrega más recetas aquí */}
        </section>
  
        {/* Sección de Testimonios */}
        <section id="testimonials">
          <h2>Lo Que Nuestros Miembros Dicen</h2>
          <div className="testimonial">
            <p>El testimonio va aquí.</p>
            <p>- Nombre de la Persona</p>
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

