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
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (formData.password == formData.confirmPassword) {
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
    } else {
      toast.error("Passwords are not the same");
    }
  };

  return (
    <div className="register section-x2">
      <div className="register-container container">
        <div className="left"></div>
        <div className="right">
          <h2>Register</h2>
          <form className="register-form" autoComplete="off">
            <div className="input-box">
              <input type="text" name="name" onChange={handleChange} required />
              <label>Name</label>
            </div>

            <div className="input-box">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
              <label>Username</label>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
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
  );
}

export default Register;
