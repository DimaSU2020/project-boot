import { MoviesList } from '../moviesList/MoviesList'
import { SideBar } from '../sideBar/SideBar'
import './Content.css'

function Content () {
  const pageContext = {contentPerPage: 6, countPages: 1}
  return (
    <div className='content_wrapper'>
      <SideBar />
      <MoviesList pageContext={pageContext} />
    </div>
  )
}

export {Content}
