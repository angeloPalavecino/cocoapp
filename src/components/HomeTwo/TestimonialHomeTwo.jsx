import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Import images
import Thumb1 from '../../assets/images/resource/testi2-thumb1.jpg';
import Thumb2 from '../../assets/images/resource/testi2-thumb2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 3 },
    }
};

function TestimonialSectionTwo() {
    return (
        <section id="testimonial" className="testimonial-section-two">
            <div className="icon-lines-2"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">our testimonials</span>
                    <h2>What they’re talking about us?</h2>
                </div>

                <div className="carousel-outer">
                    {/* Swiper */}
                    <div className="swiper testimonial-slider-two">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            {/* Testimonial Block 1 */}
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4 className="name">David Willims</h4>
                                            <span className="designation">Founder of agency</span>
                                            <div className="text">
                                                I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={Thumb1} alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Testimonial Block 2 */}
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4 className="name">David Willims</h4>
                                            <span className="designation">Founder of agency</span>
                                            <div className="text">
                                                I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={Thumb2} alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Testimonial Block 3 */}
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4 className="name">David Willims</h4>
                                            <span className="designation">Founder of agency</span>
                                            <div className="text">
                                                I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={Thumb1} alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Testimonial Block 4 */}
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4 className="name">David Willims</h4>
                                            <span className="designation">Founder of agency</span>
                                            <div className="text">
                                                I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={Thumb1} alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Testimonial Block 5 */}
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4 className="name">David Willims</h4>
                                            <span className="designation">Founder of agency</span>
                                            <div className="text">
                                                I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={Thumb2} alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSectionTwo;
