import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Button } from '../Button/Button'
import './navbar.css'
//change teh color of icon
import {IconContext} from 'react-icons/lib'



function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    //HandleClick
    const handleClick = () => {
        setClick(!click)
    }
    //close btn
    const closeMobileMenu = () => setClick(false)
    

    return (
      <>
       <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              COMPANY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/reviews'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Reviews
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/pricing'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
      <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Contact</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                   buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar