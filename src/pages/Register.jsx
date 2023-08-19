import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const API = import.meta.env.VITE_API;

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/register`, formData);
      if (res.data.status == 200) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.name);
      toast.error(err.response.data.username);
      toast.error(err.response.data.password);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-container">
          <img src="/imgs/login.jpg" />
          <div className="form-container">
            <form className="register-form">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />

              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />

              <button className="submit btn" onClick={handleClick}>
                Register
              </button>
            </form>
            <p>
              <Link to="/login">Already have an account? Login here.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
