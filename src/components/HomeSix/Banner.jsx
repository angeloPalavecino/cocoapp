import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideImage1 from '../../assets/images/main-slider/2.jpg';
import SlideImage2 from '../../assets/images/main-slider/3.jpg';

// Swiper configuration options
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, // Adjust the delay as per your need
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
};

function BannerSection({ className }) {
    return (
        <>
        <section id="home" className={`banner-section ${className || ''}`}>
            <Swiper {...swiperOptions} className="banner-carousel">
                {/* Slide Item 1 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}></div>
                    <div className="auto-container">
                        <div className="content-box text-start">
                            <span className="sub-title animate-1">Soluciones para todos tus problemas de IT</span>
                            <h1 className="title animate-2">Innovative <br />Tech Solution</h1>
                            <div className="btn-box justify-content-start animate-3">
                                <Link to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide Item 2 */}
                <SwiperSlide className="slide-item">
                    <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}></div>
                    <div className="auto-container">
                        <div className="content-box text-start">
                            <span className="sub-title animate-1">Solut ions f B or your all it problems</span>
                            <h1 className="title animate-2">Innovative <br />Tech Solution</h1>
                            <div className="btn-box justify-content-start animate-3">
                                <Link to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
           
        </section>
        
    </>
    );
}

export default BannerSection;