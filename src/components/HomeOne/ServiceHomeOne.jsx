import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage1 from '../../assets/images/resource/services-1.jpg';
import serviceImage2 from '../../assets/images/resource/services-2.jpg';
import serviceImage3 from '../../assets/images/resource/services-3.jpg';

function ServicesSection() {
    return (
        <section className="services-section pt-0">
            <div className="icon-lines-3 bounce-y"></div>
            <div className="bg bg-pattern-13"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Service Block 1 */}
                    <div className="service-block col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <figure className="image">
                                <Link to="/service-details">
                                    <img src={serviceImage1} alt="Service 1" />
                                </Link>
                            </figure>
                            <div className="content-box">
                                <i className="icon flaticon-recommend"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Perfect solutions <br />that business demands</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block 2 */}
                    <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <figure className="image">
                                <Link to="/service-details">
                                    <img src={serviceImage2} alt="Service 2" />
                                </Link>
                            </figure>
                            <div className="content-box">
                                <i className="icon flaticon-digital-services"></i>
                                <h4 className="title">
                                    <Link to="/service-details">Choose the best <br />IT service company</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Service Block 3 */}
                    <div className="service-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <figure className="image">
                                <Link to="/service-details">
                                    <img src={serviceImage3} alt="Service 3" />
                                </Link>
                            </figure>
                            <div className="content-box">
                                <i className="icon flaticon-technology"></i>
                                <h4 className="title">
                                    <Link to="/service-details">We know how to <br />make a technology</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

    
            </div>
        </section>
    );
}

export default ServicesSection;
