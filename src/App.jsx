import React,{useState,useEffect} from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import TermsAndConditions from "./pages/TerminosyCondiciones";
import About from "./pages/AboutUs";
import Footer from "./components/Footer";
import Single from "./pages/Single"
import { requireLoggedOut } from "./Guards/RouteGuard";
import SinglLunch from "./pages/SingelLunch";
import SingelBreakfast from "./pages/SingelBreakfast";
import img1 from '../public/imgs/dieta.png'
import img2 from '../public/imgs/login.jpg'
import img3 from '../public/imgs/158-h0.webp'
import img4 from '../public/imgs/LogoProyectoDefinitivo.png'
import img5 from '../public/imgs/mac.jpg'
import img6 from '../public/imgs/mir.jpg'
import img7 from '../public/imgs/ODS.png'
import img8 from '../public/imgs/sac.jpg'
import img9 from '../public/imgs/dieta.png'
import img10 from '../public/imgs/dieta.png'
import img11 from '../public/imgs/dieta.png'
import img12 from '../public/imgs/dieta.png'
import img13 from '../public/imgs/dieta.png'
import img14 from '../public/imgs/dieta.png'
import img15 from '../public/imgs/dieta.png'
import img16 from '../public/imgs/dieta.png'
import img17 from '../public/imgs/dieta.png'
import img18 from '../public/imgs/dieta.png'
import img19 from '../public/imgs/dieta.png'
import img20 from '../public/imgs/dieta.png'



function App() {
  var API = import.meta.env.VITE_API;
  const [recipes, setRecipes] = useState([]);
  const [recipesLunch, setRecipesLunch] = useState([]);
  const [recipesBrakfast, setRecipesBrakfast] = useState([])
  
let imglunch = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20]


  useEffect(() => {
    const getRecipes = async () => {

      try {
        const res = await axios.get(`${API}/recipes/dinner`);
          for(let i = 0; i<20; i++){
            const dinner = res.data[i]
            const RecetaDinner={
              createdBy:dinner.createdBy,
              description:dinner.description,
              dietaryType:dinner.dietaryType,
              id:dinner.id,
              image:dinner.image,
              ingredients:dinner.ingredients,
              mealType:dinner.mealType,
              name:dinner.name,
              servings:dinner.servings,
              totalTime:dinner.totalTime

            }    
    setRecipes(recipes=> [...recipes,RecetaDinner])
   
    }
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);



  useEffect(() => {
    const getRecipes = async () => {

      try {
        const res = await axios.get(`${API}/recipes/lunch`);
        for(let i = 0; i<20; i++){
          const lunch = res.data[i]
          const image = imglunch[i]
          const RecetaLunch={
            createdBy:lunch.createdBy,
            description:lunch.description,
            dietaryType:lunch.dietaryType,
            id:lunch.id,
            image:image,
            ingredients:lunch.ingredients,
            mealType:lunch.mealType,
            name:lunch.name,
            servings:lunch.servings,
            totalTime:lunch.totalTime

          } 
          setRecipesLunch(recipesLunch=> [...recipesLunch,RecetaLunch])
 
  }
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);


  
  useEffect(() => {
    const getRecipes = async () => {
      const API = import.meta.env.VITE_API;

      try {
        const res = await axios.get(`${API}/recipes/breakfast`);       
        for(let i = 0; i<20; i++){
          const breakfast = res.data[i]
          const RecetaBreakfast={
            createdBy:breakfast.createdBy,
            description:breakfast.description,
            dietaryType:breakfast.dietaryType,
            id:breakfast.id,
            image:breakfast.image,
            ingredients:breakfast.ingredients,
            mealType:breakfast.mealType,
            name:breakfast.name,
            servings:breakfast.servings,
            totalTime:breakfast.totalTime

          }
          setRecipesBrakfast(recipesBrakfast=> [...recipesBrakfast,RecetaBreakfast])
 
  }

      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);




  return (
    <>
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/breakfast" element={ <Breakfast recipesBrakfast={recipesBrakfast}/> } />
         <Route path="/lunch" element={ <Lunch recipesLunch={recipesLunch}/> } />        
        <Route path="/dinner" element={ <Dinner recipes={recipes}/> } />
        <Route path="recipe/:id" element={ <Single recipes={recipes}/> } />
        <Route path="singlelunch/:id" element={  <SinglLunch recipesLunch={recipesLunch}/> } />
        <Route path="singelbreakfast/:id" element={  <SingelBreakfast recipesBrakfast={recipesBrakfast}/> } />



        <Route path="/login" element={ 
            requireLoggedOut() ? (
              <Login />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route path="/register" element={ <Register /> } />
        <Route path="/TermsAndConditions" element={ <TermsAndConditions/>}/>
        <Route path="/About" element={ <About/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
