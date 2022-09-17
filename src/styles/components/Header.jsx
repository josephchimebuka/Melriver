import React from 'react'
import "./header.scss"

function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="row v-center space-between">
            <div className="logo">
                <a href="/">AGENCY</a>
            </div>
            <div className="nav">
                <span></span>
                <span></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
