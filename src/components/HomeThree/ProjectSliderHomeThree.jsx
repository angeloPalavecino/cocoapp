import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import project1 from '../../assets/images/resource/project-1.jpg';
import project2 from '../../assets/images/resource/project-2.jpg';
import project3 from '../../assets/images/resource/project-3.jpg';
import project4 from '../../assets/images/resource/project-4.jpg';

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
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 4 },
    1350: { slidesPerView: 4 },
  },
};

function ProjectSlider() {
  const projects = [
    { imgSrc: project1, title: 'Data recovery analysis' },
    { imgSrc: project2, title: 'Cybersecurity enhancement' },
    { imgSrc: project3, title: 'AI project development' },
    { imgSrc: project4, title: 'Blockchain integration' },
  ];

  return (
    <section id="project" className="projects-section style-two">
      <div className="icon-lines-4"></div>
      <div className="large-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Recent Project</span>
          <h2>Explore the latest IT tech <br /> projects done</h2>
        </div>
        <div className="carousel-outer">
          <Swiper {...swiperOptions} className="project-carousel">
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/projects-details">
                        <img src={project.imgSrc} alt={project.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <Link to="/projects-details">
                      <i className="icon fa fa-angle-right"></i>
                    </Link>
                    <div className="text">IT Technology</div>
                    <h4 className="title">
                      <Link to="/projects-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/projects-details">
                        <img src={project.imgSrc} alt={project.title} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <Link to="/projects-details">
                      <i className="icon fa fa-angle-right"></i>
                    </Link>
                    <div className="text">IT Technology</div>
                    <h4 className="title">
                      <Link to="/projects-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProjectSlider;
