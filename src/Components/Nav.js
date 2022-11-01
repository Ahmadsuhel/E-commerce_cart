import React from "react";
import {NavLink,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'


const Nav=()=>{
    const state = useSelector((state) => state.carthandle);
   
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
    return (
      <div className="hero_area">
  
      <header className="header_section long_section px-0">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <NavLink className="navbar-brand" to="/">
            <span>
              Eshop
            </span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex m-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
              <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                 
              </ul>
  
            </div>
            <div className="quote_btn-container d-flex align-item-between">
            {isAuthenticated && <p className="me-3 mt-3">{user.name}</p>}

            {
            isAuthenticated?  <button className="btn btn-danger ms-2" onClick={() => logout({ returnTo: window.location.origin })}>
            <span className="me-1"> 
              Log Out

              </span>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>:

               <button className="btn  btn-custom" onClick={() => loginWithRedirect()}>
                <span style={{fontSize:'1.1rem',fontFamily:"Poppins",fontWeight:'600'}}>
                  LOGIN
                </span>
                <i className="fa fa-user" aria-hidden="true"></i>
              </button> 
          }

              <Link to={"/cart"} className="btn btn-warning ms-4">
                  <i className="fa fa-shopping-cart me-2 "></i><span className="position-relative top-3 left-100 translate-middle badge rounded-pill bg-light1 text-dark">{state.length}</span> 
                  
                </Link>
             
            </div>

          
          </div>
        </nav>
      </header>
  
    </div>
    );
}

export default Nav;















