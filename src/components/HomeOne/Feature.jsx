import React from 'react';
import { Link } from 'react-router-dom';

function Feature({ className }) {
    return (
        <section className={`features-section ${className || ''}`}>
            <div className="bg bg-pattern-2"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <div className="sec-title light text-gradient">
                                <span className="sub-title">Working areas</span>
                                <h2>IT Services Customized <br /> for Your Industry</h2>
                                <div className="text">
                                    There are many variations of passages of available but majority <br />
                                    have suffered alteration in some form
                                </div>
                            </div>
                            <Link to="/about-us" className="theme-btn btn-style-one">
                                <span className="btn-title">Discover More</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Features Column */}
                    <div className="features-column col-lg-6 wow fadeInRight">
                        <div className="inner-column">
                            <div className="row">
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-globe"></i>
                                        <h5 className="title">Website</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fab fa-android"></i>
                                        <h5 className="title">Android</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-tv-alt"></i>
                                        <h5 className="title">Web application</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-pen-ruler"></i>
                                        <h5 className="title">Designing</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-lightbulb"></i>
                                        <h5 className="title">Technology</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-brain-circuit"></i>
                                        <h5 className="title">Solutions</h5>
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

export default Feature;
