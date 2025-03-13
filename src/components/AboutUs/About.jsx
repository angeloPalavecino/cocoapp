import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from '../../assets/images/resource/about-1.jpg';
import aboutImage2 from '../../assets/images/resource/about-2.jpg';
import aboutThumb from '../../assets/images/resource/about1-thumb.jpg';
import iconCircleText from '../../assets/images/icons/icon-circle-text.png';

function AboutHomeOne({ className }) {
    const percentage = 78;

    return (
        <section className={`about-section ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Nosotros</span>
                                    <h2>Somos expertos en soluciones  <br /> que superan expectativas.</h2>
                                </div>
                                <div className="title-box">
                                    <h4 className="title">En pocas palabras…
                                    </h4>
                                    <div className="text">
                                        Nacimos en 2021 como un equipo apasionado por la consultoría de alto impacto. En 2023, nos consolidamos como empresa con un único objetivo: asegurar que cada solución que entregamos eleve la calidad de su negocio y lo acerque a sus metas. Para Nosotros, el éxito se mide por su satisfacción.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-5">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image-1 overlay-anim wow fadeInUp">
                                        <img src={aboutImage1} alt="About" />
                                    </figure>
                                    <figure className="image-2 overlay-anim wow fadeInRight">
                                        <img src={aboutImage2} alt="About" />
                                    </figure>
                                    <div className="icon-dots-4"></div>
                                    <div className="circle-text">
                                        <img src={iconCircleText} alt="Circle Text" />
                                        <h2 className="word">IT</h2>
                                    </div>
                                    <div className="exp-box">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <i className="icon flaticon-recommend"></i>
                                                <span className="count">+10</span>
                                            </div>
                                            <h6 className="title">Años de Experiencia de nuestros Colaboradores</h6>
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
