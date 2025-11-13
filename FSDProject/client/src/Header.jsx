import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header>
       <nav >
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <div >
          <Link
            to="/login"
            
          >
            Login
          </Link>

          <Link
            to="/register"
            
          >
            Register
          </Link>
        </div>
        </header>
  )
}

export default Header