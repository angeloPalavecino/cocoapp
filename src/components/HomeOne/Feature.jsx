import React from 'react';
import { Link } from 'react-router-dom';

function Feature({ className }) {
    return (
        <section className={`features-section ${className || ''}`}>
            <div className="bg bg-pattern-2"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <div className="sec-title light text-gradient">
                                <span className="sub-title">Áreas de trabajo</span>
                                <h2>Servicios tecnologicos<br />  personalizados</h2>
                                <div className="text">
                                    Reduce la burocracia organizacional y empodera a los autores claves de cada sistema 
                                </div>
                            </div>
                            <Link to="/about-us" className="theme-btn btn-style-one">
                                <span className="btn-title">Descubre mas</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Features Column */}
                    <div className="features-column col-lg-6 wow fadeInRight">
                        <div className="inner-column">
                            <div className="row">
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-globe"></i>
                                        <h5 className="title">Microsoft 365</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fab fa-android"></i>
                                        <h5 className="title">Power Platform</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-tv-alt"></i>
                                        <h5 className="title">Desarrollos Web</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-pen-ruler"></i>
                                        <h5 className="title">Diseño</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-lightbulb"></i>
                                        <h5 className="title">Consultoria</h5>
                                    </div>
                                </div>
                                
                                {/* Feature Block */}
                                <div className="feature-block col-lg-6 col-md-4 col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon fa fa-brain-circuit"></i>
                                        <h5 className="title">Soluciones</h5>
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

export default Feature;
