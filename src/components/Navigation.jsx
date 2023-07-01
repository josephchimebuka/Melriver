import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.scss'


const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='nav-columns'>
                <div className="nav-column">
                    <div className="nav-label">Menu</div>
                        <ul className="nav-link">
                            <li>
                                <a href='/case'>Case Studies</a>
                            </li>
                            <li>
                                <NavLink to='/approach'>Approach</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us'>About</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                        <div className="nav-column">
                            <div className="nav-label">Contact</div>
                                <div className="nav-infos">
                                    <div className="nav-infos">
                                    <ul className="nav-info">
                                        <li className="nav-info-label">Email</li>
                                        <li>
                                            <NavLink to='/contact' exact>
                                               Get in touch
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/audit' exact>
                                               Get a free audit
                                            </NavLink>
                                        </li>
                                    </ul>
                             </div>
                                    <ul className="nav-info">
                                        <li className="nav-info-label">Headquaters</li>
                                            <li>Route du Jura</li>
                                            <li>1700 fribourg</li>
                                            <li>Switz</li>
                                    </ul>
                                    <ul className="nav-info">
                                        <li className="nav-info-label">Phone</li>
                                        <li>09066039112</li>
                                    </ul>
                                    <ul className="nav-info">
                                        <li className="nav-info-label">Phone</li>
                                        <li className="nav-info-label">Legal</li>
                                        <li>Privacy & Cookies</li>
                                    </ul>
                                    </div>
                            </div>
                       
            </div>
        </div>
    </nav>
  )
}

export default Navbar