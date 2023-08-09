import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Register() {

  const API = import.meta.env.VITE_API;

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({
    name: "",
    username: "",
    password: ""
  })

  const [sccMsg, setSccMsg] = useState("")

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/register`, formData);
      if(res.data.status == 200) {
        navigate("/login")
      }
      setSccMsg(res.data.message)
    } catch (err) {
      setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-container">
          <img src="/imgs/login.jpg"/>
          <div className="form-container">
          <form className="register-form">
            {sccMsg && <small>{sccMsg}</small>}
            <label>Name</label>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            {errMsg.name && <small>{errMsg.name}</small>}
            <label>Username</label>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            {errMsg.username && <small>{errMsg.username}</small>}
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {errMsg.password && <small>{errMsg.password}</small>}
            <button className="submit btn" onClick={handleClick}>Register</button>
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
