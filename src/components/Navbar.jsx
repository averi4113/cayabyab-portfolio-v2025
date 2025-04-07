import React from 'react'
import logo from '../assets/averi-logo-nobg1.png'
import '../styles/NavbarStyles.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side navigation */}
          <div className="flex space-x-8">
            <a href="#work" className="nav-link">
              my work
            </a>
            <a href="#blogs" className="nav-link">
              blogs
            </a>    
          </div>

          {/* Center logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Right side navigation */}
          <div className="flex space-x-8">
            <a href="#resume" className="nav-link">
              my resume
            </a>
            <a href="#contacts" className="nav-link">
              my contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar