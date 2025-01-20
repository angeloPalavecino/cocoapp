import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from '../../assets/images/main-slider/1.jpg'; 
import Image2 from '../../assets/images/main-slider/2.jpg'; 

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 500000, // Adjust the delay as per your need
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
};

function BannerSectionTwo({ className }) {
    const contentBoxStyle = {
        marginTop: '-150px' 
    };
    const buttonStyle = {
        marginTop: '30px' 
    };
    const subTitleStyle = {
        position: 'relative',
        display: 'block',
        lineHeight: '24px',
        padding: '7px 40px 7px 0px',
        fontSize: '14px',
        color: '#ffffff',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
    };
    const beforeStyle = {
        position: 'absolute',
        left: '30px',
        top: '38.5%',
        transform: 'translateY(-50%)',
        height: '2px',
        width: '40px',
        content: '""'
    };

    return (
        <>
            <section id="home" className={`banner-section-two ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box" style={contentBoxStyle}>
                                {/* Simulating the ::before pseudo-element */}
                                <div style={beforeStyle}></div>
                                <span className="sub-title animate-1" style={subTitleStyle}>Solutions for your all it problems</span>
                                <h1 className="h1 animate-2" style={{ color: '#fff' }}> IT Solutions <br /> <span style={{ color: '#ffaa17' }}>&</span> Services </h1>
                                <div className="btn-box animate-3" style={buttonStyle}>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Discover more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${Image2})` }}></div>
                        <div className="auto-container">
                            <div className="content-box" style={contentBoxStyle}>
                                {/* Simulating the ::before pseudo-element */}
                                <div style={beforeStyle}></div>
                                <span className="sub-title animate-1" style={subTitleStyle}>Solutions for your all it problems</span>
                                <h1 className="h1 animate-2" style={{ color: '#fff' }}> IT Solutions <br /> <span style={{ color: '#ffaa17' }}>&</span> Services </h1>
                                <div className="btn-box animate-3" style={buttonStyle}>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Discover more</span>
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

export default BannerSectionTwo;