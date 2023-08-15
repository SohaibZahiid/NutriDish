import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DropdownProfile from "./DropdownProfile";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);


  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-container">
            <img
              src="/imgs/LogoProyectoDefinitivo.png"
              alt="Logo"
              className="logo-image"
            />
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
            {currentUser ? (
              <>
              <div className="user-dropdown-container">
              <p
                  className="user-dropdown"
                >
                  {currentUser.username}
                </p>

                {<DropdownProfile logout={logout}/>}
              </div>
              </>
            ) : (
              <Link to="/login">
                <span className="btn">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
