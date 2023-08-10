import Recipe from "../components/Recipe";
import Testimonial from "../components/Testimonial";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}/recipes/featured`);
        setRecipes(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <div id="main">
      <section id="hero" className="section-x2">
        {/* Hero Section */}
        <div id="hero-content">
          <h1>Comienza Tu Viaje hacia una Vida Más Saludable Hoy</h1>
          <p>Descubre recetas deliciosas y saludables que te encantarán.</p>
          <button>Explora Recetas</button>
        </div>
      </section>

      {/* Sección de Características */}
      <section id="features" className="section-x2">
        <h2>Lo Que Ofrecemos</h2>
        <div className="feature">
          <h3>Recetas Personalizadas</h3>
          <h3>Guias nutricionales</h3>
          <h3>Soporte a la Comunidad</h3>
        </div>
        {/* Agrega más características aquí */}
      </section>

      {/* Sección de Recetas Destacadas */}
      <section id="recipes" className="section-x2">
        <h2>Nuestras Recetas Mas Populares</h2>
        <div className="recipe-container container ">
        {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              image={recipe.image}
              type={recipe.mealType}
              title={recipe.name}
              creator={recipe.createdBy}
            />
          ))}
        </div>
        {/* Agrega más recetas aquí */}
      </section>

      {/* Sección de Testimonios */}
      <section id="testimonials" className="section-x2">
        <h2>Lo Que Nuestros Miembros Dicen</h2>
        <div className="testimonial-container container">
          <Testimonial
            className="testimonial"
            desc="Un lugar donde me dan deliciosas recetas personalizadas!!"
            name="Santiago C"
          />
          <Testimonial
            className="testimonial"
            desc="Delicoso y saludable!!"
            name="Sohaib Z"
          />
          <Testimonial
            className="testimonial"
            desc="Aqui encontre la importancia de comer sano"
            name="Mirjan K"
          />
        </div>
        {/* Agrega más testimonios aquí */}
      </section>

      {/* CTA Final */}
      <section id="final-cta" className="section-x2">
        <h2>Únete a Nosotros Hoy y Transforma Tu Salud</h2>
        <button>Regístrate Ahora</button>
      </section>
    </div>
  );
}

export default Home;
