import React from 'react';
import Banner from '../../components/Banner/Banner';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonials/Testimonials'
import TopPartners from '../../components/TopPartners/TopPartners';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
const Home = () => {
    
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TopPartners></TopPartners>
            <HowItWorks></HowItWorks>
            <Banner></Banner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;