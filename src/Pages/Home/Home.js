import React from 'react';
import Banner from './Banner/Banner';
import MyServices from './MyServices/MyServices';
import Choosen from './Choosen/Choosen';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <Choosen></Choosen>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;