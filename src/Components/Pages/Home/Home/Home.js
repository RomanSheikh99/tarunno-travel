import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gellary from '../Gellary/Gellary';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Gellary></Gellary>
            <Contact></Contact>
        </div>
    );
};

export default Home;