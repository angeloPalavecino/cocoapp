import React from 'react';
import featureImg from '../../assets/images/resource/feature4-1.jpg';

function FeaturesSectionFive() {
    return (
        <section className="features-section-five pt-0 pb-0">
            <div className="row g-0">
                {/* Image Column */}
                <div className="image-column col-xl-4">
                    <figure className="image">
                        <img src={featureImg} alt="Image" />
                    </figure>
                </div>

                {/* Content Column */}
                <div className="content-column col-xl-4 col-lg-6">
                    <div className="inner-column">
                        <div className="icon-arrow3 bounce-x"></div>
                        <div className="sec-title dark">
                            <span className="sub-title">What we Offer</span>
                            <h2>The Best Source for <br />IT Solutions</h2>
                        </div>
                    </div>
                </div>

                {/* Icons Column */}
                <div className="icons-column col-xl-4 col-lg-6">
                    <div className="inner-column">
                        <div className="row g-0">
                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-digital-services"></i>
                                    <h5 className="title">Website</h5>
                                </div>
                            </div>

                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-targeted-marketing"></i>
                                    <h5 className="title">iOS</h5>
                                </div>
                            </div>

                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-promotion"></i>
                                    <h5 className="title">Android</h5>
                                </div>
                            </div>

                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-graphic-design"></i>
                                    <h5 className="title">IoT</h5>
                                </div>
                            </div>

                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-laptop"></i>
                                    <h5 className="title">Wearable</h5>
                                </div>
                            </div>

                            {/* Feature Block */}
                            <div className="feature-block-five col-md-4 col-sm-6">
                                <div className="inner">
                                    <i className="icon flaticon-teaching"></i>
                                    <h5 className="title">TV</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionFive;
