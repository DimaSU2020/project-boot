import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import data from '../../ts/mockMovieCard.json';
import './MoviesList.css'

const mockMovieCard = data

function MoviesList() {
  return (
    <div className='wrapper_movies_card'>
      {mockMovieCard.map((item) => 
        <MovieCard 
          key={String(item.id)}
          imgURL={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
          movieName={item.title}
          rating={String(item.vote_average)}
        />
      )}
    </div>
  )
}

export {MoviesList}
