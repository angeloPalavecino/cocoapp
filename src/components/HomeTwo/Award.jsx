import React from 'react';
import img1 from '../../assets/images/resource/award-1.png';
import img2 from '../../assets/images/resource/award-2.png';
import img3 from '../../assets/images/resource/award-3.png';

function AwardSection() {
    return (
        <section className="award-section">
            <div className="bg-award"></div>
            <div className="auto-container">
                <div className="row"> 
                    {/* Content Column */}
                    <div className="content-column col-lg-6 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="sec-title light text-gradient">
                                <span className="sub-title">Awards</span>
                                <h2>Company awards & <br />achievements</h2>
                            </div>
                            <div className="bottom-box">
                                <div className="text">
                                    Lorem ipsum dolor scaccumsan proin phasell tibulum massa tellus morbi magna
                                </div>
                                <ul className="list-style-three light">
                                    <li><i className="icon fa fa-check"></i>High Marketing Solution</li>
                                    <li><i className="icon fa fa-check"></i>High Success Rate</li>
                                    <li><i className="icon fa fa-check"></i>We grow business</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="right-column col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="row"> 
                                {/* Award Block */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2018 <br />Award</div>
                                        <img src={img1} alt="Award 1" />
                                        <h6 className="title">Best <br />Consulting</h6>
                                    </div>
                                </div>

                                {/* Award Block */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2020 <br />Award</div>
                                        <img src={img2} alt="Award 2" />
                                        <h6 className="title">Best <br />Brand</h6>
                                    </div>
                                </div>

                                {/* Award Block */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2011 <br />Award</div>
                                        <img src={img3} alt="Award 3" />
                                        <h6 className="title">Star of the <br />year</h6>
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

export default AwardSection;
