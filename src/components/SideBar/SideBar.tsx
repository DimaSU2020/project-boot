import data from '../../ts/mockCheckBox.json';
import { selectSorting, selectYears } from '../../ts/support'
import './SideBar.css'

const checkBoxElements = data;
const dataSelect = [
  {title: 'Сортировать по:', options: selectSorting},
  {title: 'Год релиза:', options: selectYears},
]

function SideBar () {
  return (
    <aside className='sidebar'>
      <h3>Фильтры:</h3>
      <button type='button' className='reset_button'>Сбросить все фильтры</button>
      {dataSelect.map((item) =>
        <h4 className='select'>{item.title} 
          <select name='select' >
            {item.options.map((element) =>
              <option value={element.value}>{element.name}</option>
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
        <button className='back_button'>Назад</button>
        <button className='forward_button active'>Вперед</button>
      </div>
      <ul className='count_pages'>
        <li className='back_pages'>1 of</li>
        <li className='forward_pages'>&nbsp;1455</li>
      </ul>
    </aside>
  )
}

export {SideBar}
