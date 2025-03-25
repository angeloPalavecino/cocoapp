import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1199: { slidesPerView: 5 },
    }
};

function ServicesSectionTwo() {
    return (
        <section id="services" className="services-section-two">
            <div className="bg bg-pattern-1"></div>
            <div className="auto-container">
                <div className="sec-title light text-center text-gradient">
                    <span className="sub-title">Lo que ofrecemos</span>
                    <h2>Obtén los mejores servicios <br /> y soluciones en tecnología</h2>
                </div>

                <Swiper {...swiperOptions} className="services-carousel">
                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/service-details">Desarrollo <br/> de Productos</Link>
                                </h4>
                                <div className="text">Low Code, Desarrollo tradicional  </div>
                                <div className="icon-box">
                                    <i className="icon flaticon-web-development"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/service-details">Marketing<br/> digital</Link>
                                </h4>
                                <div className="text">Branding y diseños de experiencia de Usuario </div>
                                <div className="icon-box">
                                    <i className="icon fa-solid fa-rectangle-ad"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/service-details">Digitalización <br /> Organizacional</Link>
                                </h4>
                                <div className="text">Te guiamos durante todo el proceso de adopción.</div>
                                <div className="icon-box">
                                    <i className="icon flaticon-digital-services"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/service-details">Capacitaciones<br /> Workshop</Link>
                                </h4>
                                <div className="text">Acompañamiento continuo y dedicado.</div>
                                <div className="icon-box">
                                <i class="icon fa-light fa-chalkboard-user"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/service-details">Analisis <br /> de Datos</Link>
                                </h4>
                                <div className="text">Transforma datos en Acciones.</div>
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
                                    <Link to="/service-details">Desarrollo <br /> de Productos</Link>
                                </h4>
                                <div className="text">Low Code, Desarrollo tradicional  </div>
                                <div className="icon-box">
                                <i class="icon flaticon-web-development"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                            <h4 className="title">
                                    <Link to="/service-details">Marketing  <br /> digital</Link>
                                </h4>
                                <div className="text">Branding y diseños de experiencia de Usuario </div>
                                <div className="icon-box">
                                <i class="icon fa-solid fa-rectangle-ad"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                            <h4 className="title">
                                    <Link to="/service-details">Digitalización <br /> Organizacional</Link>
                                </h4>
                                <div className="text">Te guiamos durante todo el proceso de adopción.</div>
                                <div className="icon-box">
                                    <i className="icon flaticon-digital-services"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                            <h4 className="title">
                                    <Link to="/service-details">Capacitaciones<br /> Workshop</Link>
                                </h4>
                                <div className="text">Acompañamiento continuo y dedicado.</div>
                                <div className="icon-box">
                                <i class="icon fa-light fa-chalkboard-user"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-two">
                        <div className="inner-box">
                            <div className="content-box">
                            <h4 className="title">
                                    <Link to="/service-details">Analisis <br /> de Datos</Link>
                                </h4>
                                <div className="text">Transforma datos en Acciones.</div>
                                <div className="icon-box">
                                    <i className="icon flaticon-laptop"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default ServicesSectionTwo;
