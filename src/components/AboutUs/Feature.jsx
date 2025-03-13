import React from 'react';
import FeatureImg2 from '../../assets/images/resource/img2.jpg';

function FeaturesSectionFour() {
    const features = [
        {
            id: 1,
            icon: 'flaticon-learning',
            title: 'Misión',
            text: 'Impulsar la excelencia en cada proyecto, garantizando soluciones innovadoras y personalizadas que no solo cumplen, sino que superan las expectativas de nuestros clientes.',
        },
        {
            id: 2,
            icon: 'flaticon-settings',
            title: 'Visión',
            text: 'Ser el aliado estratégico líder en consultoría, reconocido por nuestra capacidad de transformar desafíos en resultados tangibles y sostenibles.',
        },
        {
            id: 3,
            icon: 'flaticon-cloud',
            title: 'Valores',
            text: 'Enfoque cliente-céntrico Mejora continua Integridad',
        },
    ];

    return (
        <section className="features-section-four pt-0">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-3 col-md-12">
                            <div className="inner-column">
                                <h4 className="title">
                                Los pilares que<br />
                                     Nos definen
                                </h4>
                                <figure className="image">
                                    <img src={FeatureImg2} alt="We’re Ready" />
                                </figure>
                                <div className="icon-lines-7"></div>
                            </div>
                        </div>

                        {/* Feature Blocks */}
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="feature-block-four col-lg-3 col-md-4"
                            >
                                <div className="inner-box">
                                    <i className={`icon ${feature.icon}`}></i>
                                    <h5 className="title">{feature.title}</h5>
                                    <div className="text">{feature.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionFour;
