import React from 'react';
import { Link } from 'react-router-dom';
import Feature1Image from '../../assets/images/resource/feature-1.jpg';
import Feature2Image from '../../assets/images/resource/feature-2.jpg';
import Feature3Image from '../../assets/images/resource/feature-3.jpg';

function FeaturesSectionThree() {
    const features = [
        {
            id: 1,
            image: Feature1Image,
            title: 'Gaming and entertainment',
            description: 'We have to a tendency to believe the idea',
            link: '/page-about',
            word: 'G',
        },
        {
            id: 2,
            image: Feature2Image,
            title: 'Business and finance',
            description: 'We have to a tendency to believe the idea',
            link: '/page-about',
            word: 'B',
            delay: '300ms',
        },
        {
            id: 3,
            image: Feature3Image,
            title: 'Information & technology',
            description: 'We have to a tendency to believe the idea',
            link: '/page-about',
            word: 'I',
            delay: '600ms',
        }
    ];

    return (
        <section className="features-section-three">
            <div className="bg bg-pattern-5"></div>
            <div className="large-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Company Features</span>
                    <h2>Improve & Enhance your <br />Business with us</h2>
                </div>
                <div className="row">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`feature-block-three col-lg-4 col-sm-6 wow fadeInUp`}
                            data-wow-delay={feature.delay || '0ms'}
                        >
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={feature.image} alt={feature.title} />
                                    </figure>
                                    <h4 className="word">{feature.word}</h4>
                                </div>
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link to={feature.link}>{feature.title}</Link>
                                    </h4>
                                    <div className="text">{feature.description}</div>
                                    <Link to={feature.link} className="read-more">
                                        <i className="icon fa fa-long-arrow-alt-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionThree;
