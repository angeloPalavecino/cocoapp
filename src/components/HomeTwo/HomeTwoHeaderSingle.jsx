import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu.jsx';
import SingleMenu from '../SingleMenu.jsx';

function HomeTwoHeader({
    action,
    className = '',
    scroll = false
}) {
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
            <header className={`main-header header-style-two ${className}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link to="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="feature-list">
                                <li><Link to="#">Help</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                            <ul className="social-icon-one">
                                <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-facebook"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                <li><Link to="#"><span className="fab fa-instagram"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                 </div>

                {/* Header Lower */}
                <div className="header-lower">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <div className="logo-1"><Link href="/"><img src={logo2} alt="" title="Instec"/></Link></div>
                                <div className="logo-2"><Link href="/"><img src={logo1} alt="" title="Instec"/></Link></div>
                            </div>
                        </div>
                        <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}> <span className="icon lnr lnr-icon-search"></span> </button>
                        <button className="ui-btn ui-btn cart-btn"> <span className="icon lnr lnr-icon-cart"></span> </button>
                        <span className="divider"></span>

                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <SingleMenu />
                            </nav>
                        </div>
                        <div className="outer-box">
                            <Link href="tel:+92(9800)6802" className="info-btn"> <i className="icon fa fa-phone"></i> <small>Call Anytime</small> <strong>+56 965091286</strong> </Link>
                           
                            <div className="btn-box"> <Link href="/contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">Get Solution</span></Link> </div>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
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
                                <Link to="/"><img src={logo2} alt="Amiso" title="Amiso" /></Link>
                            </div>
                            <div className="close-btn" onClick={closeMobileMenu}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <SingleMenu />
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
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link to="/"><img src={logo2} alt="" /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                    <SingleMenu />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={(e) => action(e)}>
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HomeTwoHeader;
