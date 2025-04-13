import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import ClientHomeOne from '../HomeOne/ClientHomeOne.jsx';
import AboutHomeOne from './About.jsx';
import VideoSectionTwo from './Video.jsx';
import FeaturesSectionFour from './Feature.jsx';
import AwardSection from './Award.jsx';
import TeamSection from './Team.jsx';

function AboutUs() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Sobre Nosotros"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'Sobre Nosotros' },
                ]}
            />
            <AboutHomeOne />
            <VideoSectionTwo />
            <FeaturesSectionFour />
            <AwardSection />
            <TeamSection />

            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default AboutUs;
