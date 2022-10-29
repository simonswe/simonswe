import { Parallax } from 'react-parallax';
import { ButtonGroup } from '@mui/material';

import SpaceImage from '../assets/images/space.jpg';

import './Space.scss';

const Space = () => {
    return (
        <div name='experience'>
            <Parallax className='space' bgImage={SpaceImage} strength={500}>
                <div className='content'>
                    <ButtonGroup variant="text" size='large' aria-label="text button group">
                    </ButtonGroup>
                </div>
            </Parallax>
        </div>
    ); 
}

export default Space;
