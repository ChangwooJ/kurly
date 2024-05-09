import React from "react";
import BannerImg from "../images/BannerImg";
import "../css/Banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipeCore,{Navigation,Pagination,Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwipeCore.use([Navigation,Pagination,Autoplay]);


const Banner = () => {
    return(
        <nav id="banner">
            <div className="slide">
                <Swiper
                    spaceBetween={200}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {BannerImg.map((slide) => (
                        <SwiperSlide><div className="slides" key={slide.id}><img src={slide.src} /></div></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </nav>
    )
}

export default Banner;