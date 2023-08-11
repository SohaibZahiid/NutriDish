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
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/recipe/id" element={ <Single /> } />
        <Route path="/breakfast" element={ <Breakfast /> } />
        <Route path="/lunch" element={ <Lunch /> } />
        <Route path="/dinner" element={ <Dinner /> } />
        <Route path="/recipes/favorites" element={ 
          !requireLoggedOut() ? (
            <Favorite />
          ) : (
            <Navigate to="/login" />
          )
         } />
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
  );
}

export default App;
