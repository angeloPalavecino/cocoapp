import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import News1 from '../../assets/images/resource/news-1.jpg';
import News2 from '../../assets/images/resource/news-2.jpg';
import News3 from '../../assets/images/resource/news-3.jpg';

function BlogHomeOne({ className }) {
    return (
        <section id="news" className={`news-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">From the Blog </span>
                    <h2>Check the latest news & <br />articles updates</h2>
                </div>

                <div className="row">
                    {/* News Block 1 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src={News1} alt="News" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Professional technology and information solutions…</Link></h4>
                                <div className="text">Had cattle there form heston from there and years dry canyon.</div>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* News Block 2 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src={News2} alt="News" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Professional technology and information solutions…</Link></h4>
                                <div className="text">Had cattle there form heston from there and years dry canyon.</div>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* News Block 3 */}
                    <div className="news-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src={News3} alt="News" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h6 className="date">30 <br />May</h6>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> by Admin</li>
                                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Professional technology and information solutions…</Link></h4>
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

export default BlogHomeOne;
