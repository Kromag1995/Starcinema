import React from 'react';
import Movie from './Movie';
import Answer from './moviedb';

var movieArray = Answer()
const base_url = 'https://image.tmdb.org/t/p/w500/'

var billboard = []
for(let j = 0; j<movieArray.length; j++){
    billboard.push(
  <Movie
    title = {movieArray[j].title}
    poster = {base_url + movieArray[j].poster_path}
    overview = {movieArray[j].overview}
    releasedate={movieArray[j].release_date}
    key = {j}
  />)
}

export default billboard;