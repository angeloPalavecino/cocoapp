import React, { useState } from 'react';
import FaqImage from '../../assets/images/resource/faq-1.jpg';

function FaqsSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faqs-section">
            <div className="icon-circle-lines"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="row">
                                <div className="sec-title">
                                    <span className="sub-title">Company features</span>
                                    <h2>improve & enhance your business with us</h2>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="image-box">
                                        <figure className="image overlay-anim">
                                            <img src={FaqImage} alt="FAQ" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="exp-box">
                                        <div className="count-box">
                                            <span className="count">30+</span>
                                            <h4 className="text">
                                                Years <br />
                                                Experience
                                            </h4>
                                        </div>
                                        <h5 className="title">Donec Quis felis Commodo</h5>
                                        <div className="text">
                                            Web designing in a powerful way of just not an only profession
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Column */}
                    <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <ul className="accordion-box wow fadeInRight">
                                {/* FAQ Items */}
                                {[
                                    "What happens to my data if I cancel?",
                                    "What are the different types of technology solutions?",
                                    "How often should I work on digital marketing?",
                                    "Are social media good for business growth?",
                                ].map((question, index) => (
                                    <li
                                        key={index}
                                        className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                    >
                                        <div
                                            className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            {question}
                                            <div className="icon fa fa-plus"></div>
                                        </div>
                                        <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                            <div className="content">
                                                <div className="text">
                                                    Web designing in a powerful way of just not an only
                                                    professions, however, in a passion for our Company. We
                                                    have to a tendency to believe the idea that smart
                                                    looking of any website is the first impression on
                                                    visitors.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqsSection;
