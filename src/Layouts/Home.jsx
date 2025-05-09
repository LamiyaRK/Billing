import React from 'react';
import Carsoul from '../Components/Carsoul';
import Cardgrid from '../Components/Cardgrid';
import Banner from '../Components/Banner';
import Service from '../Components/Service';
import Faq from '../Components/Faq';
import Review from '../Components/Review';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
            <Carsoul></Carsoul>
            <Cardgrid></Cardgrid>
            <Service></Service>
            <Faq></Faq>
            <Review></Review>
        </div>
    );
};

export default Home;