import React  from 'react'
import HourlyForecast from './HourlyForecast'
import WeatherHighlights from './WeatherHighlights'
import ScrollContainer from 'react-indiana-drag-scroll'
import '../styles/TodayForecast.css'
import WeeklyForecast from './WeeklyForecast'

const TodayForecast = ({hourlyForecast, weatherData, airQualityData, weeklyForecast}) => {
  const todayForecast = hourlyForecast
  
  return (
    <>
      <h2 style={{color: '#8CA5BA', paddingTop: '15px', paddingLeft: '20px', margin:'0', marginTop: '20px'}}>Today's Forecast</h2>

      <ScrollContainer className='hourly-forecast-container' nativeMobileScroll={true} horizontal={true} vertical={false}>
          {todayForecast?.map((forecast, index) => (
            <HourlyForecast key={index} forecast={forecast} />
          ))}
      </ScrollContainer>
      
      
      <div className='weather-highlights'>
          <h2 style={{color: '#8CA5BA', paddingTop: '15px', paddingLeft: '20px', margin:'0', marginTop: '20px'}}>Today's Highlights</h2>
          <WeatherHighlights weatherData={weatherData} airQualityData={airQualityData} />
      </div>

      <div className='weekly-forecast'>
        <h2 style={{color: '#8CA5BA', paddingTop: '15px', paddingLeft: '23px', margin:'0', marginTop: '20px'}}> Five Days Forecast</h2>
        <WeeklyForecast weeklyForecast={weeklyForecast} />
      </div>
       
    </>
    
  )
}

export default TodayForecast