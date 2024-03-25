import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <NavLink to='/' className='navbar-logo' end>LOGO</NavLink>
        
        <div className='navbar-menu'>
          <div >Register</div>
          <div> Login</div>

        </div>
        
        
      </div>  
    </nav>
  )
}

export default Navbar