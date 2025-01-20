import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
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
    },
};

function ServicesSection() {
    return (
        <section id="services" className="services-section-two">
            <div className="bg bg-pattern-1"></div>
            <div className="auto-container">
                <div className="sec-title light text-center text-gradient">
                    <span className="sub-title">what we’re offering</span>
                    <h2>Get the best IT technology <br /> services & solutions</h2>
                </div>
                <div className="services-carousel">
                    <Swiper {...swiperOptions} className="service-carousel">
                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Product <br />development</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-bank"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Digital <br />marketing</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-technology"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Security <br />system</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-digital-services"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">UI/Ux <br />designing</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-laptop"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Data <br />analysis</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-laptop"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Product <br />development</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-bank"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Digital <br />marketing</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-technology"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Security <br />system</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-digital-services"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">UI/Ux <br />designing</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-laptop"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service Block */}
                        <SwiperSlide className="service-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/service-details">Data <br />analysis</Link>
                                    </h4>
                                    <div className="text">Providing the solutions for non-IT businesses.</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-laptop"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
