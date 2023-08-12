import { Link } from "react-router-dom";
import "../styles/DropdownProfile.css";
import { FaUserLarge, FaArrowRightFromBracket, FaHeart } from "react-icons/fa6";

function DropdownProfile({ logout }) {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <FaUserLarge className="icon" />
          <p>Profile</p>
        </li>
        <Link to={`/favorites`}>
        <li>
          <FaHeart className="icon" />
          <p>Favorite</p>
        </li>
        </Link>
        <li onClick={logout}>
          <FaArrowRightFromBracket className="icon" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
