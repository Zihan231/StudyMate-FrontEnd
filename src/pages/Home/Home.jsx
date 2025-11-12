import React from 'react';
import Banner from '../../components/Banner/Banner';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonials/Testimonials'
import TopPartners from '../../components/TopPartners/TopPartners';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <TopPartners></TopPartners>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;