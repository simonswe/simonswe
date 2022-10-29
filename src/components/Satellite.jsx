import { Parallax } from 'react-parallax';
import TypeWriter from 'typewriter-effect';

import SatelliteImage from '../assets/images/satellite.jpg';

import './Satellite.scss';

const Satellite = () => {
    return (
        <Parallax className='satellite' bgImage={SatelliteImage} strength={500}>
            <div className='home__container'>
                <div className='carousel__content'>
                    <div className="carousel__content__container">
                        <p className="carousel__content__container__text">I'm a</p>
                        <ul className="carousel__content__container__list">
                            <li className="carousel__content__container__list__item">Software Engineer</li>
                            <li className="carousel__content__container__list__item">Violin Virtuoso</li>
                            <li className="carousel__content__container__list__item">Passionate Gamer</li>
                            <li className="carousel__content__container__list__item">Food Enthusiast</li>
                        </ul>
                    </div>
                </div>
                <div className='typewriter__content'>
                    <span className='img-txt'>
                        <TypeWriter
                            options={{
                                loop: true,
                            }}
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
            </div>
        </Parallax>
    ); 
}

export default Satellite;
