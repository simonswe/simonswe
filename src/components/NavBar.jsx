import React, { useState } from "react";
import { Link } from 'react-scroll';
import { MdRssFeed } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa'; 

import './NavBar.scss';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div name='navbar' className="navbar">
            <div className="navbar-container">
                <div className='navbar-logo'>
                    <MdRssFeed className='navbar-icon' />
                    SimonSWE
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-times"/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='about' smooth='true' duration={500} className="nav-links" onClick={handleClick}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='experience' smooth='true' duration={500} className="nav-links" onClick={handleClick}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='projects' smooth='true' duration={500} className="nav-links" onClick={handleClick}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
