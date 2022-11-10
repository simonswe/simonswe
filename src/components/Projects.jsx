import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Button, Card, CardMedia, CardContent, CardActions, Tab } from '@mui/material';

import xRPBotImage from '@images/xrp-removebg.png';
import SimonSWEImage from '@images/robot.png';
import ImpossibleInvadersImage from '@images/invader.png';
import MonkeyImage from '@images/monkey.png';
import GitHub from '@images/github.svg';

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
                    className="projects__tabs"
                    variant="scrollable"
                    value={project}
                    onChange={handleChange}
                    aria-label="project"
                    textColor="inherit"
                    selectionFollowsFocus
                    allowScrollButtonsMobile
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
                        <CardMedia className='card__media' component="img" image={xRPBotImage} alt="xRPBot" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project__name'>
                            xRoyalBot
                        </CardContent>
                        <CardContent className='project__skills'>
                            JavaScript | APIs
                        </CardContent>
                        <CardContent className='project__description'>
                            Programmed JS discord bot that listens to custom commands to perform different tasks such as fetching data from an API
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card__link-button' href='https://github.com/xroyalphantom/xRoyalBot' target='_blank' rel='noreferrer'>
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
                        <CardMedia className='card__media' component="img" image={SimonSWEImage} alt="SimonSWE" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project__name'>
                            SimonSWE
                        </CardContent>
                        <CardContent className='project__skills'>
                            React | JavaScript | HTML/CSS
                        </CardContent>
                        <CardContent className='project__description'>
                            Personal Portfolio Website using React and Material UI
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card__link-button' href='https://github.com/xroyalphantom/SimonSWE' target='_blank' rel='noreferrer'>
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
                        <CardMedia className='card__media' component="img" image={ImpossibleInvadersImage} alt="ImpossibleInvaders" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project__name'>
                            Impossible Invaders
                        </CardContent>
                        <CardContent className='project__skills'>
                            Python | OOP
                        </CardContent>
                        <CardContent className='project__description'>
                            Used object-oriented programming in Python to create a game inspired by Space Invaders
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card__link-button' href='https://github.com/xroyalphantom/Impossible-Invaders' target='_blank' rel='noreferrer'>
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
                        <CardMedia className='card__media' component="img" image={MonkeyImage} alt="Monkey" sx={{display:{xs:'none', lg:'block'}}}/>
                        <CardContent className='project__name'>
                            MONKE
                        </CardContent>
                        <CardContent className='project__skills'>
                            Python | APIs
                        </CardContent>
                        <CardContent className='project__description'>
                            Programmed a Python bot that assists with various tasks, such as capturing and manipulating images, then posting them onto Discord/Twitter using their APIs
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a className='card__link-button' href='https://github.com/charliecao02/Monkey-Assistant' target='_blank' rel='noreferrer'>
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
