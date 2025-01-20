import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeTwo.jsx';
import FeatureHomeTwo from './FeatureHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import FunfactHomeTwo from './FunfactHomeTwo.jsx';
import ProjectSliderHomeTwo from './ProjectSliderHomeTwo.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import CallToActionHomeTwo from './CallToActionHomeTwo.jsx';
import MapHomeTwo from './MapHomeTwo.jsx';
import HomeTwoHeaderSingle from './HomeTwoHeaderSingle.jsx';
import ServicesSectionThree from './service.jsx';
import MarqueeSection from './Marquee.jsx';
import VideoHomeTwo from './VideoHomeTwo.jsx';
import VideoSectionTwo from './Video.jsx';
import FeaturesSectionFour from './Feature.jsx';
import FaqSection from './FaqHomeTwo.jsx';
import FeaturesSectionFive from './Feature1.jsx';
import TestimonialSectionTwo from './TestimonialHomeTwo.jsx';
import AwardSection from './Award.jsx';
import FeaturesSectionSix from './Feature2.jsx';
import BlogHomeTwo from './News.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeTwoHeaderSingle action={drawerAction.toggle} />
            <ZeroHomeOne />
            <ServicesSectionThree />
            <MarqueeSection />
            <AboutHomeTwo />
            <VideoHomeTwo />
            <FunfactHomeTwo />
            <FeatureHomeTwo />
            <VideoSectionTwo />
            <FeaturesSectionFour />
            <FaqSection />
            <ProjectSliderHomeTwo />
            <FeaturesSectionFive />
            <TestimonialSectionTwo />
            <AwardSection />
            <FeaturesSectionSix />
            <ContactHomeTwo />
            <BlogHomeTwo />
            <CallToActionHomeTwo />
            <MapHomeTwo />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeTwo;
