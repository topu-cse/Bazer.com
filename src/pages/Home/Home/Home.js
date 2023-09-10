import React from 'react';
import Banner from '../Banner/Banner';
import HotSales from '../HotSales/HotSales';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HotSales/>
            <HomeProducts/>
        </div>
    );
};

export default Home;