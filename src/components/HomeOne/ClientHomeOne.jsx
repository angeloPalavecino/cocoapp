import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importing images
import ClientImage1 from '../../assets/images/clients/1.png';
import ClientImage2 from "../../assets/images/clients/2.png";
import ClientImage3 from "../../assets/images/clients/3.png";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    }
};

function ClientHomeOne({ className }) {
    return (
        <section className={`clients-section pull-up ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="sponsors-outer">
                        <Swiper {...swiperOptions} className="clients-carousel">
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage2} alt="Client 2" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="client-block">
                                <Link to="#"><img src={ClientImage1} alt="Client 1" /></Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientHomeOne;
