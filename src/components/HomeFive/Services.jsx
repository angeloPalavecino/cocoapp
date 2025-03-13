import React from 'react';
import { Link } from 'react-router-dom';

function ServicesSectionThree({ className }) {
    return (
        <section id="services" className={`services-section-three ${className || ''}`}>
            <div className="icon-lines-6"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Service Info Block */}
                    <div className="service-info-block col-lg-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="sec-title text-gradient mb-5 mb-lg-0">
                                <h2>Get the best technology <br />services & solutions</h2>
                                <div className="text">
                                    There are many variations of passages of available but majority have suffered alteration in some form
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Blocks */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">01</h3>
                                <i className="icon flaticon-digital-services"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Website <br />Development</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">02</h3>
                                <i className="icon flaticon-graphic-design"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Licencias <br />Microsoft</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">03</h3>
                                <i className="icon flaticon-technology"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Workshops <br /></Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">04</h3>
                                <i className="icon flaticon-laptop"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Apps <br />Development</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">05</h3>
                                <i className="icon flaticon-recommend"></i>
                                <h4 className="title">
                                    <Link to="/service-details">UI/UX <br />Designing</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">06</h3>
                                <i className="icon flaticon-promotion"></i>
                                <h4 className="title">
                                    <Link to="/service-details">SEO & Social <br />Marketing</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSectionThree;
