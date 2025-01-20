import React from 'react';
import featureImg from '../../assets/images/resource/feature6-1.jpg';

function FeaturesSectionSix() {
    return (
        <section className="features-section-six">
            <div className="bg bg-pattern-7"></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row"> 
                        {/* Content Column */}
                        <div className="content-column col-xl-5 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Company Features</span>
                                    <h2>Grow business with endless possibility</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h4 className="title">No coding skills required</h4>
                                    <div className="text">There are many variations of simply free text passages of available but the majority</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h4 className="title">Great documentation</h4>
                                    <div className="text">There are many variations of simply free text passages of available but the majority</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h4 className="title">SEO optimized</h4>
                                    <div className="text">There are many variations of simply free text passages of available but the majority</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-7 col-lg-6">
                            <div className="inner-column wow fadeInRight" data-wow-delay="300ms">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={featureImg} alt="Feature Image" />
                                    </figure>
                                    <div className="caption-box">
                                        <h4 className="caption">We are standout experts <br />in digital agency</h4>
                                        <div className="icon-arrow4"></div>
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

export default FeaturesSectionSix;
