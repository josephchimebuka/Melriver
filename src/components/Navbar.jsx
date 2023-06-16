import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='nav-columns'>
                <div className="nav-column">
                    <div className="nav-labes">
                        <ul className="nav-link">
                            <li>
                                <NavLink to='/case'>Case Studies</NavLink>
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

                        <div className="nav-column">
                            <div className="nav-label">
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
                                    <ul className="nav-info">
                                        <li className="nav-info-label">
                                            <li>Route du Jura</li>
                                            <li>1700 fribourg</li>
                                            <li>Switz</li>
                                        </li>
                                    </ul>
                                    <ul className="nav-info">
                                        <li className="nav-info-label"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar