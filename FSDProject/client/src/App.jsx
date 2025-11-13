import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
export const App = () => {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/register" element={<h1>Register Here</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404 not found error</h1>} />
      </Routes>

    </div>
  )
}
