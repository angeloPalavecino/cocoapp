import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import SlideImage1 from '../../assets/images/main-slider/4.jpg';
import SlideImage2 from '../../assets/images/main-slider/2.jpg';

// Swiper configuration options
const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 5000, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
};

function BannerSection({ className }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section id="home" className={`banner-section-home3 ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel-home3">
                    {/* Slide Item 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${SlideImage1})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Solutions for your businesses</span>
                                <h1 className="title animate-2">Innovative Tech <br />Solutions</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Explore More</span>
                                    </Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                        <i className="icon fa fa-play"></i> watch video
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide Item 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${SlideImage2})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Solutions for your businesses</span>
                                <h1 className="title animate-2">Innovative Tech <br />Solutions</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Explore More</span>
                                    </Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                        <i className="icon fa fa-play"></i> watch video
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                {/* Video Modal */}
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="Fvae8nxzVz4"
                    onClose={() => setOpen(false)}
                />
            </section>
        </>
    );
}

export default BannerSection;
