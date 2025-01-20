import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import TestimonialImage1 from '../../assets/images/resource/testi2-thumb1.jpg';
import TestimonialImage2 from '../../assets/images/resource/testi2-thumb2.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
  
      }  
};

function TestimonialSectionTwo() {
    const testimonials = [
        {
            image: TestimonialImage1,
            name: 'David Willims',
            designation: 'Founder of agency',
            text: 'I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team',
            rating: 5
        },
        {
            image: TestimonialImage2,
            name: 'David Willims',
            designation: 'Founder of agency',
            text: 'I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team',
            rating: 5
        },
        {
            image: TestimonialImage1,
            name: 'David Willims',
            designation: 'Founder of agency',
            text: 'I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team',
            rating: 5
        }
    ];

    return (
        <section id="testimonial" className="testimonial-section-two">
            <div className="icon-lines-2"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">our testimonials</span>
                    <h2>What they’re talking about us?</h2>
                </div>

                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="testimonial-slider-two">
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <i key={i} className="fa fa-star"></i>
                                                ))}
                                            </div>
                                            <h4 className="name">{testimonial.name}</h4>
                                            <span className="designation">{testimonial.designation}</span>
                                            <div className="text">{testimonial.text}</div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={testimonial.image} alt={testimonial.name} />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <i key={i} className="fa fa-star"></i>
                                                ))}
                                            </div>
                                            <h4 className="name">{testimonial.name}</h4>
                                            <span className="designation">{testimonial.designation}</span>
                                            <div className="text">{testimonial.text}</div>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={testimonial.image} alt={testimonial.name} />
                                            </figure>
                                        </div>
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

export default TestimonialSectionTwo;
