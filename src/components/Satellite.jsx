import TypeWriter from 'typewriter-effect';

import './Satellite.scss';
import Carousel from './Carousel';

const Satellite = () => {
    return (
        <div className='satellite'>
            <div className='satellite__container'>
                <div className='typewriter'>
                    <span>
                        <TypeWriter
                            options={{loop: true}}
                            onInit={(typewriter) => {
                                typewriter.changeDelay(25)
                                .changeDeleteSpeed(2)
                                .start()
                                .typeString("Welcome!")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString(" My name is Simon :)")
                                .pauseFor(1500)
                                .deleteAll()
                            }}
                        />
                    </span>
                </div>
                <Carousel />
            </div>
        </div>
    ); 
}

export default Satellite;
