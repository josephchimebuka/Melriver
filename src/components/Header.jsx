import React from 'react'
import "./header.scss"
import { openMenu, closeMenu } from '../animations/menuAnimation'
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import  Logo  from "../assets/pnglogo.png";

function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="row v-center space-between">
            <div className="logo">

                <a href="/"> <img width={50} height={50} src={Logo} alt="stuffs" />LUTRICS</a>
            </div>
            <div className="nav">
                <span></span>
                <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              // onClick={() => setMenuState({ menuOpened: false })}
              >
              <UpArrow />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
