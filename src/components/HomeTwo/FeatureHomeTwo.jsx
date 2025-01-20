import React from 'react';
import { Link } from 'react-router-dom';
import featureImage1 from '../../assets/images/resource/feature-1.jpg';
import featureImage2 from '../../assets/images/resource/feature-2.jpg';
import featureImage3 from '../../assets/images/resource/feature-3.jpg';

function FeaturesSectionThree() {
    return (
        <section className="features-section-three">
            <div className="bg bg-pattern-5"></div>
            <div className="large-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Company Features</span>
                    <h2>Improve & Enhance your <br /> Business with us</h2>
                </div>
                <div className="row"> 
                    {/* Feature Block - Gaming and Entertainment */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={featureImage1} alt="Gaming and entertainment" />
                                </figure>
                                <h4 className="word">G</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/about-us">Gaming and <br /> entertainment</Link>
                                </h4>
                                <div className="text">We have a tendency to believe the idea</div>
                                <Link to="/about-us" className="read-more">
                                    <i className="icon fa fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block - Business and Finance */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={featureImage2} alt="Business and finance" />
                                </figure>
                                <h4 className="word">B</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/about-us">Business and <br /> finance</Link>
                                </h4>
                                <div className="text">We have a tendency to believe the idea</div>
                                <Link to="/about-us" className="read-more">
                                    <i className="icon fa fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block - Information and Technology */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={featureImage3} alt="Information and technology" />
                                </figure>
                                <h4 className="word">I</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to="/about-us">Information & <br /> technology</Link>
                                </h4>
                                <div className="text">We have a tendency to believe the idea</div>
                                <Link to="/about-us" className="read-more">
                                    <i className="icon fa fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionThree;
