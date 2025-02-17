import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from '../../assets/images/resource/about-1.jpg';
import aboutImage2 from '../../assets/images/resource/about-2.jpg';
import aboutThumb from '../../assets/images/resource/about1-thumb.jpg';
import iconCircleText from '../../assets/images/icons/icon-circle-text.png';
import ProgressBar2 from '../../lib/ProgressBar2';

function AboutHomeOne({ className }) {
    const percentage = 78;
    return (
        <section id="about" className={`about-section ${className || ''}`}>
            <div className="icon-about-1"></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Sobre Nosotros</span>
                                    <h2>Somos tu aliado digital <br />potenciamos tu organización con soluciones concretas</h2>
                                </div>
                                <div className="title-box">
                                    <h4 className="title">Haciendo la solución tecnológica más sencilla para ti.</h4>
                                    <div className="text">
                                    Desde notificaciones regulares hasta la implementación de sistemas complejos, podemos aplicar nuestro conocimiento en tecnologías Microsoft e integrarlo con desarrollos personalizados.
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="row">
                                        <div className="about-block col-sm-6">
                                            <div className="inner">
                                                <i className="icon flaticon-laptop"></i>
                                                <h4 className="title">Aplicaciones  <br />Flujos de trabajo  Dashboard Interactivos</h4>
                                            </div>
                                        </div>
                                        <div className="about-block col-sm-6">
                                            <div className="inner">
                                                <i className="icon flaticon-technology"></i>
                                                <h4 className="title">Intranet <br /> Desarrollos Integraciones</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Skills */}
                                <div className="bottom-box">
                                    <div className="author-box">
                                        <img src={aboutThumb} alt="Image" />
                                        <div className="info">
                                            <h4 className="name">Constanza Vega</h4>
                                            <div className="designation">Directora de Finanzas</div>
                                        </div>
                                    </div>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Quiero saber mas</span>
                                    </Link>
                                </div>
                                <div className="team-details__bottom-right ms-0 mb-30">
                                    <div className="team-details__progress home-style">
                                        <ProgressBar2 title="Ganacias" targetPercentage={99} />
                                    </div>
                                </div>
                                <div className="bottom-box">
                                    <div className="author-box">
                                        <img src={aboutThumb} alt="Image" />
                                        <div className="info">
                                            <h4 className="name">Martin Riaño</h4>
                                            <div className="designation">Director de Éxito Operacional</div>
                                        </div>
                                    </div>
                                    <Link to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">Quiero saber mas</span>
                                    </Link>
                                </div>
                                <div className="team-details__bottom-right ms-0 mb-30">
                                    <div className="team-details__progress home-style">
                                        <ProgressBar2 title="Tecnologia" targetPercentage={99} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image-1 overlay-anim wow fadeInUp">
                                        <img src={aboutImage1} alt="Image" />
                                    </figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight">
                                        <img src={aboutImage2} alt="Image" />
                                    </figure>
                                    <div className="icon-dots-4"></div>
                                    <div className="circle-text">
                                        <img src={iconCircleText} alt="" />
                                        <h2 className="word">IT</h2>
                                    </div>
                                    <div className="exp-box">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <i className="icon flaticon-recommend"></i>
                                                <span className="count">+10</span>
                                            </div>
                                            <h6 className="title">años de Experiencia</h6>
                                        </div>
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

export default AboutHomeOne;
