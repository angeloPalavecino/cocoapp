import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from '../../assets/images/resource/about-1.jpg';
import aboutImage2 from '../../assets/images/resource/about-2.jpg';
import aboutThumb from '../../assets/images/resource/about1-thumb.jpg';
import iconCircleText from '../../assets/images/icons/icon-circle-text.png';

function AboutHomeOne({ className }) {
    const percentage = 78;

    return (
        <section className={`about-section ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Nostros</span>
                                    <h2>We provide the best IT <br /> solutions services</h2>
                                </div>
                                <div className="title-box">
                                    <h4 className="title">Making the easiest tech solution for you.</h4>
                                    <div className="text">
                                        Explain to you how all this mistaken denouncing pleasure and praising pain was born, and we will give you a complete, simply free text account of the system, and expound the actual teachings.
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="row">
                                        <div className="about-block col-sm-6">
                                            <div className="inner">
                                                <i className="icon flaticon-laptop"></i>
                                                <h4 className="title">Website <br /> development</h4>
                                            </div>
                                        </div>
                                        <div className="about-block col-sm-6">
                                            <div className="inner">
                                                <i className="icon flaticon-technology"></i>
                                                <h4 className="title">Internal <br /> networking</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h5 className="skill-title">Technology</h5>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: `${percentage}%` }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text" data-speed="3000" data-stop={percentage}>
                                                                {percentage}
                                                            </span>
                                                            %
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-box">
                                    <div className="author-box">
                                        <img src={aboutThumb} alt="CEO" />
                                        <div className="info">
                                            <h4 className="name">Brittary Herman</h4>
                                            <div className="designation">CEO & Founder of Company</div>
                                        </div>
                                    </div>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Discover more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image-1 overlay-anim wow fadeInUp">
                                        <img src={aboutImage1} alt="About" />
                                    </figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight">
                                        <img src={aboutImage2} alt="About" />
                                    </figure>
                                    <div className="icon-dots-4"></div>
                                    <div className="circle-text">
                                        <img src={iconCircleText} alt="Circle Text" />
                                        <h2 className="word">IT</h2>
                                    </div>
                                    <div className="exp-box">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <i className="icon flaticon-recommend"></i>
                                                <span className="count">+30</span>
                                            </div>
                                            <h6 className="title">Years of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHomeOne;
