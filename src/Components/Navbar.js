import React from 'react'
import Me from '../Components/images/airbnb-logo.png'
import './style.css'


const Navbar = () => {
  return (
    <nav className='.nav--logo'>
      <img src={Me} alt=""/>
    </nav>
  )
}

export default Navbar
