import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HamburgerIcon from '../components/HamburgerIcon';

function RootLayout() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="desktop-navigation">
            <div className='logo'>
              <NavLink to='/'><h1>LOGO</h1></NavLink>
            </div>
            <div className='navigation'>
              <NavLink to='/'>Blog</NavLink>
              <NavLink to='/'>About us</NavLink>
              <NavLink to='/'>Reviews</NavLink>
              <div className='signup-login'>
                <NavLink to='/'><div className='signup'>Sign up</div></NavLink>
                <NavLink to='/'><div className='login'>Log in</div></NavLink>
              </div>
            </div>
          </div>
          <div className='mobile-navigation'>
            <div className='mobile-header'>
              <div className='logo'>
                <NavLink to='/'><h1>LOGO</h1></NavLink>
              </div>
              <HamburgerIcon className="hamburger-icon" onClick={toggleDropdown} />          
            </div>
            {showDropdown && (
              <div className="mobile-dropdown">               
                <NavLink to="/">Blog</NavLink>
                <NavLink to="/">About us</NavLink>
                <NavLink to="/">Reviews</NavLink>
                <div className="signup-login">
                  <NavLink to="/">
                    <div className="signup">Sign up</div>
                  </NavLink>
                  <NavLink to="/">
                    <div className="login">Log in</div>
                  </NavLink>
                </div>
              </div>
            )}
          </div>    
        </nav>
      </header>
      <main>
            <Outlet />
        </main> 
    </div>
  );
}

export default RootLayout;
