import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo-2.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyHeader from '../../lib/StickyMenu';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

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
        <header className={`main-header header-style-four ${className}`}>
            {/* Header Top */}
            <div className="header-top d-none d-md-block">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="social-icon-one">
                                <li><Link to ="#"><span className="fab fa-twitter"></span></Link></li>
                                <li><Link to ="#"><span className="fab fa-facebook-square"></span></Link></li>
                                <li><Link to ="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                <li><Link to ="#"><span className="fab fa-instagram"></span></Link></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope"></i> <Link to ="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street, New York</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Lower */}
            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link to="/"><img src={logo1} alt="" title="" /></Link>
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Navigation />
                            </nav>
                            <div className="outer-box">
                                <div className="ui-btn-outer border-0 p-0 d-none d-lg-flex">
                                    <button className="ui-btn ui-btn search-btn me-2" onClick={toggleSearchPopup}>
                                        <span className="icon lnr lnr-icon-search"></span>
                                    </button>
                                    <Link to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
                                </div>
                                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                    <span className="icon lnr-icon-bars"></span>
                                </div>
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
                            <Link to="/"><img src={logo2} alt="" title="" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times"></i>
                        </div>
                    </div>
                    <MobileMenu />
                </nav>
            </div>

            {/* Header Search */}
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
            <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link to="/"><img src={logo2} alt="Oitech" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
