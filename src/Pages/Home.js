import React from 'react'
import {   useNavigate,  } from 'react-router-dom'
import './Home.css';
function Home() {
    const navigate = useNavigate();
    const login = () =>{
        navigate('/login')
    }
    const signup = () =>{
        navigate('/register')
    }
  return (
    <>
    <div className='container-fluid'>
          <section id='home'>
              <div className='row'>
                <div className='col-lg-6'>
                   <h1 className='text-dark'>Welcome to the Webpage</h1>
                   <p className='text-dark para'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <button className='btn btn-primary'  onClick={login}>Login</button>
                  <button className='btn btn-primary ms-3' onClick={signup}>Signup</button>
                </div>
                <div className='col-lg-6 col-md-6 mt-2 img'>
                 <img src='https://img.freepik.com/premium-vector/digital-illustration-man-demonstrating-online-authentication-large-tablet-display_941526-2633.jpg?w=740' className='img-fluid'/>
                </div>
              </div>
          </section>
    </div>
             
    </>
  )
}

export default Home