import React from 'react';
import Banner from '../Banner/Banner';
import HotSales from '../HotSales/HotSales';
import HomeProducts from '../HomeProducts/HomeProducts';
import Service from '../../Shared/Service/Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HotSales/>
            <HomeProducts/>
            <Service/>
        </div>
    );
};

export default Home;