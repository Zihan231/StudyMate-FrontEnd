import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
const HomeLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default HomeLayout;