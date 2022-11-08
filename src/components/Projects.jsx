import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Button, Card, CardMedia, CardContent, CardActions, Tab } from '@mui/material';

import xRPBotImage from '../assets/images/xrp-removebg.png';
import SimonSWEImage from '../assets/images/robot.png';
import ImpossibleInvadersImage from '../assets/images/invader.png';
import MonkeyImage from '../assets/images/monkey.png';
import GitHub from '../assets/images/github.svg';

import './Projects.scss';

const Projects = () => {
    const [project, setProject] = React.useState('xroyalbot');

    const handleChange = (event, newProject) => {
        if (newProject !== null) {
            setProject(newProject);
        }
    };

    return (
        <div className='projects'>
            <div className='projects__container'>
                <h1>Projects</h1>
                <Tabs
                    className="tab-group"
                    variant="scrollable"
                    selectionFollowsFocus
                    allowScrollButtonsMobile
                    value={project}
                    onChange={handleChange}
                    aria-label="project"
                    textColor="black"
                    >
                        <Tab value="xroyalbot" label="xRoyalBot"/>
                        <Tab value="simonswe" label="SimonSWE" />
                        <Tab value="ii" label="Impossible Invaders"/>
                        <Tab value="monke" label="MONKE Assistant"/>
                </Tabs>
                {
                    project === 'xroyalbot'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card-media' component="img" image={xRPBotImage} alt="xRPBot" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project-name'>
                            xRoyalBot
                        </CardContent>
                        <CardContent className='project-skills'>
                            JavaScript | APIs
                        </CardContent>
                        <CardContent className='project-description'>
                            Programmed JS discord bot that listens to custom commands to perform different tasks such as fetching data from an API
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card-link-button' href='https://github.com/xroyalphantom/xRoyalBot' target='_blank' rel='noreferrer'>
                                    <img src={GitHub} alt="GitHub Link" />
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                }
                {
                    project === 'simonswe'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card-media' component="img" image={SimonSWEImage} alt="SimonSWE" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project-name'>
                            SimonSWE
                        </CardContent>
                        <CardContent className='project-skills'>
                            React | JavaScript | HTML/CSS
                        </CardContent>
                        <CardContent className='project-description'>
                            Personal Portfolio Website using React and Material UI
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card-link-button' href='https://github.com/xroyalphantom/SimonSWE' target='_blank' rel='noreferrer'>
                                    <img src={GitHub} alt="GitHub Link" />
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                }
                {
                    project === 'ii'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card-media' component="img" image={ImpossibleInvadersImage} alt="ImpossibleInvaders" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project-name'>
                            Impossible Invaders
                        </CardContent>
                        <CardContent className='project-skills'>
                            Python | OOP
                        </CardContent>
                        <CardContent className='project-description'>
                            Used object-oriented programming in Python to create a game inspired by Space Invaders
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card-link-button' href='https://github.com/xroyalphantom/Impossible-Invaders' target='_blank' rel='noreferrer'>
                                    <img src={GitHub} alt="GitHub Link" />
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                }
                {
                    project === 'monke'
                    &&
                    <Card variant='outlined' className='card'>
                        <CardMedia className='card-media' component="img" image={MonkeyImage} alt="Monkey" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project-name'>
                            MONKE
                        </CardContent>
                        <CardContent className='project-skills'>
                            Python | APIs
                        </CardContent>
                        <CardContent className='project-description'>
                            Programmed a Python bot that assists with various tasks, such as capturing and manipulating images, then posting them onto Discord/Twitter using their APIs
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card-link-button' href='https://github.com/charliecao02/Monkey-Assistant' target='_blank' rel='noreferrer'>
                                    <img src={GitHub} alt="GitHub Link" />
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                }
            </div>
        </div>
    ); 
}

export default Projects;
