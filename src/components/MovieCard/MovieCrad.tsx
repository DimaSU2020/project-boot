import React from 'react'
import './MovieCard.css'

function MovieCrad ({imgName, movieName, rating}) {
  const srcAddress = `../../images/${imgName}`
  return (
    <div className='wrapper_card'>
      <img className='movie_img' src={srcAddress} alt='movie-image' />
      <div className='content_card'>
        <div className='rating'>
          Рейтинг: {rating}
          <div className='movie_button'>
            <button className='like_button'>&#9734;</button>
            <button className='see_later_button'>
              <img className='see_later_img' src='../../bookmarks.png'/>
            </button>
          </div>
        </div>
        <div className='movie_name'>
          {movieName}
        </div>
        <button className='movie_details_button'>Подробнее</button>
      </div>
    </div>
  )
}

export {MovieCrad}
