import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/images/resource/img2.jpg';

function FeaturesSectionFour() {
    return (
        <section className="features-section-four pt-0">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row"> 
                        {/* Title Column */}
                        <div className="title-column col-lg-3">
                            <div className="inner-column">
                                <h4 className="title">We’re Ready <br />Develop Your Site!</h4>
                                <figure className="image">
                                    <img src={img2} alt="Development" />
                                </figure>
                                <div className="icon-lines-7"></div>
                            </div>
                        </div>

                        {/* Feature Block - IT Management */}
                        <div className="feature-block-four col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <i className="icon flaticon-learning"></i>
                                <h5 className="title">IT Management</h5>
                                <div className="text">Lorem ipsu dolor sit am adipi we help you ensure everyone powerful</div>
                            </div>
                        </div>

                        {/* Feature Block - Cyber Security */}
                        <div className="feature-block-four col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <i className="icon flaticon-settings"></i>
                                <h5 className="title">Cyber Security</h5>
                                <div className="text">Lorem ipsu dolor sit am adipi we help you ensure everyone powerful</div>
                            </div>
                        </div>

                        {/* Feature Block - Cloud Computing */}
                        <div className="feature-block-four col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <i className="icon flaticon-cloud"></i>
                                <h5 className="title">Cloud Computing</h5>
                                <div className="text">Lorem ipsu dolor sit am adipi we help you ensure everyone powerful</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionFour;
