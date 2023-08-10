import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import DropdownProfile from "./DropdownProfile";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [openProfile, setOpenProfile] = useState(false);

  //Dropdown
  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if(e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpenProfile(false)
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.addEventListener("click", handleClick);
    };
  }, []);

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
                <p onClick={() => setOpenProfile((prev) => !prev)} ref={imgRef}>
                  {currentUser.username}
                </p>
                {openProfile && (
                  <DropdownProfile logout={logout} dropRef={menuRef} />
                )}
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
