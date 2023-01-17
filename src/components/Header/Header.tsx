import React from 'react'
import './Header.css'

function Header () {
  return (
    <div className='header-main'>
      <button type='button' className='home-button'>Home</button>
      <button type='button' className='login-button'>Login</button>
    </div>
  )
}

export { Header }
