import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='appname-header'> 
          <img src="./assets/weather-icon.svg" alt="weather-icon"  className='app-icon'/>
            <span>Klimate</span>
        </div>
    </header>
  )
}

export default Header