import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
          <span className='logo'>App Logo</span>
          <span className='nav'>Home</span>
          <span className='nav'>Jobs</span>
          <span className='nav'>Internships</span>
          <span className='nav'>Companies</span>
          <span className='nav'>About Us</span>
    </div>
    // <div className='header'>
    //   Header
    // </div>
  )
}

export default Header