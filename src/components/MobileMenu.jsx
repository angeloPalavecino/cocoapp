import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    // Handle main dropdown click
    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key ? { status: false, key: "" } : { status: true, key }
        );
    };

    // Handle sub-dropdown click
    const handleSubClick = (key) => {
        setSubIsActive((prevState) =>
            prevState.key === key ? { status: false, key: "" } : { status: true, key }
        );
    };

    return (
        <ul className="navigation">
            {/* Home Section */}
            <li className="current dropdown">
                <Link to="/">Home</Link>
                <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                    <li><Link to="/">Home 01</Link></li>
                    <li><Link to="/home-two">Home 02</Link></li>
                    <li className="dropdown">
                        <Link to="#">New Home</Link>
                        <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                            <li><Link to="/home-three">Home 03</Link></li>
                            <li><Link to="/home-four">Home 04</Link></li>
                            <li><Link to="/home-five">Home 05</Link></li>
                            <li><Link to="/home-six">Home 06</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(1)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Single Styles</Link>
                        <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                            <li><Link to="/home-one-single">Single Style One</Link></li>
                            <li><Link to="/home-two-single">Single Style Two</Link></li>
                            <li><Link to="/home-three-single">Single Style Three</Link></li>
                            <li><Link to="/home-four-single">Single Style Four</Link></li>
                            <li><Link to="/home-five-single">Single Style Five</Link></li>
                            <li><Link to="/home-six-single">Single Style Six</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(2)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Header Styles</Link>
                        <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                            <li><Link to="/">Header Style One</Link></li>
                            <li><Link to="/home-two">Header Style Two</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(3)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div
                    className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => handleClick(1)}
                >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            {/* Pages Section */}
            <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                    <li><Link to="/about-us">About</Link></li>
                    <li className="dropdown">
                        <Link to="#">Projects</Link>
                        <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
                            <li><Link to="/projects">Projects List</Link></li>
                            <li><Link to="/projects-details">Project Details</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(4)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Team</Link>
                        <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                            <li><Link to="/team">Team List</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(5)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li><Link to="/contact-pages">Contact</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li className="dropdown">
                        <Link to="#">Shop</Link>
                        <ul className={isSubActive.key === 6 ? "d-block" : "d-none"}>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/products-sidebar">Products with Sidebar</Link></li>
                            <li><Link to="/products-details">Product Details</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                        </ul>
                        <div
                            className={isSubActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"}
                            onClick={() => handleSubClick(6)}
                        >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/404">Page 404</Link></li>
                </ul>
                <div
                    className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => handleClick(2)}
                >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>

            {/* Additional Sections */}
            <li className="dropdown">
                <Link to="#">Services</Link>
                <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                    <li><Link to="/services">Services List</Link></li>
                    <li><Link to="/service-details">Service Details</Link></li>
                </ul>
                <div
                    className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => handleClick(3)}
                >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">News</Link>
                <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                    <li><Link to="/news">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
                <div
                    className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"}
                    onClick={() => handleClick(4)}
                >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li><Link to="/contact-pages">Contact</Link></li>
        </ul>
    );
};

export default MobileMenu;
