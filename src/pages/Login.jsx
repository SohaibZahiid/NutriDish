import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs)
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error(err.response.data.username);
      toast.error(err.response.data.password);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <img src="/imgs/login.jpg" />
          <div className="form-container">
            <form className="login-form">
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
              <button className="submit btn" onClick={handleSubmit}>
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
