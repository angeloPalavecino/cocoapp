import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing images
import Project1 from '../../assets/images/resource/project-1.jpg';
import Project2 from '../../assets/images/resource/project-2.jpg';
import Project3 from '../../assets/images/resource/project-3.jpg';
import Project4 from '../../assets/images/resource/project-4.jpg';

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
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 4 },
    }
};

function ProjectSliderHomeTwo({ className }) {
    return (
        <section id="project" className={`projects-section style-two pt-0 ${className || ''}`}>
            <div className="icon-lines-4"></div>
            <div className="large-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Recent Project</span>
                    <h2>Explore the latest IT tech <br />projects done</h2>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme">
                        {[Project1, Project2, Project3, Project4, Project1, Project2, Project3, Project4].map((imgSrc, index) => (
                            <SwiperSlide key={index} className="project-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to="/projects-details">
                                                <img src={imgSrc} alt={`Project ${index + 1}`} />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <Link to="/projects-details">
                                            <i className="icon fa fa-angle-right"></i>
                                        </Link>
                                        <div className="text">IT Technology</div>
                                        <h4 className="title">
                                            <Link to="/projects-details">Data recovery <br />analysis</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ProjectSliderHomeTwo;
