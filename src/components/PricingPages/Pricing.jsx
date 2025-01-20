import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import BackToTop from '../BackToTop.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';

const PricingBlock = ({ title, price, duration, features }) => {
  return (
    <div className="pricing-block col-xl-4 col-md-6">
      <div className="inner-box">
        <div className="title-box">
          <h3 className="title">{title}</h3>
          <div className="text">Designed for businesses with basic IT requirements</div>
        </div>
        <h2 className="price">
          <span>$</span>
          {price}
          <sub>/{duration}</sub>
        </h2>
        <div className="text">All Basic services include:</div>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className={!feature.includes("Patch") ? "" : "false"}>
              <i className="fa fa-angle-double-right"></i>
              {feature}
            </li>
          ))}
        </ul>
        <div className="btn-box">
          <Link to ="#" className="theme-btn btn-style-one light-bg">
            <span className="btn-title">Explore Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

function Pricing() {

  const [activeTab, setActiveTab] = useState("Monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <HomeOneHeader />
      <HeroPageTitle
        title="Pricing"
        breadcrumb={[
          { link: '/', title: 'Home' },
          { link: '/pricing', title: 'Pricing' },
        ]}
      />
      <section className="pricing-section2">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Pricing</span>
            <h2>
              The artistry behind <br />
              successful brands
            </h2>
          </div>
          <div className="pricing-tab tabs-box">
            <ul className="tab-btns tab-buttons">
              <li
                className={`tab-btn ${activeTab === "Monthly" ? "active-btn" : ""}`}
                onClick={() => handleTabChange("Monthly")}
              >
                Monthly
              </li>
              <li
                className={`tab-btn ${activeTab === "Yearly" ? "active-btn" : ""}`}
                onClick={() => handleTabChange("Yearly")}
              >
                Yearly
              </li>
            </ul>
            <div className="tabs-content">
              
              {activeTab === "Monthly" && (
                <div className="tab active-tab" id="Monthly">
                  <div className="row">
                    <PricingBlock
                      title="Basic Plan"
                      price="59"
                      duration="Month"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                    <PricingBlock
                      title="Business Plan"
                      price="99"
                      duration="Month"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                    <PricingBlock
                      title="Premium Plan"
                      price="159"
                      duration="Month"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                  </div>
                </div>
              )}
              
              {activeTab === "Yearly" && (
                <div className="tab active-tab" id="Yearly">
                  <div className="row">
                    <PricingBlock
                      title="Basic Plan"
                      price="159"
                      duration="Year"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                    <PricingBlock
                      title="Business Plan"
                      price="199"
                      duration="Year"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                    <PricingBlock
                      title="Premium Plan"
                      price="259"
                      duration="Year"
                      features={[
                        "24/7 system monitoring",
                        "Security management",
                        "Patch management",
                        "Remote support",
                      ]}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Pricing;
