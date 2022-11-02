import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Card, CardMedia, CardContent } from '@mui/material';
import { Parallax } from 'react-parallax';

import NebulaImage from '../assets/images/planets.jpg';
import GSoft from '../assets/images/gsoft.png';
import AuraData from '../assets/images/auradata.png';
import PHSA from '../assets/images/phsa.png';

import './Experience.scss';

const Experience = () => {
    const [experience, setExperience] = React.useState('gsoft');

    const handleChange = (event, newExperience) => {
        if (newExperience !== null) {
            setExperience(newExperience);
        }
    };

    return (
        <div name='experience'>
            <Parallax className='experience__background' bgImage={NebulaImage} strength={500}>
                <div className='experience__container'>
                    <h1>Experience</h1>
                    <Card variant='outlined' className='button-group'>
                        <ToggleButtonGroup
                            color="info"
                            value={experience}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                                <ToggleButton value="gsoft">GSoft</ToggleButton>
                                <ToggleButton value="auradata">AuraData</ToggleButton>
                                <ToggleButton value="phsa">PHSA</ToggleButton>
                        </ToggleButtonGroup>
                    </Card>
                    {
                        experience === 'gsoft'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={GSoft} alt="GSoft"/>
                            <CardContent className='job-title'>
                                Full-Stack Engineer @ GSoft
                            </CardContent>
                            <CardContent className='job-description'>
                                ► Streamlined processes
                            </CardContent>
                        </Card>
                    }
                    {
                        experience === 'auradata'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={AuraData} alt="AuraData"/>
                            <CardContent className='job-title'>
                                C# Developer @ AuraData
                            </CardContent>
                            <CardContent className='job-description'>
                                ► Redesigned a web application used internationally for education verification services utilizing Angular (TypeScript), Bootstrap, HTML/CSS for the front-end and .NET Core along with ABP as a framework for the backend
                                <br />
                                ► Built RESTful APIs using Entity Framework (C#), Microsoft SQL Server, and Azure to process over 10k subject verifications per month as well as create per-organization subscriber accounts
                                <br />
                                ► Integrated Bambora Payment SDK into the web application to make requests to the payment gateway via third-party API to allow clients to store card profiles as well as make payments through Bambora
                                <br />
                                ► Designed and implemented data models with relational databases, to store the company's accounting information such as tax reporting info, payment amounts, and user balance tracking
                            </CardContent>
                        </Card>
                    }
                    {
                        experience === 'phsa'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={PHSA} alt="PHSA"/>
                            <CardContent className='job-title'>
                                Full-Stack Developer @ PHSA
                            </CardContent>
                            <CardContent className='job-description'>
                                ► Developed a .NET Core web application that supports over 500 capital projects and applications, 3000 servers, and other vital systems that are used to operate the healthcare system for the province of BC
                                <br />
                                ► Implemented a role-based access security layer to prevent users with insufficient permissions from editing and/or viewing sensitive health care information
                                <br />
                                ► Conducted C#, SQL, and Javascript software debugging across a large codebase while piloting agile implementation
                                <br />
                                ► Led design and development of front-end and back-end portions of a wiki page using C#, Javascript, Blazor, and MS SQL Server      
                            </CardContent>
                        </Card>
                    }
                </div>
            </Parallax>
        </div>
    ); 
}

export default Experience;
