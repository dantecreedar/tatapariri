import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "./../../../assets/slide1.jpg";
import slide2 from "./../../../assets/slide2.jpg";
import slide3 from "./../../../assets/slide3.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./swiper.scss";



const SwiperIndex = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000 }}
            >
                <section className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <SwiperSlide>
                            <img src={slide1} alt='slide1' className='slide' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide2} alt='slide2' className='slide' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide3} alt='slide3' className='slide' />
                        </SwiperSlide>
                    </div>
                </section>
            </Swiper>
        </>
    )
}

export default SwiperIndex;