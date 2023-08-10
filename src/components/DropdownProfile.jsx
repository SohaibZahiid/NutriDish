import "../styles/DropdownProfile.css";
import { FaUserLarge, FaArrowRightFromBracket } from "react-icons/fa6";

function DropdownProfile({ logout, dropRef }) {
  return (
    <div className="dropdown" ref={dropRef}>
      <ul>
        <li>
          <FaUserLarge
            className="icon"
          />
          <p>Profile</p>
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
