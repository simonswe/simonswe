import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Card, CardMedia, CardContent, Tab } from '@mui/material';

import GSoft from '@images/gsoft.png';
import AuraData from '@images/auradata.png';
import PHSA from '@images/phsa.png';

import './Experience.scss';

const Experience = () => {
    const [experience, setExperience] = React.useState('gsoft');

    const handleChange = (event, newExperience) => {
        if (newExperience !== null) {
            setExperience(newExperience);
        }
    };

    return (
        <div className='experience'>
            <div className='experience__container'>
                <h1>Experience</h1>
                <Tabs
                    className="experience__tabs"
                    variant="scrollable"
                    value={experience}
                    onChange={handleChange}
                    aria-label="experience"
                    textColor="inherit"
                    selectionFollowsFocus
                    allowScrollButtonsMobile
                    >
                        <Tab value="gsoft" label="GSoft"/>
                        <Tab value="auradata" label="AuraData" />
                        <Tab value="phsa" label="PHSA"/>
                </Tabs>
                {
                    experience === 'gsoft'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card__media' component="img" image={GSoft} alt="GSoft" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='job__title'>
                            Full-Stack Engineer @ GSoft
                        </CardContent>
                        <CardContent className='job__description'>
                            Streamlined processes in the development of Officevibe
                        </CardContent>
                    </Card>
                }
                {
                    experience === 'auradata'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card__media' component="img" image={AuraData} alt="AuraData" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='job__title'>
                            C# Developer @ AuraData
                        </CardContent>
                        <CardContent className='job__description'>
                            Redesigned a web application used internationally for education verification services utilizing Angular (TypeScript), Bootstrap, HTML/CSS for the front-end and .NET Core along with ABP as a framework for the backend
                        </CardContent>
                    </Card>
                }
                {
                    experience === 'phsa'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card__media' component="img" image={PHSA} alt="PHSA" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='job__title'>
                            Full-Stack Developer @ PHSA
                        </CardContent>
                        <CardContent className='job__description'>
                            Developed a .NET Core web application that supports over 500 capital projects and applications, 3000 servers, and other vital systems that are used to operate the healthcare system for the province of BC   
                        </CardContent>
                    </Card>
                }
            </div>
        </div>
    ); 
}

export default Experience;
