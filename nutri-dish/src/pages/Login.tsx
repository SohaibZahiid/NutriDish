import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <>
      <div className="login padding-top">
        <div className="container login-container">
          <form>
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
    </>
  );
};

export default Login;
