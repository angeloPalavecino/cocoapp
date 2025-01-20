import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeOne.jsx';
import AboutHomeOne from './AboutHomeOne.jsx';
import ServiceHomeOne from './ServiceHomeOne.jsx';
import ProjectSliderHomeOne from './ProjectSliderHomeOne.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';
import CallToActionHomeOne from './CallToActionHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import TestimonialSection from './TestimonialHomeOne.jsx';
import FunfactSection from './Funfact.jsx';
import TeamSection from './Team.jsx';
import MarqueeSection from './Marquee.jsx';
import ServicesSectionTwo from './Service2nd.jsx';
import Feature from './Feature.jsx';
import PricingSection from './Pricing.jsx';
import ProcessSection from './Process.jsx';
import WhyChooseUs from './Chooseus.jsx';
import FeaturesSectionTwo from './Feature2nd.jsx';
import ContactSection from './Contact.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeOneHeader action={drawerAction.toggle} />
            <ZeroHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            <MarqueeSection />
            <ServicesSectionTwo />
            <ClientHomeOne />
            <Feature />
            <ProcessSection />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
