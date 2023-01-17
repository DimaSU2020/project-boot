import React from 'react'
import { MoviesList } from '../MoviesList/MoviesList'
import { SideBar } from '../SideBar/SideBar'
import './Content.css'

function Content () {
  return (
    <div className='content_wrapper'>
      <SideBar />
      <MoviesList />
    </div>
  )
}

export {Content}
