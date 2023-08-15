import "../styles/Register.css";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function Profile() {
  const API = import.meta.env.VITE_API;

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    password: currentUser.password,
  });


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${API}/user/${currentUser.id}/update`, formData);
      if (res.data.status == 200) {
        toast.success(res.data.message)
        setCurrentUser(res.data.data)
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error(err.response.data?.name)
      toast.error(err.response.data?.username)
      toast.error(err.response.data?.password)
    }
  };

  return (
    <>
      <div className="register">
        <div
          className="register-container"
          style={{ gridTemplateColumns: "1fr" }}
        >
          <div className="form-container">
            <form className="register-form">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />

              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              <button className="submit btn" onClick={handleClick}>
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
