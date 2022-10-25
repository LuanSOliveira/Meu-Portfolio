import "./Carousel.scss"

import { Swiper } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, A11y, Autoplay, EffectCards, EffectCube } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';

const Carousel = ({children, efeito}) => {

    return(
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectCards, EffectCube]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            autoplay={{delay: 5000}}
            allowTouchMove={true}
            effect={efeito}  
            cardsEffect={{slideShadows: false}}
            cubeEffect={{slideShadows: false}}
        >
            {children}
        </Swiper>
    )
}

export default Carousel;