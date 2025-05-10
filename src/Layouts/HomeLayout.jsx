import React from 'react';
import Navb from '../Components/Navb';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../Components/Footer';
import Loadin from '../Components/Loadin';

const HomeLayout = () => {
    const { state }=useNavigate()
    return (
        <div >
            <Navb></Navb>
           {state=="loading"?<Loadin></Loadin>:<Outlet></Outlet>} 
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;