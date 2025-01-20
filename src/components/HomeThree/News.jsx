import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/resource/news-1.jpg';
import NewsImage2 from '../../assets/images/resource/news-2.jpg';
import NewsImage3 from '../../assets/images/resource/news-3.jpg';

function NewsSection() {
    return (
        <section id="news" className="news-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">From the Blog</span>
                    <h2>Check the latest news & <br />articles updates</h2>
                </div>
                <div className="row">
                    {/* News Block 1 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={NewsImage1} alt="News 1" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title">
                                    <Link to="/news-details">Professional technology and information solutions…</Link>
                                </h4>
                                <div className="text">Had cattle there form heston from there and years dry canyon.</div>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* News Block 2 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={NewsImage2} alt="News 2" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title">
                                    <Link to="/news-details">Professional technology and information solutions…</Link>
                                </h4>
                                <div className="text">Had cattle there form heston from there and years dry canyon.</div>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* News Block 3 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link to="/news-details">
                                        <img src={NewsImage3} alt="News 3" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title">
                                    <Link to="/news-details">Professional technology and information solutions…</Link>
                                </h4>
                                <div className="text">Had cattle there form heston from there and years dry canyon.</div>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
