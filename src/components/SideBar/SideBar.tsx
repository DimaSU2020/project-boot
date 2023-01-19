import { useState } from 'react';
import { selectSorting, selectYears } from '../../ts/support'
import { dataConst } from '../../ts/mockMovieCardSome';
import data from '../../ts/mockCheckBox.json';
import './SideBar.css'

const checkBoxElements = data;
const dataSelect = [
  {title: 'Сортировать по:', options: selectSorting},
  {title: 'Год релиза:', options: selectYears},
]
const mockMovieCard = dataConst ?? []
const contentFirstPage = 1
const contentPerPage = 6
const totalPages = Math.ceil(mockMovieCard.length / contentPerPage)

function SideBar () {
  const [countPages, setCountPages] = useState(1)

  function prevPage () {
  if(countPages === contentFirstPage) {
      return
  }
  setCountPages((countPages) => countPages - 1)
  }

  function nextPage () {
  if(countPages === totalPages) {
      return
  }
  setCountPages((countPages) => countPages + 1)
  }
  const pageContext = {contentFirstPage, contentPerPage, totalPages, countPages}
  // console.log(pageContext)
  return (
    <aside className='sidebar'>
      <h3>Фильтры:</h3>
      <button type='button' className='reset_button'>Сбросить все фильтры</button>
      {dataSelect.map((item) =>
        <h4 key={item.title} className='select'>{item.title} 
          <select name='select' >
            {item.options.map((element) =>
              <option 
                key={element.value + element.name}
                value={element.value}
              >
                {element.name}
              </option>
            )}
          </select>
        </h4>
      )}
      {checkBoxElements.map((element) =>
        <label className='checkbox_label' key={String(element.id)}>
          <input name="origin" type="checkbox" className='checkbox'/> 
          {element.name}
        </label>
      )}
      <div className='pagination'>
        <button
          className={countPages === contentFirstPage ? 'back_button' : 'back_button active'}
          disabled={countPages === contentFirstPage ? true : false}
          type="button"
          onClick={prevPage}
        >
          Назад
        </button>
        <button
          className={countPages === totalPages ? 'forward_button' : 'forward_button active'}
          disabled={countPages === totalPages ? true : false}
          type="button"
          onClick={nextPage}
        >
          Вперед
        </button>
      </div>
      <ul className='count_pages'>
        <li className='back_pages'>{countPages} of</li>
        <li className='forward_pages'>&nbsp;{totalPages}</li>
      </ul>
    </aside>
  )
}

export {SideBar}
