import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function Header({ action, className = '', scroll = false }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);

    useEffect(() => {
        StickyMenu();
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
        <>
            <header className={`main-header header-style-three ${className}`}>
                {/* Header Top */}
                <div className="header-top d-none d-lg-flex">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link to ="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="useful-links d-flex">
                                <li><Link to ="#">Help</Link></li>
                                <li><Link to ="#">Support</Link></li>
                                <li><Link to ="#">Contact</Link></li>
                            </ul>
                            <div className="outer-box">
                                <ul className="social-icon-one ms-2">
                                    <li><Link to ="#"><span className="fab fa-twitter"></span></Link></li>
                                    <li><Link to ="#"><span className="fab fa-facebook-square"></span></Link></li>
                                    <li><Link to ="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                    <li><Link to ="#"><span className="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Lower */}
                <div className="header-lower">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link to="/"><img src={logo2} alt="Instec" title="Instec" /></Link>
                            </div>
                        </div>
                        <div className="nav-outer d-block d-lg-flex">
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                            <div className="outer-box">
                                <div className="ui-btn-outer d-none d-xl-flex">
                                    <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                                        <span className="icon lnr lnr-icon-search"></span>
                                    </button>
                                    <Link to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
                                </div>
                                <Link to ="tel:+92(8800)9806" className="info-btn d-none d-xl-flex">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Call Anytime</small>+92 (8800) 9806
                                </Link>
                                <Link to="/contact" className="theme-btn btn-style-one d-none d-lg-block"><span className="btn-title">Get Solution</span></Link>
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <span className="icon lnr-icon-bars"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="menu-backdrop" onClick={closeMobileMenu} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link to="/"><img src={logo2} alt="Instec" title="Instec" /></Link>
                            </div>
                            <div className="close-btn" onClick={closeMobileMenu}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <MobileMenu />
                    </nav>
                </div>

                {/* Search Popup */}
                <div className={`search-popup ${isSearchPopupOpen ? 'open' : ''}`}>
                    <span className="search-back-drop" onClick={closeSearchPopup}></span>
                    <button className="close-search" onClick={closeSearchPopup}><span className="fa fa-times"></span></button>
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
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link to="/" title=""><img src={logo2} alt="Instec" title="Instec" /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Navigation />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
