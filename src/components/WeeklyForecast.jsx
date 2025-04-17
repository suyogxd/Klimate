import React from 'react';
import '../styles/WeeklyForecast.css';

const WeeklyForecast = ({ weeklyForecast }) => {
    if (!weeklyForecast) return null;
    
  return (
    <div className="weekly-forecast-container">
      {weeklyForecast.map((forecast, index) => {
        const dateTime = new Date(forecast.dt_txt)
        const day = dateTime.toLocaleDateString([], {weekday: 'long'})
        const description = forecast?.weather[0]?.description
        const temperature = forecast?.main?.temp

        return (
            <div className='weekly-forecast-card' key={index}>
                <div className='hourly-forecast-day'>
                    <span style={{color: '#D9F7FA'}}>{day}</span>
                </div>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather Icon" draggable="false" style={{height: '100px', width: '100px'}}/>
                <div className='weekly-forecast-description' style={{color: 'rgb(153,153,153', paddingBottom: '10px', textTransform: 'capitalize'}}>{description}</div>
                <div className='weekly-forecast-temp' style={{color: '#D9F7FA'}}>
                    {temperature}
                    <span style={{ fontSize: '0.5em', verticalAlign: 'super'}}>
                        °C
                    </span>
                </div>
            </div>
        );
    })}
    </div>
  );
};

export default WeeklyForecast;
