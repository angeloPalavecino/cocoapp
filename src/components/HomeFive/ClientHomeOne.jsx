import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import client1 from "../../assets/images/clients/1.png";
import client2 from "../../assets/images/clients/2.png";
import client3 from "../../assets/images/clients/3.png";
import client4 from "../../assets/images/clients/1.png";
import client5 from "../../assets/images/clients/1.png";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 3 },
    991: { slidesPerView: 4 },
    1199: { slidesPerView: 5 },
    1350: { slidesPerView: 5 },
  },
};

function ClientHomeOne({ className = "" }) {
  return (
    <section className={`clients-section pull-up ${className}`}>
      <div className="auto-container">
        <div className="outer-box">
          <div className="sponsors-outer">
            <Swiper {...swiperOptions}>
              {/* Swiper Slides */}
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client1} alt="Client 1" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client2} alt="Client 2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client3} alt="Client 3" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client4} alt="Client 4" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client5} alt="Client 5" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client1} alt="Client 1" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client2} alt="Client 2" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client3} alt="Client 3" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client4} alt="Client 4" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-block">
                  <Link to ="#">
                    <img src={client5} alt="Client 5" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientHomeOne;
