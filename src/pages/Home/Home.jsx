import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import useAxios from '../../hooks/axios/useAxios';

const Home = () => {
    const axiosInstance = useAxios();
    const [banner, setBanner] = useState([]);
    useEffect(() => { 
        axiosInstance.get('/partners/recent').then(Data => {
            setBanner(Data.data);
            console.log(Data.data);
        })
    },[])
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;