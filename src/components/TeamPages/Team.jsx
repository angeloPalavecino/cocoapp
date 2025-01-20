import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';
import TeamImg4 from '../../assets/images/resource/team-4.jpg';

function Team() {
    return (
        <section className="team-section bg-light">
            <div className="auto-container">
                <div className="row">
                    {/* Team block */}
                    <div className="team-block col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg1} alt="Jessica Brown" />
                                    </Link>
                                </figure>
                                <div className="info-box">
                                    <h4 className="name">
                                        <Link to="/team-details">Jessica Brown</Link>
                                    </h4>
                                    <span className="designation">Manager</span>
                                    <div className="social-links">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg2} alt="Kevin Martin" />
                                    </Link>
                                </figure>
                                <div className="info-box">
                                    <h4 className="name">
                                        <Link to="/team-details">Kevin Martin</Link>
                                    </h4>
                                    <span className="designation">Manager</span>
                                    <div className="social-links">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg3} alt="Christine Eve" />
                                    </Link>
                                </figure>
                                <div className="info-box">
                                    <h4 className="name">
                                        <Link to="/team-details">Christine Eve</Link>
                                    </h4>
                                    <span className="designation">Manager</span>
                                    <div className="social-links">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team block */}
                    <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/team-details">
                                        <img src={TeamImg4} alt="David Smith" />
                                    </Link>
                                </figure>
                                <div className="info-box">
                                    <h4 className="name">
                                        <Link to="/team-details">David Smith</Link>
                                    </h4>
                                    <span className="designation">Manager</span>
                                    <div className="social-links">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
