import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.scss'


const Navbar = () => {
    return (
      <nav>
        <div className='container'>
          <div className='nav-columns'>
            <div className='nav-column'>
              <div className='nav-label'>Menu</div>
              <ul className='nav-links'>
                <li>
                  <NavLink to='/case-studies' exact>
                    Case Studies
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/approach' exact>
                    Approach
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/services' exact>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about-us' exact>
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='nav-column'>
              <div className='nav-label'>Contact</div>
              <div className='nav-infos'>
                <ul className='nav-info'>
                  <li className='nav-info-label'>Email</li>
                  <li>
                    <NavLink to='/contact' exact>
                      Get in touch with us 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/audit' exact>
                    sales@netaccess <br/> nigeria.com
                    </NavLink>
                  </li>
                </ul>
                <ul className='nav-info'>
                  <li className='nav-info-label'>Headquarter</li>
                  <li>14 Yakubu Gowon Way </li>
                  <li> 930104, Jos,</li>
                  <li>Plateau</li>
                </ul>
                <ul className='nav-info'>
                  <li className='nav-info-label'>Phone</li>
                  <li>0905 667 0910</li>
                </ul>
                <ul className='nav-info'>
                  <li className='nav-info-label'>Legal</li>
                  <li>Privacy & Cookies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar