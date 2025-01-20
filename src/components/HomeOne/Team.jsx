import React from 'react';
import { Link } from 'react-router-dom';

import TeamImage1 from '../../assets/images/resource/team-1.jpg';
import TeamImage2 from '../../assets/images/resource/team-2.jpg';
import TeamImage3 from '../../assets/images/resource/team-3.jpg';
import TeamImage4 from '../../assets/images/resource/team-4.jpg';

function TeamSection() {
  return (
    <section className="team-section">
      <div className="icon-lines-2"></div>
      <div className="auto-container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-7">
              <span className="sub-title">Our team members</span>
              <h2>Meet our professional <br /> team members</h2>
            </div>
            <div className="col-lg-5">
              <div className="text">
                Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have a tendency to believe looking impression on visitors.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Team Block 1 */}
          <div className="team-block col-lg-3 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link to="/team-details"><img src={TeamImage1} alt="Jessica Brown" /></Link>
                </figure>
                <div className="info-box">
                  <h4 className="name"><Link to="/team-details">Jessica Brown</Link></h4>
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

          {/* Team Block 2 */}
          <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link to="/team-details"><img src={TeamImage2} alt="Kevin Martin" /></Link>
                </figure>
                <div className="info-box">
                  <h4 className="name"><Link to="/team-details">Kevin Martin</Link></h4>
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

          {/* Team Block 3 */}
          <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link to="/team-details"><img src={TeamImage3} alt="Christine Eve" /></Link>
                </figure>
                <div className="info-box">
                  <h4 className="name"><Link to="/team-details">Christine Eve</Link></h4>
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

          {/* Team Block 4 */}
          <div className="team-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link to="/team-details"><img src={TeamImage4} alt="David Smith" /></Link>
                </figure>
                <div className="info-box">
                  <h4 className="name"><Link to="/team-details">David Smith</Link></h4>
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

export default TeamSection;
