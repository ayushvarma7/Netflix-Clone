import React from 'react';

import './HomeScreen.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './Requests';

const Homescreen = () => {
    return (
        <div className="homeScreen">
            {/* Navbar */}
            <Navbar/>
        <Banner/>
            <Row 
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
             />
            <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Come    dy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default Homescreen
