import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mern-login-register-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result.user) {
        localStorage.setItem("token", result.user);
        // alert("login  successfully");
        toast.success(' Login successfully!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        navigate("/welcome");
      } else {
        toast.error('Wrong user credential!', {
          position: "top-center",
          autoClose: 1999,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        // alert(" Wrong user credential");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow  bg-body-tertiary rounded" >
   <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}><i className="bi bi-box-arrow-in-left">Home</i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <Link to={"/register"} className="nav-link">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to={'/login'}  className="nav-link" >Login</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
      <div className="container outside">
        <div className="shadow  bg-body-tertiary rounded inside">
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <div className="mb-3">
              <label><i className="bi bi-envelope-fill"></i> Email</label>
              <input
                type="text"
                placeholder="Enter the email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label><i className="bi bi-lock-fill"></i> Password</label>
              <input
                type="password"
                placeholder="Enter the password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
