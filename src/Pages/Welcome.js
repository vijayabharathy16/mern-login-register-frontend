import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import './Welcome.css'
function Welcome() {
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    useEffect(() =>{
       const token = localStorage.getItem('token')
       if(token){
        const authUser = [];
        if(!authUser){
            localStorage.removeItem('token')
             navigate('/login')
        }else{
            setUser(authUser)
        } 
       }else{
        // alert('please login')
        toast.warn(' Please login!', {
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
        navigate('/login')

       }
    }, [])

    const logout = () =>{
        localStorage.removeItem('token');
        // alert('logged out')
        toast.info(' logged out', {
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
        navigate('/login')
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow  bg-body-tertiary rounded" >
   <div className="container-fluid">
    <a className="navbar-brand" href="#">Welcome</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        {/* <li className="nav-item">
          <Link to={"/register"} className="nav-link">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to={'/login'}  className="nav-link" >Login</Link>
        </li> */}
        <li className="nav-item">
        <button className ='btn btn-primary ms-2 logout' onClick={logout}><i className="bi bi-box-arrow-left"></i> Logout</button>         </li>
      </ul>
    </div>
  </div>
</nav>
 
 
      
   </>
   
  )
}

export default Welcome