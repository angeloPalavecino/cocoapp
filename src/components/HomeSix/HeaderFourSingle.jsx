import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo-2.png';
import StickyMenu from '../../lib/StickyMenu.js';
import SingleMenu4 from '../SingleMenu4.jsx';

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
        <header className={`main-header header-style-six ${className}`}>
            {/* Header Lower */}
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/"><img src={logo1} alt="Instec" title="Instec" /></Link>
                        </div>
                        <button className="ui-btn ui-btn search-btn" onClick={toggleSearchPopup}>
                            <span className="icon lnr lnr-icon-search"></span>
                        </button>
                    </div>
                    <div className="nav-outer">
                        {/* Navigation */}
                        <nav className="nav main-menu">
                            <SingleMenu4 />
                        </nav>
                    </div>
                    <div className="outer-box">
                        <Link to="tel:+92(8800)9806" className="info-btn">
                            <i className="icon fa fa-phone"></i>
                            <strong className="text">+92 (8800) 6890</strong>
                        </Link>
                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
           
            {/* End Header Lower */}

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
                    <SingleMenu4 /> 
                </nav>
            </div>
            {/* End Mobile Menu */}
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
                            <Link to="/"><img src={logo2} alt="Instec" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                <SingleMenu4 />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
