import React from 'react';

const WeatherHighlights = ({ weatherData, airQualityData }) => {
  if (!weatherData) return null;

  const humidity = weatherData?.main?.humidity;
  const windSpeed = weatherData?.wind?.speed;
  const sunrise = new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const airQualityIndex = airQualityData?.main?.aqi || 'N/A';
  const getAQIText = (aqi) => {
    switch (aqi) {
      case 1: return 'Good';
      case 2: return 'Fair';
      case 3: return 'Moderate';
      case 4: return 'Poor';
      case 5: return 'Very Poor';
      default: return 'Unknown';
    }
  };

  const highlightCard = (title, value, icon) => (
    <div className='highlight-card'>
      <div style={{paddingBottom: '15px', fontSize: '1.1rem', fontWeight: '400'}}>{title}</div>
      <div style={{paddingBottom: '15px'}}>{value}</div>
      <div>{icon}</div>
    </div>
  );

  return (
    <div className='weather-highlight-card'>
      {highlightCard("Humidity", <img src='./assets/humidity.svg' alt="Humidity" style={{height: '60px', width: '60px'}} />,`${humidity}%`)}
      {highlightCard("Wind Speed", <img src='./assets/windspeed.svg' alt="Wind Speed" style={{height: '60px', width: '60px'}} />, `${windSpeed} m/s`)}
      {highlightCard("Sunrise", <img src='./assets/sunrise.svg' alt="Sunrise" style={{height: '60px', width: '60px'}} />, `${sunrise}`)}
      {highlightCard("Sunset", <img src='./assets/sunset.svg' alt="Sunset" style={{height: '60px', width: '60px'}} />, `${sunset}`)}
      {highlightCard("Air Quality",  <img src='./assets/aqi-icon.svg' alt="Air Quality" style={{height: '60px', width: '60px'}} />, getAQIText(airQualityIndex))}
    </div>

  );
};

export default WeatherHighlights;
