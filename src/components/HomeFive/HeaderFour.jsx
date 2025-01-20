import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo.png';
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
        <header className={`main-header header-style-five ${className}`}>
            {/* Header Lower */}
            <div className="header-lower">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/"><img src={logo1} alt="" title="" /></Link>
                        </div>
                    </div>

                    <div className="nav-outer">
                        {/* Navigation */}
                        <nav className="nav main-menu">
                            <Navigation />
                        </nav>
                    </div>

                    <div className="outer-box">
          <Link to="tel:+92(8800)9806" className="info-btn d-none d-lg-block">
            <i className="icon fa fa-phone"></i>
            <small>Call Anytime</small> + 88 ( 9800 ) 6802
          </Link>

          <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
        </div>
                </div>
            </div>
            </div>
            {/* End Header Lower */}

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-backdrop" onClick={closeMobileMenu} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <Link to="/"><img src={logo2} alt="" title="" /></Link>
                        </div>
                        <div className="close-btn" onClick={closeMobileMenu}>
                            <i className="icon fa fa-times" />
                        </div>
                    </div>
                    <MobileMenu />
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
                            <Link to="/"><img src={logo2} alt="Oitech" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <Navigation />
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sticky Header */}
        </header>
    );
}

export default Header;
