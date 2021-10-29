import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;