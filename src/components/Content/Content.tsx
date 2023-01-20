import { useState } from 'react'
import { List } from '../list/List'
import { SideBar } from '../sidebar/SideBar'
import './Content.css'

function Content () {
  const [numberPage, setNumberPage] = useState(1)

  return (
    <div className='content_wrapper'>
      <SideBar 
        setNumberPage={setNumberPage}
      />
      <List numberPage={numberPage} />
    </div>
  )
}

export {Content}
