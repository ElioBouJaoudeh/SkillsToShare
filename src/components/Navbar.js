import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { ProfileButton } from './ProfileButton';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

function Navbar() {
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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const logout = () => {
      dispatch({ type: 'LOGOUT' });
  
      history.push('/');
  
      setUser(null);
    };

    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
  
  
    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                Skills To Share
                <i class="fas fa-deaf"></i>
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/map'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Map
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/st'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Speech/Text
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/orguser'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Organizations
                  </Link>
                </li>
                <li>
                  <Link
                    to='/prof'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                </li>
                {button && <ProfileButton buttonStyle='btn--outline'>PROFILE</ProfileButton>}
              <li className='nav-items'>
                  <button
                    className='nav-links'
                    onClick={logout}
                  >
                   <i class="fas fa-sign-out-alt"></i>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    }
    
    export default Navbar;