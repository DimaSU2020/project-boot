import React from 'react'
import { checkBoxElements } from '../../ts/support'
import './SideBar.css'

function SideBar () {
  return (
    <aside className='sidebar'>
      <h3>Фильтры:</h3>
      <button type='button' className='reset_button'>Сбросить все фильтры</button>
      <h4 className='select'>Сортировать по: 
        <select name='select' >
          <option value="1">Популярные по убыванию</option>
          <option value="2">Популярные по возрастанию</option>
          <option value="3">По рейтингу по убыванию</option>
          <option value="4">По рейтингу по возрастаию</option>
        </select>
      </h4>
      <h4 className='select'>Год релиза: 
        <select name='select' >
          <option value="1">2020</option>
          <option value="2">2021</option>
          <option value="3">2022</option>
          <option value="4">2023</option>
        </select>
      </h4>
      {/* {checkBoxElements.map((element) =>
        <label className='checkbox_label' key={String(element.id)}>
          <input name="origin" type="checkbox" className='checkbox'/> 
          {element.name}
        </label>
      )} */}
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
