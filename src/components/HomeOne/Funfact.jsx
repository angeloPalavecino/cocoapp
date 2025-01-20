import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx';

function FunfactSection({ className }) {
    // Define the values for each counter
    const projectCompleted = 450;
    const itSpecialists = 326;
    const satisfiedClients = 860;
    const smartSolutions = 238;

    return (
        <section className={`fun-fact-section ${className || ''}`}>
            <div className="bg bg-pattern-3"></div>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* Counter Block: Project Completed */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner">
                                <i className="icon flaticon-targeted-marketing"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={projectCompleted} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Project Completed</h6>
                            </div>
                        </div>

                        {/* Counter Block: IT Specialists */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon flaticon-diplomat"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={itSpecialists} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">IT Specialists</h6>
                            </div>
                        </div>

                        {/* Counter Block: Satisfied Clients */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon flaticon-recommend"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={satisfiedClients} time={3} />
                                    </span>
                                </div>
                                <h6 className="counter-title">Satisfied Clients</h6>
                            </div>
                        </div>

                        {/* Counter Block: Smart Solutions */}
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <i className="icon flaticon-technology"></i>
                                <div className="count-box">
                                    <span className="count-text">
                                        <CounterUp count={smartSolutions} time={3} />
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
