import React from 'react';

import {ReactComponent as SvgCurveTop} from '@images/curve_top.svg';
import Resume from '@files/SimonHuang_Resume.pdf';
import ProfilePic from '@images/pfp.jpg';

import './About.scss';

const About = () => {
    return (
        <div className="about">
            <SvgCurveTop />
            <div className="about__container">
                <div className="about__left">
                    <img src={ProfilePic} alt="Simon"/>
                </div>
                <div className="about__right">
                    <p className="about__text">
                        Software Engineering @ UWaterloo
                    </p> 
                    <a href="https://github.com/simonswe" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/simon-d-huang" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default About;
