import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "./carousel.scss";
import Image1 from "./../../../assets/about2.jpg";
import Image2 from "./../../../assets/about3.jpg";
import Image3 from "./../../../assets/about5.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <div className='swiper-container'>
                    <SwiperSlide>
                        <img src={Image1} alt='slide1' className='swiperSlide' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image2} alt='slide2' className='swiperSlide' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image3} alt='slide3' className='swiperSlide' />
                    </SwiperSlide>
                </div>
            </Swiper>
        </>
    )
}

export default Carousel;