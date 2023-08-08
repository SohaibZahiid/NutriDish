import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <img src="/imgs/login.jpg" />
          <div className="form-container">
            <form className="login-form">
              <label>Username</label>
              <input type="text" placeholder="Username" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <button className="submit btn">Login</button>
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
