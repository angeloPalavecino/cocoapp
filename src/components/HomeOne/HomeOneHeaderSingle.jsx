import React, { useEffect, useState } from 'react';
import MainLogoBlack from '../../assets/images/logo.png';
import MainLogoWhite from '../../assets/images/logo.png';
import Stickylogo from '../../assets/images/logo.png';
import Mobilelogo from '../../assets/images/logo-2.png';
import StickyHeader from '../../lib/StickyMenu';
import { Link } from 'react-router-dom';
import SingleMenu from '../SingleMenu.jsx';

function Header({ className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        StickyHeader();
        const checkDarkMode = () => {
            const bodyHasDarkMode = document.body.classList.contains('dark-mode');
            setDarkMode(bodyHasDarkMode);
        };
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-visible');
        } else {
            document.body.classList.remove('mobile-menu-visible');
        }
        return () => document.body.classList.remove('mobile-menu-visible');
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);
    const toggleSearchPopup = () => {
        setSearchPopupOpen(prev => !prev);
        document.body.classList.toggle('moblie-search-active', !isSearchPopupOpen);
    };

    const closeSearchPopup = () => {
        setSearchPopupOpen(false);
        document.body.classList.remove('moblie-search-active');
    };

    return (
        <header className={`main-header header-style-one ${className}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="inner-container">
                    <div className="top-left">
                        <ul className="list-style-one">
                            <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                            <li><i className="fa fa-envelope"></i> <a href="#" className="mailto:needhelp@company.com">needhelp@company.com</a></li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <ul className="social-icon-one">
                            <li><a href="#"><i className="icon fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="icon fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="icon fab fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="icon fab fa-instagram"></i></a></li>
                        </ul>
                        <ul className="useful-links">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Header Lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img src={isDarkMode ? MainLogoWhite : MainLogoBlack} alt="Instec" title="Instec" />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <SingleMenu />
                        </nav>
                    </div>
                    <div className="outer-box">
                        <Link href="tel:+92(8800)9806" className="info-btn">
                            <i className="icon fa fa-comments"></i>
                            <small>Call Anytime</small>
                            <strong>+56 965091286</strong>
                        </Link>
                        <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}><span className="icon lnr lnr-icon-search"></span></button>
                        <Link to="#" className="ui-btn"><i className="lnr-icon-shopping-cart" /></Link>
                        <div onClick={toggleMobileMenu} className="mobile-nav-toggler">
                            <span className="icon lnr-icon-bars" />
                        </div>
                    </div>
                    <div className="btn-box"> <Link href="page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More</span></Link> </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={Mobilelogo} alt="Instec" title="Instec" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <SingleMenu />
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <Link to="tel:+92880098670">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <Link to="mailto:help@company.com">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock" />
                                <span className="title">Opening Hours</span>Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>

            {/* Search Popup */}
            <div className={`search-popup ${isSearchPopupOpen ? 'open' : ''}`}>
                <span className="search-back-drop" onClick={closeSearchPopup}></span>
                <button className="close-search" onClick={closeSearchPopup}><span className="fa fa-times" ></span></button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Sticky Header */}
            <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/"><img src={Stickylogo} alt="Instec" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                <SingleMenu />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
