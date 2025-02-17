import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import Process1 from '../../assets/images/resource/process-1.jpg';
import Process2 from '../../assets/images/resource/process-2.jpg';
import Process3 from '../../assets/images/resource/process-3.jpg';

function ProcessSection({ className }) {
    return (
        <section className={`process-section pt-0 ${className || ''}`}>
            <div className="icon-lines-3 bounce-y"></div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Proceso de trabajo</span>
                    <h2>
                    Consulta nuestros pasos  <br /> del proceso de desarrollo
                    </h2>
                </div>
                <div className="outer-box">
                    <div className="row">
                        {/* Process Block 1 */}
                        <div className="process-block col-lg-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/about-us">
                                            <img src={Process1} alt="Business analysis" />
                                        </Link>
                                    </figure>
                                    <h4 className="count">01</h4>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/about-us">Analisis de negocios</Link>
                                    </h4>
                                    <div className="text">
                                        Explain to you how all this mistaken denouncing pleasure and praising pain was born
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process Block 2 */}
                        <div className="process-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/about-us">
                                            <img src={Process2} alt="Implementing & Testing" />
                                        </Link>
                                    </figure>
                                    <h4 className="count">02</h4>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/about-us">Implementing & Testing</Link>
                                     </h4>
                                    <div className="text">
                                        Explain to you how all this mistaken denouncing pleasure and praising pain was born
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process Block 3 */}
                        <div className="process-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/about-us">
                                            <img src={Process3} alt="Product Delivery" />
                                        </Link>
                                    </figure>
                                    <h4 className="count">03</h4>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to="/about-us">Product Delivery</Link>
                                    </h4>
                                    <div className="text">
                                        Explain to you how all this mistaken denouncing pleasure and praising pain was born
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

export default ProcessSection;
