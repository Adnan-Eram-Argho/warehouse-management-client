import React from 'react';
import ContactUs from './ContactUs/ContactUs'
import Banner from './Banner/Banner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Inventory from './Inventory/Inventory';
import OtherServices from './OtherServices/OtherServices';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <OtherServices></OtherServices>
            <ContactUs></ContactUs>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;