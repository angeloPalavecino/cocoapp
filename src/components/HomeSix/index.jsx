import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import BlogHomeThree from './Blog.jsx';
import HeaderFour from './HeaderFour.jsx';
import BannerSectionThree from './Banner.jsx';
import AboutSectionSix from './About.jsx';
import ProjectSliderHomeThree from './Project.jsx';
import MarqueeSection from './Marquee.jsx';
import ProcessSection from './Process.jsx';
import FunfactSection from './Funfact.jsx';
import TeamSection from './Team.jsx';
import CallToAction from './CallToAction.jsx';
import ServicesSectionThree from './Services.jsx';
import PricingSection from './Pricing.jsx';
import VideoHomeTwo from './Video.jsx';
import FeaturesSectionThree from './Feature.jsx';
import WhyChooseUs from './Chooseus.jsx';
import AwardSection from './Award.jsx';


function HomeFive() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <HeaderFour action={drawerAction.toggle} />
            <BannerSectionThree />
            <MarqueeSection />
            <ServicesSectionThree />
            <AboutSectionSix />
            <PricingSection />
            <VideoHomeTwo />
            <FunfactSection />
            <FeaturesSectionThree />
            <ProjectSliderHomeThree />
            <WhyChooseUs />
            <TeamSection />
            <ProcessSection />
            <AwardSection />
            <BlogHomeThree />
            <CallToAction />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeFive;
