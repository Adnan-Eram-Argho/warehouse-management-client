import React from 'react';
import useFruits from '../../hooks/useFruits';
import Banner from './Banner/Banner';

const Home = () => {
    const [fruits, setFruits] = useFruits();
    return (
        <div>
            <Banner></Banner>
            <h1>{fruits?.length}</h1>
        </div>
    );
};

export default Home;