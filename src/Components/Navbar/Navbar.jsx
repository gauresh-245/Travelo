import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='nav'>

        <div className='nav-logo'>
           Travelo
        </div>

        <ul className="nav-menu">
             <li className='nav-contact'>Home</li>
             <li>Explore</li>
             <li>About</li>
             <li>Contact</li>
        </ul>


      </div>
    </div>
  )
}

export default Navbar
