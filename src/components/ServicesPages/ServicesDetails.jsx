import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import ServiceDetailsImage from '../../assets/images/resource/service-details.jpg';
import ServiceImage1 from '../../assets/images/resource/service-d1.jpg';
import ServiceImage2 from '../../assets/images/resource/service-d2.jpg';

function ServicesDetails() {
    const [showQues, setQues] = useState(1);
    const [selectedService, setSelectedService] = useState('copilot-ia');
    
    const servicesConfig = {
        'copilot-ia': {
            title: "Implementación de Copilot IA",
            overview: "Integración avanzada de inteligencia artificial en tus procesos empresariales usando Microsoft Copilot. Automatización de flujos de trabajo, análisis predictivo y asistencia virtual inteligente para toma de decisiones estratégicas.",
            features: [
                "Automatización de procesos con AI",
                "Análisis predictivo de datos",
                "Asistente virtual inteligente 24/7"
            ],
            faqs: [
                {
                    question: "¿Cómo integra Copilot con nuestros sistemas existentes?",
                    answer: "Realizamos un análisis personalizado y adaptamos la solución para integración perfecta con tus sistemas actuales."
                },
                {
                    question: "¿Qué tipos de procesos pueden automatizarse?",
                    answer: "Desde atención al cliente hasta análisis de datos complejos, diseñamos soluciones a medida."
                }
            ],
            serviceDetailsImage: ServiceDetailsImage,
            images: [ServiceImage1, ServiceImage2]
        },
        'powerplatform': {
            title: "Desarrollo con Power Platform",
            overview: "Creación de aplicaciones empresariales low-code con Power Apps, automatización de procesos con Power Automate y análisis de datos en tiempo real con Power BI. Soluciones escalables y personalizadas para tu organización.",
            features: [
                "Desarrollo low-code de aplicaciones",
                "Automatización de flujos de trabajo",
                "Dashboards interactivos con Power BI"
            ],
            faqs: [
                {
                    question: "¿Necesitamos conocimientos técnicos para usar Power Platform?",
                    answer: "Nuestro equipo capacita a tus colaboradores para maximizar el potencial de las herramientas low-code."
                }
            ],
            serviceDetailsImage: ServiceDetailsImage,
            images: [ServiceImage1, ServiceImage2]
        },
        'sharepoint': {
            title: "Gestión Documental con SharePoint",
            overview: "Implementación de portales corporativos y sistemas de gestión documental avanzados. Colaboración eficiente, workflows personalizados y seguridad de información crítica.",
            features: [
                "Portales intranet personalizados",
                "Gestión de documentos versiónada",
                "Integración con Microsoft 365"
            ],
            faqs: [
                {
                    question: "¿Cómo garantizan la seguridad en SharePoint?",
                    answer: "Implementamos permisos granulares, cifrado de datos y auditorías de acceso."
                }
            ],
            serviceDetailsImage: ServiceDetailsImage,
            images: [ServiceImage1, ServiceImage2]
        },
        'microsoft365': {
            title: "Migración a Microsoft 365",
            overview: "Transición segura a la nube con implementación completa de Microsoft 365. Optimización de licencias, formación de usuarios y soporte técnico especializado.",
            features: [
                "Migración guiada sin pérdida de datos",
                "Optimización de licencias Enterprise",
                "Soporte técnico 24/7"
            ],
            faqs: [
                {
                    question: "¿Qué aplicaciones incluye la implementación?",
                    answer: "Teams, Exchange Online, OneDrive, SharePoint y todo el ecosistema Microsoft 365."
                }
            ],
            serviceDetailsImage: ServiceDetailsImage,
            images: [ServiceImage1, ServiceImage2]
        }
    };

    const currentService = servicesConfig[selectedService];

    const handleSelectService = (serviceId) => {
        setSelectedService(serviceId);
        setQues(1);
    };

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Detalles de Consultoria"
                breadcrumb={[
                    { link: '/', title: 'Inicio' },
                    { link: '/service-details', title: 'Consultoría Especializada' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        {/* Menú Lateral */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="sidebar-service-list">
                                        <ul>
                                            {Object.keys(servicesConfig).map((serviceId) => (
                                                <li 
                                                    key={serviceId} 
                                                    className={selectedService === serviceId ? 'current' : ''}
                                                >
                                                    <Link 
                                                        to="#" 
                                                        className="service-link"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleSelectService(serviceId);
                                                        }}
                                                    >
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>{servicesConfig[serviceId].title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="service-details-help">
                                        <div className="help-shape-1"></div>
                                        <div className="help-shape-2"></div>
                                        <h2 className="help-title">
                                            Contacta Nosotros<br />
                                            <span>Resolveremos tus dudas</span>
                                        </h2>
                                        <div className="help-icon">
                                            <span className="lnr-icon-phone-handset"></span>
                                        </div>
                                        <div className="help-contact">
                                            <p>¿Necesitas ayuda inmediata?</p>
                                            <Link to="tel:+56965091286" className="phone-link">
                                                +56 9 6509 1286
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget service-sidebar-single mt-4">
                                        <div className="service-sidebar-single-btn wow fadeInUp">
                                            <Link 
                                                to="#" 
                                                className="theme-btn btn-style-one d-grid"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="btn-title">
                                                    <span className="fas fa-file-pdf"></span> 
                                                    Descargar Catálogo
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contenido Principal Corregido */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src={currentService.serviceDetailsImage} alt="Service Details" />
                                <h3 className="mt-4">{currentService.title}</h3>
                                <p>{currentService.overview}</p>
                                
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>Características Clave</h3>
                                        <ul className="feature-list mb-4">
                                            {currentService.features.map((feature, index) => (
                                                <li key={index} className="d-flex align-items-center mb-2">
                                                    <i className="fas fa-check-circle text-primary me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="feature-list mt-4">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img 
                                                    className="mb-3" 
                                                    src={currentService.images[0]} 
                                                    alt="Implementación" 
                                                />
                                                <p>Soluciones personalizadas adaptadas a tus necesidades específicas y presupuesto.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img 
                                                    className="mb-3" 
                                                    src={currentService.images[1]} 
                                                    alt="Soporte técnico" 
                                                />
                                                <p>Soporte especializado durante y después de la implementación.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-25">
                                    <h3>Preguntas Frecuentes</h3>
                                    <ul className="accordion-box wow fadeInRight">
                                        {currentService.faqs.map((faq, index) => (
                                            <li 
                                                key={index} 
                                                className={`accordion block ${showQues === index + 1 ? 'active-block' : ''}`} 
                                                onClick={() => setQues(index + 1)}
                                            >
                                                <div className={`acc-btn ${showQues === index + 1 ? 'active' : ''}`}>
                                                    {faq.question}
                                                    <div className="icon fa fa-plus"></div>
                                                </div>
                                                <div className={`acc-content ${showQues === index + 1 ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">{faq.answer}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ServicesDetails;