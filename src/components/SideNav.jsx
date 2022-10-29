import { Link } from 'react-scroll';

import './SideNav.scss'

const SideNav = () => {
    return (
        <div className="sidenav">
            <Link to='about' smooth='true' duration={500} className="sidenav__links" id='sidenav__about'>About</Link>
            <Link to='' smooth='true' duration={500} className="sidenav__links" id='sidenav__exp'>Experience</Link>
            <Link to='' smooth='true' duration={500} className="sidenav__links" id='sidenav__projects'>Projects</Link>
            <Link to='' smooth='true' duration={500} className="sidenav__links" id='sidenav__skills'>Skills</Link>
        </div>
    );
}

export default SideNav;
