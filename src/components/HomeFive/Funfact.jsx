import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';

function FunfactSection({ className }) {
    const countext = 450;
    const countext1 = 326;
    const countext2 = 860;
    const countext3 = 238;
    return (
        <section className={`fun-fact-section ${className || ''}`}>
            <div className="bg bg-pattern-3"></div>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter Block 1 */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner">
                                <i className="icon flaticon-targeted-marketing"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={countext} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Project Completed</h6>
                            </div>
                        </div>

                        {/* Counter Block 2 */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon flaticon-diplomat"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={countext1} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">IT Specialists</h6>
                            </div>
                        </div>

                        {/* Counter Block 3 */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon flaticon-recommend"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={countext2} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Satisfied Clients</h6>
                            </div>
                        </div>

                        {/* Counter Block 4 */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <i className="icon flaticon-technology"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={countext3} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Smart Solutions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunfactSection;
