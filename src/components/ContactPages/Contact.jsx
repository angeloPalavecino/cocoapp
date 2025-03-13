import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';

function Contact() {
    return (
        <>
        <HomeOneHeader />
        <HeroPageTitle
        title="Contacte Nos"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/news-details', title: 'Contacto' },
        ]}
     />
    <section className="contact-details">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-6">
                    <div className="sec-title">
                        <span className="sub-title">Envienos un correo</span>
                        <h2>Sientase libre de escribir...</h2>
                    </div>
                    <iframe 
                        width="640px" 
                        height="680px" 
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=qZTky462b0GGbJstczGfPcVsRXTCFRxPqmGqOCrOuQdUMTAxSzY2U1IzT0VYQllGWkxXWVQzS1hIQi4u&embed=true" 
                        frameBorder="0" 
                        style={{ border: 'none', maxWidth: '100%', maxHeight: '100%' }} 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="contact-details__right">
                        <div className="sec-title">
                            <span className="sub-title">Necesitas ayuda?</span>
                            <h2>Ponte en contacto con Nosotros</h2>
                            <div className="text">
                                
                            </div>
                        </div>
                        <ul className="list-unstyled contact-details__info">
                            <li>
                                <div className="icon">
                                    <span className="lnr-icon-phone-plus"></span>
                                </div>
                                <div className="text">
                                    <h6>Alguna pregunta?</h6>
                                    <a href="tel:+56965091286"> +56965091286</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="lnr-icon-envelope1"></span>
                                </div>
                                <div className="text">
                                    <h6>Un correo y responderemos a la brevedad</h6>
                                    <a href="mailto:contacto@cocoappsolutions.com">contacto@cocoappsolutions.com</a>
                                </div>
                            </li>
                        </ul>
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

export default Contact;
