import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";


const Navbar = lazy(() => import("./components/Navbar"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const Breakfast = lazy(() => import("./pages/Breakfast"));
const Lunch = lazy(() => import("./pages/Lunch"));
const Dinner = lazy(() => import("./pages/Dinner"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const About = lazy(() => import("./pages/AboutUs"));
const Footer = lazy(() => import("./components/Footer"));
const Single = lazy(() => import("./pages/Single"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Profile = lazy(() => import("./pages/Profile"));
import Planner from "./pages/Planner";

import { requireLoggedOut } from "./Guards/RouteGuard";

import { ToastContainer } from "react-toastify";
import ScrollTop from "./pages/ScrollTop";
import Spinner from "./components/Spinner";

function App() {

  return (
    <> 
  
           
    <ScrollTop/>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Single />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/planner" element={<Planner />} />
          <Route
            path="/favorites"
            element={
              !requireLoggedOut() ? <Favorite /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={requireLoggedOut() ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:userId"
            element={
              !requireLoggedOut() ? <Profile /> : <Navigate to="/login" />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/About" element={<About />} />
        </Routes>
     
        <Footer />
        <ToastContainer autoClose={1000}/>
      </Suspense>   
    </Router>
 
 
    </>
  );
}

export default App;
