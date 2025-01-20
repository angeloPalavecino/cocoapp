import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from '../HeroPageTitle.jsx';
import Services from './Services.jsx';

function ServicesPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/services', title: 'Services' },
                ]}
            />
            <Services />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ServicesPages;
