import { Card } from '../сard/Card'
import { dataConst } from '../../ts/mockMovieCard';
import './List.css'

const mockMovieCard = dataConst ?? []
const contentPerPage = 6

function List(props: {numberPage: number}) {
  const startCard = (props.numberPage - 1) * contentPerPage
  const removeValue = startCard + contentPerPage
  const pageMovieCard = mockMovieCard.slice(startCard, removeValue)
  return (
    <div className='wrapper_movies_card'>
      {pageMovieCard.map((item) => 
        <Card 
          key={String(item.id) + item.title}
          imgURL={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
          movieName={item.title}
          rating={String(item.vote_average)}
        />
      )}
    </div>
  )
}

export {List}
