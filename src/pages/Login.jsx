import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const API = import.meta.env.VITE_API;

  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({
    username: "",
    password: ""
  })

  const [sccMsg, setSccMsg] = useState("")

  const navigate = useNavigate()

  const handleChange = (e) => {
    setAuth((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/login`, auth);
      console.log(res.data.success);
      if(res.data.success) {
        navigate("/")
      }
      setSccMsg(res.data.message)
    } catch (err) {
      setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <img src="/imgs/login.jpg" />
          <div className="form-container">
            <form className="login-form">
              {sccMsg && <small>{sccMsg}</small>}
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              {errMsg.username && <small>{errMsg.username}</small>}
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {errMsg.password && <small>{errMsg.password}</small>}
              <button className="submit btn" onClick={handleClick}>
                Login
              </button>
            </form>
            <p>
              <Link to="/register">Don't have an account? Register here.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
