import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import { lazy, Suspense } from "react";
  
  
  const Navbar = lazy(() => import("./component/Navbar"));
  const Login = lazy(() => import("./pages2/Login"));
  const Register = lazy(() => import("./pages2/Register"));
  const Home = lazy(() => import("./pages2/Home"));
  const Breakfast = lazy(() => import("./pages2/Breakfast"));
  const Lunch = lazy(() => import("./pages2/Lunch"));
  const Dinner = lazy(() => import("./pages2/Dinner"));
  const TermsAndConditions = lazy(() => import("./pages2/TermsAndConditions"));
  const About = lazy(() => import("./pages2/AboutUs"));
  const Footer = lazy(() => import("./component/Footer"));
  const Single = lazy(() => import("./pages2/Single"));
  const Favorite = lazy(() => import("./pages2/Favorite"));
  const Profile = lazy(() => import("./pages2/Profile"));
  import Planner from "./pages2/Planner";
  
  import { requireLoggedOut } from "./Guards/RouteGR";
  
  import { ToastContainer } from "react-toastify";
  import ScrollTop from "./pages2/ScrollTop";
  import Spinner from "./component/Spinner";
  
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
  