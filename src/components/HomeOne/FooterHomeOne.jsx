import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Portfolio1 from '../../assets/images/resource/gallery-thumb-1.jpg';
import Portfolio2 from '../../assets/images/resource/gallery-thumb-2.jpg';
import Portfolio3 from '../../assets/images/resource/gallery-thumb-3.jpg';
import Portfolio4 from '../../assets/images/resource/gallery-thumb-4.jpg';
import Portfolio5 from '../../assets/images/resource/gallery-thumb-5.jpg';
import Portfolio6 from '../../assets/images/resource/gallery-thumb-6.jpg';

function FooterHomeOne({ className }) {
    return (
        <footer className={`main-footer footer-style-one ${className || ''}`}>
            <div className="icon-dots-2"></div>
            
            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        
                        {/* Footer Column - About */}
                        <div className="footer-column col-xl-4 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="widget-content">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="text">
                                    Llegaste hasta aquí por una razón. No dejes que la oportunidad pase. Hablemos y llevemos tu negocio al siguiente nivel.
                                    </div>
                                    <ul className="social-icon-two">
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-whatsapp"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="#"><i class="fab fa-tiktok"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Column - Explore */}
                        <div className="footer-column col-xl-2 col-sm-6">
                            <div className="footer-widget links-widget">
                                <h5 className="widget-title">Explorar</h5>
                                <div className="widget-content">
                                    <ul className="user-links">
                                        <li><Link to="#">Nuestra empresa</Link></li>
                                        <li><Link to="#">Conoce al Equipo</Link></li>
                                        <li><Link to="#">Noticias y Medios</Link></li>
                                        <li><Link to="#">Nuestros Proyectos</Link></li>
                                        <li><Link to="/contact-pages">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Column - Contact */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h5 className="widget-title">Contacto</h5>
                                <div className="widget-content">
                                    <div className="text">El Llano Subercasoux OF 904 Comuna de San Miguel</div>
                                    <ul className="contact-list">
                                        <li className="contact-info">
                                            <i className="icon fa fa-envelope"></i>
                                            <Link to="mailto:needhelp@company.com">Contacto@cocoappsolutions.com</Link>
                                        </li>
                                        <li className="contact-info">
                                            <i className="icon fa fa-phone"></i>
                                            <Link to="tel:+926668880000">+56965091286</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Column - Gallery */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget gallery-widget">
                                <h5 className="widget-title">Projectos</h5>
                                <div className="widget-content">
                                    <div className="insta-gallery">
                                        {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((portfolio, index) => (
                                            <figure className="image" key={index}>
                                                <Link to="#"><img src={portfolio} alt={`Portfolio ${index + 1}`} /></Link>
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="copyright-text">
                        &copy; Copyright reserved by <Link to="/">kodesolution.com</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
