import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import HeaderFourSingle from './HeaderFourSingle.jsx';
import ContactSectionTwo from './Contact.jsx';
import CallToActionFour from './CallToAction.jsx';
import BannerSectionThree from './Banner.jsx';
import ServicesHomeFour from './ServicesHomeFour.jsx';
import FeaturesSectionFour from './Feature.jsx';
import FeaturesSectionSix from './Feature1.jsx';
import MarqueeSection from './Marquee.jsx';
import FeaturesSectionThree from './Feature2.jsx';
import FeaturesSectionFive from './Feature3.jsx';
import TestimonialSection from '../HomeOne/TestimonialHomeOne.jsx';
import NewsSection from './News.jsx';
import Map from './Map.jsx';
import AboutFour from './About.jsx';

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HeaderFourSingle action={drawerAction.toggle} />
            <BannerSectionThree />
            <FeaturesSectionFour />
            <AboutFour />
            <ServicesHomeFour />
            <FeaturesSectionSix />
            <MarqueeSection />
            <FeaturesSectionThree />
            <FeaturesSectionFive />
            <TestimonialSection />
            <ContactSectionTwo />
            <NewsSection />
            <CallToActionFour />
            <Map />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeFour;
