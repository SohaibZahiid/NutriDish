import { Link } from "react-router-dom"
import '../styles/Register.css'

function Register() {
  return (
    <>
      <div className="register padding-top">
        <div className="container register-container">
          <form>
            <label>Name</label>
            <input type="text" placeholder="name" />
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Email</label>
            <input type="text" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button className="submit btn">Register</button>
          </form>
          <p>
            <Link to="/login">Already have an account? Login here.</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register