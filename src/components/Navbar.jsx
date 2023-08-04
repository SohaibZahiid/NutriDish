import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container navbar-container">
          <Link to="/">
            <div className="logo">NutriDish</div>
          </Link>
          <div>
            <ul className="nav-links">
              <li>
                <Link to="breakfast">Breakfast</Link>
              </li>
              <li>
              <Link to="lunch">Lunch</Link>
              </li>
              <li>
              <Link to="dinner">Dinner</Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
