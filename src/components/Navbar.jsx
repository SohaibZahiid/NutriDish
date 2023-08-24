import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DropdownProfile from "./DropdownProfile";
import { FaBars, FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const menuRef = useRef()

  useEffect(() => {
    const handler = e => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
  })
  

  return (
    <>
    <div >  
      <div className="navbar">
        <div className="navbar-container container">
          <NavLink to="/" className="logo-container">
            <img
              src="/imgs/LogoV2.png"
              alt="Logo"
              className="logo-image"
            />
            <div className="logo">NutriDish</div>
          </NavLink>
          <div className="nav-links-container" ref={menuRef}>
            <ul className={`nav-links ${open ? "open" : ""}`}>
              <li>
                <NavLink to="breakfast">Breakfast</NavLink>
              </li>
              <li>
                <NavLink to="lunch">Lunch</NavLink>
              </li>
              <li>
                <NavLink to="dinner">Dinner</NavLink>
              </li>
              <li>
                <NavLink to="planner">Planner</NavLink>
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
                <NavLink to="/login">
                  <span className="btn">Login</span>
                </NavLink>
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
      
        </div>
    </>
  );
};

export default Navbar;
