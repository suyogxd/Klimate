import React from 'react';

const WeatherHighlights = ({ weatherData, airQualityData }) => {
  if (!weatherData) return null;

  const humidity = weatherData?.main?.humidity;
  const windSpeed = weatherData?.wind?.speed;
  const sunrise = new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const airQualityIndex = airQualityData?.main?.aqi || 'N/A';
  const getAQIIcon = (aqi) => {
    switch (aqi) {
      case 1: return './assets/aqi-good.svg';
      case 2: return './assets/aqi-fair.svg';
      case 3: return './assets/aqi-moderate.svg';
      case 4: return './assets/aqi-poor.svg';
      case 5: return './assets/aqi-verypoor.svg';
      default: return './assets/aqi-good.svg';
    }
  };

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

  const highlightCard = (title, icon, value, label) => (
    <div className='highlight-card'>
      <div style={{paddingBottom: '15px', fontSize: '1.1rem', fontWeight: '400', color: '#D9F7FA'}}>{title}</div>
      <div style={{paddingBottom: '15px'}}>{icon}</div>
      <div style={{color: '#D9F7FA'}}>{value}</div>
    </div>
  );


  return (
    <div className='weather-highlight-card'>
      {highlightCard("Humidity", <img src='./assets/humidity.svg' alt="Humidity" style={{height: '60px', width: '60px'}} />,`${humidity}%`)}
      {highlightCard("Wind Speed", <img src='./assets/windspeed.svg' alt="Wind Speed" style={{height: '60px', width: '60px'}} />, `${windSpeed} m/s`)}
      {highlightCard("Sunrise", <img src='./assets/sunrise.svg' alt="Sunrise" style={{height: '60px', width: '60px'}} />, `${sunrise}`)}
      {highlightCard("Sunset", <img src='./assets/sunset.svg' alt="Sunset" style={{height: '60px', width: '60px'}} />, `${sunset}`)}
      {highlightCard("Air Quality",  <img src={getAQIIcon(airQualityIndex)} alt="Air Quality" style={{height: '60px', width: '60px'}} />, getAQIText(airQualityIndex))}
    </div>

  );
};

export default WeatherHighlights;
