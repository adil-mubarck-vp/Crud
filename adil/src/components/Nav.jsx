import React from 'react'
import fantalogo from '../logo.png'
import "./css/nav.css"

function Nav() {
  return (
    <div className='nav-parent'>
      <div className='nav-left'>
        <img src={fantalogo} alt="Loading......" />
      </div>

      <div className='nav-right'>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Nav
