import './Carousel.scss';

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className="carousel__container">
                <p className="carousel__container__text">I'm a</p>
                <ul className="carousel__container__list">
                    <li className="carousel__container__list__item">Software Engineer</li>
                    <li className="carousel__container__list__item">Violin Virtuoso</li>
                    <li className="carousel__container__list__item">Passionate Gamer</li>
                    <li className="carousel__container__list__item">Food Enthusiast</li>
                </ul>
            </div>
        </div>
    ); 
}

export default Carousel;
