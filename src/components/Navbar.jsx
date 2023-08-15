import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DropdownProfile from "./DropdownProfile";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
          <div className="nav-links-container">
            <ul className={`nav-links ${open ? "open" : ""}`}>
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
            <div className="auth">
              {currentUser ? (
                <>
                  <div className="user-dropdown-container">
                    <p className="user-dropdown">{currentUser.username}</p>

                    {<DropdownProfile logout={logout} />}
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <span className="btn">Login</span>
                </Link>
              )}
            </div>
            {!open ? (
              <FaBars className="bars icon" onClick={() => setOpen(!open)} />
            ) : (
              <FaXmark className="close icon" onClick={() => setOpen(false)}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
