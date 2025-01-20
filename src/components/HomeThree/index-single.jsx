import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeThree from './ZeroHomeThree.jsx';
import ServicesHomeThree from './ServicesHomeThree.jsx';
import AboutHomeThree from './AboutHomeThree.jsx';
import ProjectSliderHomeThree from './ProjectSliderHomeThree.jsx';
import HomeTwoHeaderSingle from './HomeTwoHeaderSingle.jsx';
import ChooseUs from './ChooseUsHomeThree.jsx';
import FeaturesSectionFour from './FeaturesHomeFour.jsx';
import MarqueeSection from './Marquee.jsx';
import TeamSection from './Team.jsx';
import VideoSection from './Video.jsx';
import FunfactSectionTwo from './Funfact.jsx';
import PricingSection from './Pricing.jsx';
import ProcessSection from './Process.jsx';
import NewsSection from './News.jsx';
import CallToActionHomeTwo from './Call.jsx';
import ContactSection from './Contact.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeTwoHeaderSingle action={drawerAction.toggle} />
            <ZeroHomeThree />
            <FeaturesSectionFour />
            <MarqueeSection />
            <AboutHomeThree />
            <ServicesHomeThree />
            <TeamSection />
            <VideoSection />
            <FunfactSectionTwo />
            <ProjectSliderHomeThree />
            <PricingSection />
            <ProcessSection />
            <ChooseUs />
            <NewsSection />
            <ContactSection />
            <CallToActionHomeTwo />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeThree;
