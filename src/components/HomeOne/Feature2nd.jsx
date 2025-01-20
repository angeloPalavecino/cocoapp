import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import BenefitImage from '../../assets/images/resource/benefit-1.jpg';

function FeaturesSectionTwo({ className }) {
    return (
        <section className={`features-section-two ${className || ''}`}>
            <div className="icon-circle-lines zoom-two"></div>
            <div className="icon-angle bounce-x"></div>
            <div className="icon-lines-4 bounce-y"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">our Benefits</span>
                    <h2>We’re Dedicated to Serve <br /> you All Time</h2>
                </div>
                <div className="row">
                    {/* Feature Block - Banking */}
                    <div className="feature-block-two col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={BenefitImage} alt="Banking" />
                                    </Link>
                                </figure>
                                <div className="title-box">
                                    <Link to="/about-us" className="read-more">
                                        <i className="icon fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                    <h4 className="title">
                                        <Link to="/about-us">Banking</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="icon-box">
                                        <i className="icon flaticon-bank"></i>
                                    </div>
                                    <h4 className="title">Banking</h4>
                                    <div className="text">
                                        Desire that they can foresee trouble bound ensue.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block - Networking */}
                    <div className="feature-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={BenefitImage} alt="Networking" />
                                    </Link>
                                </figure>
                                <div className="title-box">
                                    <Link to="/about-us" className="read-more">
                                        <i className="icon fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                    <h4 className="title">
                                        <Link to="/about-us">Networking</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="icon-box">
                                        <i className="icon flaticon-recommend"></i>
                                    </div>
                                    <h4 className="title">Networking</h4>
                                    <div className="text">
                                        Desire that they can foresee trouble bound ensue.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block - Marketing */}
                    <div className="feature-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={BenefitImage} alt="Marketing" />
                                    </Link>
                                </figure>
                                <div className="title-box">
                                    <Link to="/about-us" className="read-more">
                                        <i className="icon fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                    <h4 className="title">
                                        <Link to="/about-us">Marketing</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="icon-box">
                                        <i className="icon flaticon-promotion"></i>
                                    </div>
                                    <h4 className="title">Marketing</h4>
                                    <div className="text">
                                        Desire that they can foresee trouble bound ensue.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block - Education */}
                    <div className="feature-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/about-us">
                                        <img src={BenefitImage} alt="Education" />
                                    </Link>
                                </figure>
                                <div className="title-box">
                                    <Link to="/about-us" className="read-more">
                                        <i className="icon fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                    <h4 className="title">
                                        <Link to="/about-us">Education</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="inner">
                                    <div className="icon-box">
                                        <i className="icon flaticon-graphic-design"></i>
                                    </div>
                                    <h4 className="title">Education</h4>
                                    <div className="text">
                                        Desire that they can foresee trouble bound ensue.
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

export default FeaturesSectionTwo;
