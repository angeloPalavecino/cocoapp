import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import BlogHomeThree from './Blog.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import HeaderFour from './HeaderFour.jsx';
import ContactSectionTwo from './Contact.jsx';
import BannerSectionThree from './Banner.jsx';
import AboutSectionSix from './About.jsx';
import ProjectSliderHomeThree from './Project.jsx';
import IndustriesSection from './Industries.jsx';
import MarqueeSection from './Marquee.jsx';
import FaqsSection from './Faq.jsx';
import ProcessSection from './Process.jsx';
import FunfactSection from './Funfact.jsx';
import TeamSection from './Team.jsx';
import TestimonialSection from '../HomeOne/TestimonialHomeOne.jsx';
import CallToAction from './CallToAction.jsx';
import ServicesSectionThree from './Services.jsx';


function HomeFive() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <HeaderFour action={drawerAction.toggle} />
            <BannerSectionThree />
            <AboutSectionSix />
            <MarqueeSection />
            <ServicesSectionThree />
            <FaqsSection />
            <ProcessSection />
            <FunfactSection />
            <ContactSectionTwo />
            <ProjectSliderHomeThree />
            <MarqueeSection />
            <TeamSection />
           
            <TestimonialSection />
            <BlogHomeThree />
            <CallToAction />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeFive;