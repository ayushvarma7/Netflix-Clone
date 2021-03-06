import React, { useEffect, useState } from 'react';
import axios from './axios';

import './Row.css';
function Row({title, fetchUrl, isLargeRow= false}) {
    const [movies, setMovies]= useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='row'>
           <h2> {title}</h2>

           <div className="row__posters">   {/* row__posters produces different genres */}
            {movies.map((movie)=>(       /* this is to reduce the  */
                ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                 /* row__poster produces different movie of same genre */
                key={movie.id}
                src={`${base_url}${
                    // movie?.backdrop_path
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
                )
            ))}
           </div>
            
        </div>
    )
}

export default Row
