import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/images/resource/cta-1.jpg';

function CallToAction({ className }) {
    return (
        <section className={`call-to-action ${className || ''}`}>
            <div className="icon-lines-5"></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="image">
                        <img src={BackgroundImage} alt="Call to Action" />
                    </div>
                    <div className="sec-title">
                        <i className="icon flaticon-laptop"></i>
                        <h3 className="title">We’re Ready to Develop Your Site!</h3>
                    </div>
                    <Link to="/about-us" className="theme-btn btn-style-one dark-bg">
                        <span className="btn-title">Discover More</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
