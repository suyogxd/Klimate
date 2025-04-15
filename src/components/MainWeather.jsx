import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../styles/MainWeather.css'

const MainWeather = ({weatherData, airQualityData}) => {

    const temperature = weatherData?.main?.temp || 'N/A'
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@4x.png`
    const weatherDescription = weatherData?.weather?.[0]?.description || 'N/A'
    const feelsLike = weatherData?.main?.feels_like
    const date = weatherData?.dt || 'N/A'
    const cityName = weatherData?.name || 'City not available'
    const countryName = weatherData?.sys?.country || 'Country not available'
    const currentDate = date? new Date(date * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    }): "Date not available"
    // const airQuality = airQualityData?.main?.

  return (
    <div 
        style={{ 
            color: "white",
            padding: '20px',
            paddingTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            
        }}>
        
        <div className='weather-icon-container' >
            <img
                src={weatherIconUrl}
                alt="weather icon"
                className='weather-icon'
            />
        </div>

        <div 
            style={{
                display: 'flex', 
                aslignItems: 'center', 
                fontSize: '69px', 
                fontWeight: '400',
                paddingTop: '60px',
            }}>
                {temperature} <span style={{ fontSize: '0.5em', verticalAlign: 'super'}}>°C</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '5px'}}>
            <div style={{color: '#999999', fontWeight: '500', fontSize: '13px'}}>Feels like {feelsLike}<span style={{ fontSize: '0.7em', verticalAlign: 'super'}}>°C</span></div>
            <div className='weather-description' >{weatherDescription}</div>
            <div className='divider'></div>
            <div>{currentDate}</div>
            <div style={{display:'flex', alignItems: 'center', gap: '2px', marginLeft: '-3px'}}><LocationOnIcon fontSize='10px' style={{margin: '0', padding: '0'}}/> {cityName}, {countryName}</div>
        </div>
        
    </div>
  )
}

export default MainWeather