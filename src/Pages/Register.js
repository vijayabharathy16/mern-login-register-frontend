import React, { useState } from "react";
import "./Register.css";
import { Bounce, toast} from 'react-toastify';
import BackLogo from '../assets/backgroundlogin.jpg'
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      // alert("please the fill");
      toast.error(' Please fill the all required', {
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
      return;
    }

    try {
      const response = await fetch("https://mern-login-register-1.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
     
      if (result.status === "ok") {
        // alert("success");
        toast.success(' Signup successfully!', {
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
        setName("");
        setEmail("");
        setPassword("");
        navigate('/login')
        
      } else {
        // alert("already exit");
        toast.error('Username already exit!', {
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
      }
      console.log(response)
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
 {/* <img src={BackLogo}/> */}
      <div className="container outside mt-5" src={BackLogo}>
        <div className="shadow bg-body-tertiary rounded inside">
          <h2 className="">Signup</h2>
          <form onSubmit={registerUser}>
          {/* <h2 className="">Signup</h2> */}
            <div className="mb-3">
              <label><i className="bi bi-person-fill"></i> Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter the name"
                
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label> <i className="bi bi-envelope-fill"></i> Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter the email"
               
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label> <i className="bi bi-lock-fill"></i> Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter the password"
                
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
