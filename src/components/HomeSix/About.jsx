import React from 'react';
import { Link } from 'react-router-dom';
import aboutThumb from '../../assets/images/resource/about2-thumb.jpg';
import aboutImage from '../../assets/images/resource/about-3.png';
import circleTextIcon from '../../assets/images/icons/icon-circle-text.png';

function AboutSectionFive({ className }) {
    return (
        <section id="about" className={`about-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Content Column */}
                        <div
                            className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">about the company</span>
                                    <h2>Expert of software & <br /> tech programing</h2>
                                    <div className="text"> Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                                </div>
                                <ul className="list-style-two two-col">
                                    <li><i className="icon fa fa-check-circle"></i>Maecenas pulvinar ligula</li>
                                    <li><i className="icon fa fa-check-circle"></i>Non proin netus natoque</li>
                                    <li><i className="icon fa fa-check-circle"></i>Porta hinteger neque</li>
                                    <li><i className="icon fa fa-check-circle"></i>Porta hinteger neque</li>
                                </ul>
                                <div className="bottom-box">
                                    <div className="author-box">
                                        <figure className="image">
                                            <img src={aboutThumb} alt="Aleesha brown" />
                                        </figure>
                                        <div className="info">
                                            <h4 className="name">Aleesha brown</h4>
                                            <div className="designation">CEO & CO Founder</div>
                                        </div>
                                    </div>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Discover more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image overlay-anim wow fadeInRight">
                                        <img src={aboutImage} alt="About Us" />
                                    </figure>
                                    <div className="icon-dots-3"></div>
                                    <div className="circle-text">
                                        <img src={circleTextIcon} alt="Icon" />
                                        <h2 className="word">IT</h2>
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

export default AboutSectionFive;
