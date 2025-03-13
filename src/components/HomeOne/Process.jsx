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
                    <h2>Consulta nuestros pasos<br/>para un proceso de implementación éxitoso</h2>
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
                                        <Link to="/about-us">Design Thinking</Link>
                                    </h4>
                                    <div className="text">
                                    🔹 Identificamos necesidades y objetivos.<br/>
                                    🔹 Diseñamos la mejor estrategia tecnológica.
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
                                        <Link to="/about-us">Hybrid Agile</Link>
                                    </h4>
                                    <div className="text">
                                    🔹 Desarrollamos y configuramos la solución. <br/>
                                    🔹 Realizamos pruebas para garantizar su funcionamiento óptimo.
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
                                        <Link to="/about-us">Success by Design </Link>
                                    </h4>
                                    <div className="text">
                                    🔹 Desplegamos la solución final.<br/>
                                    🔹 Brindamos soporte y optimización continua.
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
