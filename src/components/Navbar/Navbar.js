import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    const[isMobile,setIsMobile]=useState(false);    
  return (
      
        <nav className='navbar'>
            <h3 className='logo'>Smaiga Shop</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=>setIsMobile(false)}
            >
                <Link to='/' className='home'>
                    <li>Home</li>
                </Link>
                <Link to='/product' className='product'>
                    <li>Prouct</li>
                </Link>
                <Link to='/service' className='service'>
                    <li>Service</li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li>Contact</li>
                </Link>
                {/* <Link to='/cart' className='cart'>
                    <li >Cart</li> 
                </Link> */}
                <Link to='/login' className='login'>
                    <li>Login</li>
                </Link>
                <Link to='/register' className='register'>
                    <li><i class="bi bi-cart2"></i>Register</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <i className='fas fa-times'></i> :<i className='fas fa-bars'></i>}
            </button>
        </nav>
  )
}

export default Navbar