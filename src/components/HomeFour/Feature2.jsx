import React from 'react';
import { Link } from 'react-router-dom';
import feature1 from '../../assets/images/resource/feature-1.jpg';
import feature2 from '../../assets/images/resource/feature-2.jpg';
import feature3 from '../../assets/images/resource/feature-3.jpg';

function FeaturesSectionThree() {
    return (
        <section className="features-section-three">
            <div className="bg bg-pattern-5"></div>
            <div className="large-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Company Features</span>
                    <h2>Improve & Enhance your <br />Business with us</h2>
                </div>
                <div className="row">
                    {/* Feature Block 1 */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={feature1} alt="Gaming and Entertainment" />
                                </figure>
                                <h4 className="word">G</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to ="/about-us">Gaming and <br />entertainment</Link>
                                </h4>
                                <div className="text">We have to a tendency to believe the idea</div>
                                <Link to ="/about-us" className="read-more">
                                    <i className="icon fa fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block 2 */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={feature2} alt="Business and Finance" />
                                </figure>
                                <h4 className="word">B</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to ="/about-us">Business and <br />finance</Link>
                                </h4>
                                <div className="text">We have to a tendency to believe the idea</div>
                                <Link to ="/about-us" className="read-more">
                                    <i className="icon fa fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block 3 */}
                    <div className="feature-block-three col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={feature3} alt="Information & Technology" />
                                </figure>
                                <h4 className="word">I</h4>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link to ="/about-us">Information &<br />technology</Link>
                                </h4>
                                <div className="text">We have to a tendency to believe the idea</div>
                                <Link to ="/about-us" className="read-more">
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
