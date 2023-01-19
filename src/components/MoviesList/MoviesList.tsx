import { MovieCard } from '../movieCard/MovieCard'
import { dataConst } from '../../ts/mockMovieCardSome';
import './MoviesList.css'

localStorage.setItem('movie', JSON.stringify(dataConst ?? []));
const mockMovieCard = JSON.parse(localStorage.getItem('movie' ?? []))
console.log(mockMovieCard)

type dataPageContext = {
  contentPerPage: number,
  countPages: number
};

function MoviesList(props: {pageContext: dataPageContext}) {
  // const startCard = (props.pageContext.countPages - 1) * props.pageContext.contentPerPage
  // const removeValue = props.pageContext.contentPerPage
  // const pageMovieCard = mockMovieCard.splice(startCard, removeValue)
  localStorage.setItem('pageMovie', JSON.stringify(mockMovieCard.splice(0, 6)))
  const pageMovieCard = JSON.parse(localStorage.getItem('pageMovie'))
  return (
    <div className='wrapper_movies_card'>
      {pageMovieCard.map((item) => 
        <MovieCard 
          key={String(item.id) + item.title}
          imgURL={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
          movieName={item.title}
          rating={String(item.vote_average)}
        />
      )}
    </div>
  )
}

export {MoviesList}
