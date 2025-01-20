import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';

function FunfactSectionTwo({ className }) {
    // Define the values for each counter
    const projectCompleted = 886;
    const satisfiedCustomers = 601;
    const repeatCustomers = 960;

    return (
        <section className={`fun-fact-section-two ${className || ''}`}>
            <div className="bg bg-pattern-9"></div>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter Info Block */}
                        <div className="counter-info-block col-xl-6 wow fadeInUp">
                            <div className="inner">
                                <div className="sec-title light text-gradient">
                                    <span className="sub-title">Funfacts</span>
                                    <h2>Creativity funfacts <br />in great numbers</h2>
                                </div>
                            </div>
                        </div>

                        {/* Counters */}
                        <div className="column col-xl-6">
                            <div className="row">
                                {/* Counter Block: Projects Completed */}
                                <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner">
                                        <i className="icon flaticon-targeted-marketing"></i>
                                        <div className="count-box">
                                            <span className="count-text">
                                                <CounterUp count={projectCompleted} time={3} />
                                            </span>
                                        </div>
                                        <h6 className="counter-title">Projects Completed</h6>
                                    </div>
                                </div>

                                {/* Counter Block: Satisfied Customers */}
                                <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                                    <div className="inner">
                                        <i className="icon flaticon-recommend"></i>
                                        <div className="count-box">
                                            <span className="count-text">
                                                <CounterUp count={satisfiedCustomers} time={3} />
                                            </span>
                                        </div>
                                        <h6 className="counter-title">Satisfied Customers</h6>
                                    </div>
                                </div>

                                {/* Counter Block: Repeat Customers */}
                                <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                                    <div className="inner">
                                        <i className="icon flaticon-technology"></i>
                                        <div className="count-box">
                                            <span className="count-text">
                                                <CounterUp count={repeatCustomers} time={3} />
                                            </span>
                                        </div>
                                        <h6 className="counter-title">Repeat Customers</h6>
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

export default FunfactSectionTwo;
