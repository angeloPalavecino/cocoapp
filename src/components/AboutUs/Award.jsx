import React from 'react';

// Importing images
import Award1 from '../../assets/images/resource/award-1.png';
import Award2 from '../../assets/images/resource/award-2.png';
import Award3 from '../../assets/images/resource/award-3.png';

function AwardSection({ className }) {
    return (
        <div className={`award-section ${className || ''}`}>
            <div className="bg-award"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 wow fadeInLeft">
                        <div className="inner-column">
                            <div className="sec-title light text-gradient">
                                <span className="sub-title">Reconocimientos</span>
                                <h2>
                                    Premios Internos & <br /> Logros
                                </h2>
                            </div>
                            <div className="bottom-box">
                                <div className="text">
                                    Los Esfuerzos son muy valiosos para Nosotros y queremos compartirlos con ustedes
                                </div>
                                <ul className="list-style-three light">
                                    <li><i className="icon fa fa-check"></i>Partner Oficial en Microsoft Market place</li>
                                    <li><i className="icon fa fa-check"></i>5 Nuevas Certificaciones en menos del primer trimestre 2025</li>
                                    <li><i className="icon fa fa-check"></i>Authorized Microsoft Reseller.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="right-column col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="row">
                                {/* Award Block 1 */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2022 <br />Martin R.</div>
                                        <img src={Award1} alt="Best Consulting" />
                                        <h6 className="title">
                                            Mejor <br /> Capacitador
                                        </h6>
                                    </div>
                                </div>
                                {/* Award Block 2 */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2023 <br />Angelo P. </div>
                                        <img src={Award2} alt="Best Brand" />
                                        <h6 className="title">
                                            Mejor <br /> Programador
                                        </h6>
                                    </div>
                                </div>
                                {/* Award Block 3 */}
                                <div className="award-block col-lg-4 col-sm-6">
                                    <div className="inner-box">
                                        <div className="date">2024 <br /> Diego Z.</div>
                                        <img src={Award3} alt="Star of the Year" />
                                        <h6 className="title">
                                            Experto PowerPlatform <br /> del Año
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwardSection;
