import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import BlogHomeThree from './Blog.jsx';
import HeaderFourSingle from './HeaderFourSingle.jsx';
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
import ContactSection from './Contact.jsx';


function HomeFive() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HeaderFourSingle action={drawerAction.toggle} />
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
            <ContactSection />
            <CallToAction />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeFive;
