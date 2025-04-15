import React from 'react'
import HourlyForecast from './HourlyForecast'
import WeatherHighlights from './WeatherHighlights'

const TodayHighlights = ({hourlyForecast, weatherData, airQualityData}) => {

    const today = new Date().toISOString().split('T')[0]
    const todayForecast = hourlyForecast?.filter(forecast => forecast.dt_txt.startsWith(today))
  return (
    <>
        <h2 style={{color: 'white', paddingTop: '15px', paddingLeft: '20px', margin:'0', marginTop: '20px'}}>Today's Forecast</h2>
        <div className='hourly-forecast-grid'>
            {todayForecast?.map((forecast, index) => (
                <HourlyForecast key={index} forecast={forecast} />
            ))}
        </div>
        <div className='weather-highlights'>
            <h2 style={{color: 'white', paddingTop: '15px', paddingLeft: '20px', margin:'0', marginTop: '20px'}}>Today's Highlights</h2>
            <WeatherHighlights weatherData={weatherData} airQualityData={airQualityData} />
        </div>
       
    </>
    
  )
}

export default TodayHighlights