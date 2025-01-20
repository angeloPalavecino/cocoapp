import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import ProjectImage1 from '../../assets/images/resource/project-1.jpg';
import ProjectImage2 from '../../assets/images/resource/project-2.jpg';
import ProjectImage3 from '../../assets/images/resource/project-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 4 },
    },
};

const ProjectsSection = () => {
    return (
        <section id="project" className="projects-section">
            <div className="auto-container">
                <div className="outer-container">
                    <div className="sec-title">
                        <span className="sub-title">Our Recent project</span>
                        <h2>
                            Explore the latest IT tech <br /> projects done
                        </h2>
                    </div>
                    <div className="btn-box">
                        <Link to="/projects" className="theme-btn btn-style-one">
                            <span className="btn-title">All Projects</span>
                        </Link>
                    </div>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme">
                        {/* Swiper Slides */}
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="//projects-details">
                                            <img src={ProjectImage1} alt="Project 1" />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <Link to="//projects-details">
                                        <i className="icon fa fa-angle-right"></i>
                                    </Link>
                                    <div className="text">IT Technology</div>
                                    <h4 className="title">
                                        <Link to="//projects-details">Data recovery <br /> analysis</Link>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="//projects-details">
                                            <img src={ProjectImage2} alt="Project 2" />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <Link to="//projects-details">
                                        <i className="icon fa fa-angle-right"></i>
                                    </Link>
                                    <div className="text">IT Technology</div>
                                    <h4 className="title">
                                        <Link to="//projects-details">Data recovery <br /> analysis</Link>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="//projects-details">
                                            <img src={ProjectImage3} alt="Project 3" />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <Link to="//projects-details">
                                        <i className="icon fa fa-angle-right"></i>
                                    </Link>
                                    <div className="text">IT Technology</div>
                                    <h4 className="title">
                                        <Link to="//projects-details">Data recovery <br /> analysis</Link>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="//projects-details">
                                            <img src={ProjectImage4} alt="Project 4" />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <Link to="//projects-details">
                                        <i className="icon fa fa-angle-right"></i>
                                    </Link>
                                    <div className="text">IT Technology</div>
                                    <h4 className="title">
                                        <Link to="//projects-details">Data recovery <br /> analysis</Link>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
