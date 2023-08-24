import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import "../styles/profile.css";
function Profile() {
  const API = import.meta.env.VITE_API;

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    password: currentUser.password,
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if(formData.password == formData.confirmPassword) {
      try {
        const res = await axios.put(
          `${API}/user/${currentUser.id}/update`,
          formData
        );
        if (res.data.status == 200) {
          toast.success(res.data.message);
          setCurrentUser(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error(err.response.data?.name);
        toast.error(err.response.data?.username);
        toast.error(err.response.data?.password);
      }
    } else {
      toast.error("Passwords are not the same")
    }
  };

  return (
    <>
      <div className="profile-root">
        <div className="profile-wrapper">
          <h2 className="profile-header">
            Here you can update your information
          </h2>
          <div className="profile-form-section">
            <form className="profile-form" autoComplete="off">
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  />
                  <label>Name</label>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  required
                  />
                  <label>Username</label>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                  />
                  <label>Password</label>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                  />
                  <label>Confirm Password</label>
              </div>
              <button className="btn" onClick={handleClick}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
