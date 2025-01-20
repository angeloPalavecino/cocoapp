import React, { useState } from 'react';
import FaqImage from '../../assets/images/resource/faq-1.jpg';

function FaqSection() {
    const [activeQuestion, setActiveQuestion] = useState(1);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <section className="faqs-section pt-0">
            <div className="icon-circle-lines"></div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="row">
                                <div className="sec-title">
                                    <span className="sub-title">Company features</span>
                                    <h2>Improve & Enhance your business with us</h2>
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
                                            <h4 className="text">Years <br /> Experience</h4>
                                        </div>
                                        <h5 className="title">Donec Quis felis Commodo</h5>
                                        <div className="text">
                                            Web designing in a powerful way of just not only professions.
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
                                    { question: "What happens to my data if I cancel?", answer: "Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We believe that a smart-looking website is the first impression on visitors." },
                                    { question: "What are the different types of technology solutions?", answer: "Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We believe that a smart-looking website is the first impression on visitors." },
                                    { question: "How often should I work on digital marketing?", answer: "Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We believe that a smart-looking website is the first impression on visitors." },
                                    { question: "Are social media good for business growth?", answer:"Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We believe that a smart-looking website is the first impression on visitors." },
                                ].map((faq, index) => (
                                    <li key={index} className={`accordion block ${activeQuestion === index ? 'active-block' : ''}`} onClick={() => toggleQuestion(index)}>
                                        <div className={`acc-btn ${activeQuestion === index ? 'active' : ''}`}>
                                            {faq.question}
                                            <div className="icon fa fa-plus"></div>
                                        </div>
                                        {activeQuestion === index && (
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text">{faq.answer}</div>
                                                </div>
                                            </div>
                                        )}
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

export default FaqSection;
