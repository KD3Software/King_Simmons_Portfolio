import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
    const[click, setClick] = useState(false);
    //{const[button, setButton] = useState(true);}

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        King Simmons
                        <div className="tab"></div>
                        <div><i class="fa-solid fa-crown"></i></div>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link> 
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                             Resume
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                             Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
            {/* {button && <Button buttonStyle='btn--outline'>See Resume</Button>} */}

            </div>

        </>
    )
}

export default Navbar