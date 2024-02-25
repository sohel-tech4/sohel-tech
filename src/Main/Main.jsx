import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Shared/Navbar';
import Personal from '../Pages/Shared/Personal/Personal';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;