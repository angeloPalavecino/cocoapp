import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';

function Faq({ className }) {
    // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for accordion items
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const faqs = [
        {
            question: "How To Start Business Without Investment?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            question: "How to Get Your Business Report For Me?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            question: "Why should I hire a digital agency?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            question: "Designing in a powerful way of just not",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            question: "What happens to my data if I cancel?",
            answer: "Web designing in a powerful way of just not an only profession, however, a passion for our company. We tend to believe that the smart look of any website is the first impression on visitors."
        },
        {
            question: "What are the different types of technology solutions?",
            answer: "Web designing in a powerful way of just not an only profession, however, a passion for our company. We tend to believe that the smart look of any website is the first impression on visitors."
        },
        {
            question: "How often should I work on digital marketing?",
            answer: "Web designing in a powerful way of just not an only profession, however, a passion for our company. We tend to believe that the smart look of any website is the first impression on visitors."
        },
        {
            question: "Are social media good for business growth?",
            answer: "Web designing in a powerful way of just not an only profession, however, a passion for our company. We tend to believe that the smart look of any website is the first impression on visitors."
        },
    ];

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="FAQ"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/faq', title: 'FAQ' },
                ]}
            />
            <section className={`faqs-section ${className || ''}`}>
                <div className="anim-icons">
                    <span className="icon icon-flower"></span>
                    <span className="icon icon-chat"></span>
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-xl-6 col-lg-7">
                            <div className="inner-column">
                                <ul className="accordion-box wow fadeInRight">
                                    {faqs.slice(0, 4).map((faq, index) => (
                                        <li
                                            key={index}
                                            className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                        >
                                            <div
                                                className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                {faq.question}
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">{faq.answer}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="faq-column col-xl-6 col-lg-5">
                            <div className="inner-column">
                                <ul className="accordion-box wow fadeInRight">
                                    {faqs.slice(4).map((faq, index) => (
                                        <li
                                            key={index + 4} // Ensure a unique key for the second set of FAQs
                                            className={`accordion block ${activeIndex === index + 4 ? 'active-block' : ''}`}
                                        >
                                            <div
                                                className={`acc-btn ${activeIndex === index + 4 ? 'active' : ''}`}
                                                onClick={() => toggleAccordion(index + 4)}
                                            >
                                                {faq.question}
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${activeIndex === index + 4 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">{faq.answer}</div>
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
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Faq;
