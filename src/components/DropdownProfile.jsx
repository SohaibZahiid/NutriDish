import '../styles/DropdownProfile.css'

function DropdownProfile({ onClick }) {
  return (
    <div className="dropdown">
      <ul>
        <li>Profile</li>
        <li onClick={onClick}>Logout</li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
