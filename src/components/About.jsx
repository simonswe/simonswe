import React from 'react';

import Resume from '../assets/files/SimonHuang_Resume.pdf';
import ProfilePic from '../assets/images/pfp.jpg';

import './About.scss';

const About = () => {
    return (
        <div className="about">
            <svg name='about' className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#011F44" viewBox="0 0 100 100" preserveAspectRatio="none" >
                <path d="M0,100 C20,-80 26,90 100,100" />
            </svg>
            <div className="main_container">
                <div className="left">
                    <img src={ProfilePic} alt="" className="image" />
                </div>
                <div className="right">
                    <p className="aboutme">
                        Software Engineering Student @ University of Waterloo
                    </p> 
                    <a href="https://github.com/xroyalphantom" className="button" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/simon-d-huang" className="button" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={Resume} className="button" target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default About;
