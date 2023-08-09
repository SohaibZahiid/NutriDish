import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DropdownProfile from "./DropdownProfile";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [openProfile, setOpenProfile] = useState(false)

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
            {currentUser ? (
              <>
              <p onClick={() => setOpenProfile((prev) => !prev)}>{currentUser.username}</p>
              {openProfile && (
                <DropdownProfile
                onClick={logout}
              />
              )}
              </>
            ) : (
              <Link to="/login">
                <span className="link">
                  <button>Login</button>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
