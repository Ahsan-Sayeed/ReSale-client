import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import GetUpdate from './GetUpdate/GetUpdate';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Advertisement></Advertisement>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;