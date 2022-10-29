import { Link } from 'react-scroll';
import { TbArrowBarToUp } from 'react-icons/tb';

import './ButtonTop.scss';

const ButtonTop = () => {
    return(
        <Link to='navbar' smooth='true' duration={500} className='to__top'>
            <TbArrowBarToUp />
        </Link>
    );
}

export default ButtonTop;
