import React from 'react'
import '../styles/HourlyForecast.css'

const HourlyForecast = ({forecast}) => {

    const dateTime = new Date(forecast.dt_txt)
    const day = dateTime.toLocaleDateString([], {weekday: 'short'})
    const time = dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

    const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    const description = forecast?.weather[0]?.description;
    const temperature = forecast?.main?.temp;
  return (
    <>
        <div className='hourly-forecast-card'>
            <div className='hourly-forecast-day'>
                <span>{day},</span> &nbsp;
                <span style={{color: 'rgb(153,153,153'}}>{time}</span>
            </div>
            <img src={iconUrl} alt="Weather Icon" style={{height: '100px', width: '100px'}}/>
            <div className='hourly-forecast-description' style={{color: 'rgb(153,153,153', paddingBottom: '10px', textTransform: 'capitalize'}}>{description}</div>
            <div className='hourly-forecast-temp'>
                {temperature}
                <span style={{ fontSize: '0.5em', verticalAlign: 'super'}}>
                    °C
                </span>
            </div>
        </div>
    </>
  )
}

export default HourlyForecast