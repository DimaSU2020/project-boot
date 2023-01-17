import React from 'react'
import { MovieCrad } from '../MovieCard/MovieCrad'
import { movieCard } from '../../js/support'
import './MoviesList.css'

function MoviesList() {
  return (
    <div className='wrapper_movies_card'>
      {movieCard.map((item) => 
        <MovieCrad 
          key={item.id}
          imgName={item.imgName}
          movieName={item.movieName}
          rating={item.rating}
        />
      )}
    </div>
  )
}

export {MoviesList}
