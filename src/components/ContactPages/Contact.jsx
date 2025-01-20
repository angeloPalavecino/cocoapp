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
                                Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua.
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
    <section>
        <div className="container-fluid p-0">
            <div className="row">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd" 
                     
                    width="100%" 
                    height="500" 
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </section>
        <FooterHomeOne />
        <BackToTop />
        </>
    );
}

export default Contact;
