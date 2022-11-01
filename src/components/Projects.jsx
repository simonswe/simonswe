import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Card, CardMedia, CardContent } from '@mui/material';
import { Parallax } from 'react-parallax';

import DarkerNebulaImage from '../assets/images/nebula2.jpg';

import './Projects.scss';

const Projects = () => {
    const [project, setProject] = React.useState('1');

    const handleChange = (event, newProject) => {
        if (newProject !== null) {
            setProject(newProject);
        }
    };

    return (
        <div name='projects'>
            <Parallax className='space' bgImage={DarkerNebulaImage} strength={500}>
                <div className='content'>
                    <h1>Projects</h1>
                    <Card variant='outlined' className='button-group'>
                        <ToggleButtonGroup
                            color="info"
                            value={project}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                                <ToggleButton value="1">Project 1</ToggleButton>
                                <ToggleButton value="2">Project 2</ToggleButton>
                                <ToggleButton value="3">Project 3</ToggleButton>
                        </ToggleButtonGroup>
                    </Card>
                    {
                        project === '1'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia
                            style={{
                                maxWidth: "25vw",
                                padding: "3em"
                            }}
                            component="img"
                            image=''
                            alt=""
                            />
                            <CardContent className='job-title'>
                                
                            </CardContent>
                            <CardContent className='description'>
                                
                            </CardContent>
                        </Card>
                    }
                    {
                        project === '2'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia
                            style={{
                                maxWidth: "25vw",
                                maxHeight: "10vh",
                                padding: "3em"
                            }}
                            component="img"
                            image=''
                            alt=""
                            />
                            <CardContent className='job-title'>
                                
                            </CardContent>
                            <CardContent className='description'>
                                
                            </CardContent>
                        </Card>
                    }
                    {
                        project === '3'
                        &&
                        <Card variant='outlined' className='card'>
                            <CardMedia
                            style={{
                                maxWidth: "25vw",
                                padding: "3em"
                            }}
                            component="img"
                            image=''
                            alt=""
                            />
                            <CardContent className='job-title'>
                                
                            </CardContent>
                            <CardContent className='description'>
                                 
                            </CardContent>
                        </Card>
                    }
                </div>
            </Parallax>
        </div>
    ); 
}

export default Projects;
