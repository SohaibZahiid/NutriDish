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

function App() {
  var API = import.meta.env.VITE_API;
  const [recipes, setRecipes] = useState([]);
 


  useEffect(() => {
    const getRecipes = async () => {

      try {
        const res = await axios.get(`${API}/recipes/dinner`);
          for(let i = 0; i<20; i++){
    
    setRecipes(recipes=> [...recipes,res.data[i].id])
   
    }
      } catch (err) {
        console.log(err);
      }
    };
    getRecipes();
  }, []);
console.log(recipes)



  return (
    <>
  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/breakfast" element={ <Breakfast /> } />
        
        <Route path={`/recipe/id/${recipes}`} element={ <Single /> } />
        <Route path="/lunch" element={ <Lunch /> } />
        <Route path="/dinner" element={ <Dinner/> } />
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
