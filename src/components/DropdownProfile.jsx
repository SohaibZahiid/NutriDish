import '../styles/DropdownProfile.css'

function DropdownProfile({ logout, dropRef }) {

  return (
    <div className="dropdown" ref={dropRef}>
      <ul>
        <li>Profile</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
