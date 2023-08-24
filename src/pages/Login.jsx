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
      const res = await login(inputs);
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.username);
      toast.error(err.response.data.password);
    }
  };

  return (
    <>
      <div className="login section-x2">
        <div className="login-container container">
          <div className="left"></div>
          <div className="right">
            <h2>Login</h2>
            <form className="login-form" autoComplete="off">
              <div className="input-box">
                <input type="text" name="username" onChange={handleChange} required/>
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
