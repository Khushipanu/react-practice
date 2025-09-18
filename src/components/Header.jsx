import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="main">
      <h2 id="left">Sheriyans</h2>
      <div id="right" >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>

        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/product">Product</a> */}
      </div>
    </div>
  )
}

export default Header
