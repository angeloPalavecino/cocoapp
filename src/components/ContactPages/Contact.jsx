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
        title="Contact Us"
        breadcrumb={[
            { link: '/', title: 'Home' },
            { link: '/news-details', title: 'Contact' },
        ]}
     />
    <section className="contact-details">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-6">
                    <div className="sec-title">
                        <span className="sub-title">Send us email</span>
                        <h2>Feel free to write</h2>
                    </div>
                    <iframe 
                        width="640px" 
                        height="480px" 
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=qZTky462b0GGbJstczGfPcVsRXTCFRxPqmGqOCrOuQdUNFZWNzFBRUpORzhWRFE2TzZBTEtWUllTOC4u" 
                        frameBorder="0" 
                        style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="contact-details__right">
                        <div className="sec-title">
                            <span className="sub-title">Need any help?</span>
                            <h2>Get in touch with us</h2>
                            <div className="text">
                                hola  bore et dolore magna aliqua.
                            </div>
                        </div>
                        <ul className="list-unstyled contact-details__info">
                            <li>
                                <div className="icon">
                                    <span className="lnr-icon-phone-plus"></span>
                                </div>
                                <div className="text">
                                    <h6>Have any question?</h6>
                                    <a href="tel:980089850"><span>Free</span> +92 (020)-9850</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="lnr-icon-envelope1"></span>
                                </div>
                                <div className="text">
                                    <h6>Write email</h6>
                                    <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="lnr-icon-location"></span>
                                </div>
                                <div className="text">
                                    <h6>Visit anytime</h6>
                                    <span>66 broklyn golden street. New York</span>
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
