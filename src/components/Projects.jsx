import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Card, CardMedia, CardContent } from '@mui/material';
import { Parallax } from 'react-parallax';

import DarkerNebulaImage from '../assets/images/earth.jpg';
import xRPBotImage from '../assets/images/xrp-removebg.png';
import SimonSWEImage from '../assets/images/robot.png';
import ImpossibleInvadersImage from '../assets/images/invader.png';
import MonkeyImage from '../assets/images/monkey.png';

import './Projects.scss';

const Projects = () => {
    const [project, setProject] = React.useState('xroyalbot');

    const handleChange = (event, newProject) => {
        if (newProject !== null) {
            setProject(newProject);
        }
    };

    return (
        <div name='projects'>
            <Parallax className='projects__background' bgImage={DarkerNebulaImage} strength={500}>
                <div className='projects__container'>
                    <h1>Projects</h1>
                    <Card variant='outlined' className='button-group'>
                        <ToggleButtonGroup
                            color="info"
                            value={project}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                                <ToggleButton value="xroyalbot">xRoyalBot</ToggleButton>
                                <ToggleButton value="simonswe">SimonSWE</ToggleButton>
                                <ToggleButton value="ii">Impossible Invaders</ToggleButton>
                                <ToggleButton value="monke">Monke Assistant</ToggleButton>
                        </ToggleButtonGroup>
                    </Card>
                    {
                        project === 'xroyalbot'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={xRPBotImage} />
                            <CardContent className='project-name'>
                                xRoyalBot
                            </CardContent>
                            <CardContent className='project-skills'>
                                JavaScript | REST APIs | Heroku
                            </CardContent>
                            <CardContent className='project-description'>
                                ► Programmed JS discord bot that listens to custom commands to perform different tasks such as fetching Ethereum price from an API.
                            </CardContent>
                        </Card>
                    }
                    {
                        project === 'simonswe'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={SimonSWEImage} />
                            <CardContent className='project-name'>
                                SimonSWE
                            </CardContent>
                            <CardContent className='project-skills'>
                                React | JavaScript | HTML/CSS
                            </CardContent>
                            <CardContent className='project-description'>
                                ► Website using React and Material UI
                            </CardContent>
                        </Card>
                    }
                    {
                        project === 'ii'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={ImpossibleInvadersImage} />
                            <CardContent className='project-name'>
                                Impossible Invaders
                            </CardContent>
                            <CardContent className='project-skills'>
                                PyGame | Python | OOP
                            </CardContent>
                            <CardContent className='project-description'>
                                ► Used object-oriented programming in Python to create a game inspired by Space Invaders
                                <br />
                                ► Implemented collision detection and increasing game difficulty with Pygame
                            </CardContent>
                        </Card>
                    }
                    {
                        project === 'monke'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia className='card-media' component="img" image={MonkeyImage} />
                            <CardContent className='project-name'>
                                MONKE Assistant
                            </CardContent>
                            <CardContent className='project-skills'>
                                Python | gTTS | Speech Recognition
                            </CardContent>
                            <CardContent className='project-description'>
                                ► Integrated PyPI libraries in Python to program a bot that assists with simple tasks, such as capturing images, applying a filter to the images, then posting them onto Discord or Twitter via a bot using their APIs.
                            <br />
                                ► Implemented unique voice commands with a Speech Recognition API that trigger various bot functions
                            <br />
                                ► Established randomized dialogue with gTTS’s API to converse with the user
                            </CardContent>
                        </Card>
                    }
                </div>
            </Parallax>
        </div>
    ); 
}

export default Projects;
