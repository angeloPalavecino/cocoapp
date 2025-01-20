import React from 'react';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import testi1Thumb1 from '../../assets/images/resource/testi2-thumb1.jpg';
import testi1Thumb2 from '../../assets/images/resource/testi2-thumb2.jpg';

function Testimonial() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/testimonial', title: 'Testimonial' },
                ]}
            />
            <section className="testimonial-section-two">
                <div className="auto-container">
                    <div className="carousel-outer">
                        {/* Swiper for Testimonials */}
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={2}
                            loop={true}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 1,
                                },
                                767: {
                                    slidesPerView: 2,
                                },
                                991: {
                                    slidesPerView: 2,
                                },
                                1199: {
                                    slidesPerView: 2,
                                },
                                1350: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
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
                                                <img src={testi1Thumb1} alt="David Willims" />
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
                                            <h4 className="name">Jessica Brown</h4>
                                            <span className="designation">Senior Designer</span>
                                            <div className="text">
                                                Competitive pricing and customer support. It’s refreshing to get such a personal touch.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={testi1Thumb2} alt="Jessica Brown" />
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
                                            <h4 className="name">Sarah White</h4>
                                            <span className="designation">Marketing Head</span>
                                            <div className="text">
                                                Excellent service, professional team. I highly recommend working with them for all logistics needs.
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={testi1Thumb1} alt="Sarah White" />
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
                                            <h4 className="name">Mark Johnson</h4>
                                            <span className="designation">CEO of Transida</span>
                                            <div className="text">
                                                Exceptional customer care, the team is very supportive and has the best logistics services!
                                            </div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={testi1Thumb2} alt="Mark Johnson" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Testimonial;
