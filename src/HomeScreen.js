import React from 'react';

import './HomeScreen.css';
import Navbar from './Navbar';
import Banner from './Banner';

const Homescreen = () => {
    return (
        <div className="homeScreen">
            {/* Navbar */}
            <Navbar/>
        <Banner/>
            {/* Rows */}
        </div>
    )
}

export default Homescreen
