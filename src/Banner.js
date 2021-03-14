import React, { useEffect, useState } from 'react'
import axios from './axios';

import './Banner.css';
import requests from './Requests';
function Banner() {
   
    const [movie, setMovie]= useState([]);
    function truncate(string, n){ //truncate function
        return string?.length>n ? string.substr(0, n-1) + '...' : string;
    }

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[   //this 'request' is the data we got from the get request
                Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage:`url(" https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
          <div className="banner__contents">
              <h1 className="banner__title">
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="banner__buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>
              </div>
              <h1 className="banner__description">{
                  truncate(`${movie?.overview}`, 150)}</h1>
          </div>  

          <div className="banner--fadeBottom"/> 
          {/* used for adding a fade*/}
        </header>
    )
}

export default Banner;

// https://image.tmbd.org/t/p/original/${movie?.backdrop_path}
// https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png