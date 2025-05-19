import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Card, CardMedia, CardContent, Tab } from '@mui/material';

import Scrawlr from '@images/scrawlr.jpg';
import Workleap from '@images/workleap.jpg';
import AuraData from '@images/auradata.png';
import PHSA from '@images/phsa.png';

import './Experience.scss';

const Experience = () => {
    const [experience, setExperience] = React.useState('scrawlr');

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
                        <Tab value="scrawlr" label="Scrawlr"/>
                        <Tab value="workleap" label="WorkLeap"/>
                        <Tab value="auradata" label="AuraData" />
                        <Tab value="phsa" label="PHSA"/>
                </Tabs>
                {
                    experience === 'scrawlr'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card__media' component="img" image={Scrawlr} alt="Scrawlr" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='job__title'>
                            Backend Developer @ Scrawlr
                        </CardContent>
                        <CardContent className='job__description'>
                            Constructed Health Page
                        </CardContent>
                    </Card>
                }
                {
                    experience === 'workleap'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card__media' component="img" image={Workleap} alt="Workleap" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='job__title'>
                            Full-Stack Engineer @ Workleap
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
