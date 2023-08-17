import { Link } from "react-router-dom";
import "../styles/DropdownProfile.css";
import { FaUserLarge, FaArrowRightFromBracket, FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


function DropdownProfile({ logout }) {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className="dropdown">
      <ul>
        <Link to={`/profile/${currentUser.id}`}>
          <li>
            <FaUserLarge className="icons" />
            <p>Profile</p>
          </li>
        </Link>
        <Link to={`/favorites`}>
          <li>
            <FaHeart className="icons" />
            <p>Favorite</p>
          </li>
        </Link>
        <li onClick={logout}>
          <FaArrowRightFromBracket className="icons" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
