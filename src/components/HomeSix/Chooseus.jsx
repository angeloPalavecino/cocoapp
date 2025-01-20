import React from 'react';

// Importing the image
import WhyUsImage from '../../assets/images/resource/why-us-1.jpg';

function WhyChooseUs({ className }) {
    return (
        <section className={`why-choose-us ${className || ''}`}>
            <div className="bg bg-pattern-8"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight">
                            <div className="info-outer">
                                <div className="info-box">
                                    <div className="inner">
                                        <i className="icon fa fa-check"></i>
                                        <h4 className="title">No coding skills required</h4>
                                        <div className="text">
                                            There are many variations of simply free text passages of leaning
                                        </div>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="inner">
                                        <i className="icon fa fa-check"></i>
                                        <h4 className="title">Great Documentation</h4>
                                        <div className="text">
                                            There are many variations of simply free text passages of leaning
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image-box">
                                <div className="content-box">
                                    <i className="icon flaticon-bank"></i>
                                    <h3 className="title">
                                        High Quality <br /> IT Solutions <br /> for Startup
                                    </h3>
                                </div>
                                <figure className="image overlay-anim">
                                    <img src={WhyUsImage} alt="High Quality IT Solutions" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
