import { Link, useNavigate } from "react-router-dom";
import Recipe from "../components/Recipe";
import Testimonial from "../components/Testimonial";
import "../styles/Home.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      const APIEndpoint = !currentUser
        ? "/recipes/featured"
        : `/recipes/featured/favorites/${currentUser.id}`;

      try {
        const res = await axios.get(`${API}${APIEndpoint}`);
        setRecipes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, [currentUser]);

  const updateFavoriteStatus = (recipeId, isFavorite) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, favorite: isFavorite } : recipe
      )
    );
  };

  return (
    <div id="main">
      <section id="hero" className="section-x2">
        {/* Hero Section */}
        <div id="hero-content">
          <h1>Start your journey to a healthier life today</h1>
          <p>Discover delicious and healthy recipes that you'll love.</p>
          <Link to="lunch">
            <span className="btn">Explore recipes</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-x2 container">
        <h2>What we offer</h2>
        <div className="feature">
          <div className="card">
            <img src="/imgs/DietasPersonalizadas.png" alt="" />
            <h3>Personalized recipes</h3>
          </div>
          <div className="card">
            <img src="/imgs/GuiaNutricional.jpg" alt="" />
            <h3>Nutritional guides</h3>
          </div>
          <div className="card">
            <img src="/imgs/SoporteComunitario.jpg" alt="" />
            <h3>Community support</h3>
          </div>
        </div>
        {/* Add more features here */}
      </section>
      {/* Sección de Recetas Destacadas */}
      <section id="recipes" className="section-x2">
        <h2>Our most popular recipes</h2>
        <div className="recipe-container container ">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              image={`imgs/ImagenesRecetasPlatos/${recipe.image}`}
              type={recipe.mealType}
              title={recipe.name}
              creator={recipe.createdBy}
              favorite={recipe.favorite}
              updateFavoriteStatus={updateFavoriteStatus}
              allergens={recipe.tags}
            />
          ))}
        </div>
        {/* Agrega más recetas aquí */}
      </section>

      {/* Sección de Testimonios */}
      <section id="testimonials" className="section-x2">
        <h2>What our members say</h2>
        <div className="testimonial-container container">
          <Testimonial
            className="testimonial"
            desc="Un lugar donde me dan deliciosas recetas personalizadas!!"
            name="Santiago C"
          />
          <Testimonial
            className="testimonial"
            desc="Delicoso y saludable la mejor pag de recetas sin duda!!"
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
        <h2>Become a part of our community and revolutionize your life!</h2>
        <Link to="/register">
          <span className="btn">Register here</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;
