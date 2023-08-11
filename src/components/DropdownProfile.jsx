import "../styles/DropdownProfile.css";
import { FaUserLarge, FaArrowRightFromBracket, FaHeart } from "react-icons/fa6";

function DropdownProfile({ logout }) {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <FaUserLarge
            className="icon"
          />
          <p>Profile</p>
        </li>
        <li>
          <FaHeart
            className="icon"
          />
          <p>Favorites</p>
        </li>
        <li onClick={logout}>
          <FaArrowRightFromBracket
            className="icon"
          />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
