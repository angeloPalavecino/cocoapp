import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <section className="our-service pt-100 pb-70">
            <div className="auto-container">
                <div className="row">
                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">01</h3>
                                <i className="icon flaticon-graphic-design"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Licencias<br />Microsoft</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">02</h3>
                                <i className="icon flaticon-digital-services"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Workshops <br />Microsoft</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">03</h3>
                                <i className="icon flaticon-technology"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Outsoursing <br />de TI</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">04</h3>
                                <i className="icon flaticon-laptop"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Capacitaciones <br />M365</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">05</h3>
                                <i className="icon flaticon-recommend"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Capacitaciones<br />Copilot</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">06</h3>
                                <i className="icon flaticon-promotion"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Digitalización <br />Documental</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="700ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">07</h3>
                                <i className="icon flaticon-recommend"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Modern<br />Work</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block */}
                    <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="content-box">
                                <h3 className="count">08</h3>
                                <i className="icon flaticon-promotion"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Adopción<br/>365</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
