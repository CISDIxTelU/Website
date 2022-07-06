import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import React from "react";
import { Banner1, Banner2, Banner3, Banner4 } from '../../assets';
import { Autoplay, Navigation, Pagination } from 'swiper';

function Carousel() {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ backgroundColor: '#404042', width: '100%' }}
        >
            <SwiperSlide>
                <img src={Banner1} alt='foto1' className='image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner2} alt='foto1' className='image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner3} alt='foto1' className='image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner4} alt='foto1' className='image' />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel