import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import images
import testi1Thumb1 from '../../assets/images/resource/testi1-thumb1.jpg';
import testi1Thumb2 from '../../assets/images/resource/testi1-thumb2.jpg';
import quoteIcon from '../../assets/images/icons/quote-icon.png';

function TestimonialSection() {
    return (
        <section id="testimonial" className="testimonial-section">
            <div className="bg bg-pattern-12"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Title Column */}
                    <div className="title-column col-lg-5">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">our testimonials</span>
                                <h2>What they’re talking about us?</h2>
                                <div className="text">
                                    Sed ut perspiciatis unde omnis natus error sit <br />
                                    voluptatem accusa ntium doloremque laudantium <br />
                                    totam rem aperiamea queipsa.
                                </div>
                            </div>
                            <div className="info-box">
                                <ul className="feature-list">
                                    <li><i className="icon fal fa-circle-check"></i>Pellentes gravida lectus.</li>
                                    <li><i className="icon fal fa-circle-check"></i>Finibus aliquet ultrices.</li>
                                </ul>
                            </div>
                            <div className="swiper-nav">
                                <div className="swiper-prev"><span className="fa fa-long-arrow-alt-left"></span></div>
                                <div className="swiper-next"><span className="fa fa-long-arrow-alt-right"></span></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial Column */}
                    <div className="testimonial-column col-lg-7">
                        <div className="inner-column">
                            {/* Swiper for testimonials */}
                            <Swiper
                                direction={'vertical'}
                                modules={[Navigation]}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.swiper-next',
                                    prevEl: '.swiper-prev',
                                }}
                                loop={true}
                                className="testimonial-slider"
                            >
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb"><img src={testi1Thumb1} alt="Testimonial 1" /></figure>
                                            <figure className="image-2"><img src={quoteIcon} alt="Quote Icon" /></figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name">David Willims</h4>
                                                <span className="designation">Founder of agency</span>
                                            </div>
                                            <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day leaning on Transida.</div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Additional SwiperSlides can be added here */}                                
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb"><img src={testi1Thumb2} alt="Testimonial 2" /></figure>
                                            <figure className="image-2"><img src={quoteIcon} alt="Quote Icon" /></figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name">Jessica Brown</h4>
                                                <span className="designation">Senior Designer</span>
                                            </div>
                                            <div className="text">Competitive pricing and customer support. It’s refreshing to get such a personal touch.</div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb"><img src={testi1Thumb1} alt="Testimonial 1" /></figure>
                                            <figure className="image-2"><img src={quoteIcon} alt="Quote Icon" /></figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name">David Willims</h4>
                                                <span className="designation">Founder of agency</span>
                                            </div>
                                            <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day leaning on Transida.</div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Additional SwiperSlides can be added here */}                                
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <figure className="thumb"><img src={testi1Thumb2} alt="Testimonial 2" /></figure>
                                            <figure className="image-2"><img src={quoteIcon} alt="Quote Icon" /></figure>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name">Jessica Brown</h4>
                                                <span className="designation">Senior Designer</span>
                                            </div>
                                            <div className="text">Competitive pricing and customer support. It’s refreshing to get such a personal touch.</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
