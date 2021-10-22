import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavbarWlc.css';
import { Button } from './Button';

function NavbarWlc() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Skills To Share
                <i class="fas fa-deaf"></i>
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>   
                <li>
                  <Link
                    to='/sign-up'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
            </div>
          </nav>
        </>
      );
    }
    
    export default NavbarWlc;