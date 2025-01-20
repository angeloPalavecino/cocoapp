import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Import images
import projectDetailsImage from '../../assets/images/resource/project-details.jpg';
import project1 from '../../assets/images/resource/project-1.jpg';
import project2 from '../../assets/images/resource/project-2.jpg';
import project3 from '../../assets/images/resource/project-3.jpg';
import project4 from '../../assets/images/resource/project-4.jpg';

// Swiper configuration
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectsDetails() {
    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Project Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/project-details', title: 'Project Details' },
                ]}
            />

<section className="project-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__top">
                                <div className="project-details__img">
                                    <img src={projectDetailsImage} alt="Project Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="project-details__content-right">
                                <div className="project-details__details-box pb-25">
                                    <div className="row">
                                        <div className="col-6 col-md-3">
                                            <p className="project-details__client">Date</p>
                                            <h4 className="project-details__name">10 January, 2023</h4>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p className="project-details__client">Client</p>
                                            <h4 className="project-details__name">Kodesolution Ltd</h4>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p className="project-details__client">Website</p>
                                            <h4 className="project-details__name">www.domain.com</h4>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p className="project-details__client">Location</p>
                                            <h4 className="project-details__name">New York, USA</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-details__content">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details__content-left">
                                    <h3 className="mb-4 mt-5">Here to Know About This Project</h3>
                                    <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p>
							<p className="mb-5">Beyond more stoic this along goodness hey this this
								wow manatee mongoose one as since a far flustered impressive manifest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo ea ad, nam quisquam optio vel tempora, minus placeat, ut nisi quam quos laboriosam eos quibusdam cum atque suscipit quod dignissimos magni doloribus facere eius soluta possimus. Officiis, autem similique sequi labore aliquid corporis illo omnis voluptate optio possimus doloremque, error reiciendis delectus ex tempore, architecto eaque, inventore nihil pariatur quibusdam facere reprehenderit? Doloribus deleniti sapiente, dicta, dolorem unde deserunt quisquam. Dolore consequuntur reiciendis corporis perspiciatis quam fuga magnam molestiae minima culpa ab beatae vel itaque cumque et adipisci autem nisi qui esse in, deserunt numquam hic? Et, eligendi, assumen daEst corrupti officiis dignissimos.</p>

                                    <ul className="list-style-two mb-0">
                                        <li><i className="fa fa-check-circle"></i> Lorem ipsum dolor amet consectetur adipisicing elit</li>
                                        <li><i className="fa fa-check-circle"></i> Vitae pariatur molestiae odit quos enim</li>
                                        <li><i className="fa fa-check-circle"></i> Beyond more stoic this along goodness hey this</li>
                                        <li><i className="fa fa-check-circle"></i> Officiis autem similique sequi labore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__pagination-box">
                                <ul className="project-details__pagination list-unstyled clearfix">
                                    <li className="next">
                                        <div className="icon">
                                            <Link to="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link>
                                        </div>
                                        <div className="content">Previous</div>
                                    </li>
                                    <li className="previous">
                                        <div className="content">Next</div>
                                        <div className="icon">
                                            <Link to="#" aria-label="Next"><i className="lnr lnr-icon-arrow-right"></i></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects-section style-two pt-0">
    <div className="icon-lines-4"></div>
    <div className="large-container">
        <div className="sec-title text-center">
            <span className="sub-title">Similar project</span>
            <h2>Explore the latest IT tech <br />projects done</h2>
        </div>
        <div className="carousel-outer">
            <Swiper {...swiperOptions} className="project-carousel">
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project1} alt="Project 1" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project2} alt="Project 2" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project3} alt="Project 3" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project4} alt="Project 4" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project1} alt="Project 1" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project2} alt="Project 2" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project3} alt="Project 3" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link to="/projects-details">
                                    <img src={project4} alt="Project 4" />
                                </Link>
                            </figure>
                        </div>
                        <div className="content-box">
                            <Link to="/projects-details"><i className="icon fa fa-angle-right"></i></Link>
                            <div className="text">IT Technology</div>
                            <h4 className="title"><Link to="/projects-details">Data recovery <br />analysis</Link></h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsDetails;
