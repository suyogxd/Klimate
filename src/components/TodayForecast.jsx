import React, { useEffect, useRef } from 'react'
import HourlyForecast from './HourlyForecast'
import WeatherHighlights from './WeatherHighlights'
import '../styles/TodayForecast.css'

const TodayForecast = ({hourlyForecast, weatherData, airQualityData}) => {

    const today = new Date().toISOString().split('T')[0]
    const todayForecast = hourlyForecast

    const scrollRef = useRef(null)

    useEffect(() => {
        const slider = scrollRef.current
        if(!slider) return
        let isDown = false
        let startX
        let scrollLeft

        const handleMouseDown = (e) => {
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        }

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('active');
          };
      
          const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove('active');
          };
      
          const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const scrollSpeed = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - scrollSpeed;
          };
      
          slider.addEventListener('mousedown', handleMouseDown);
          slider.addEventListener('mouseleave', handleMouseLeave);
          slider.addEventListener('mouseup', handleMouseUp);
          slider.addEventListener('mousemove', handleMouseMove);

          slider.addEventListener('touchstart', (e) => handleMouseDown(e.touches[0]));
          slider.addEventListener('touchend', handleMouseUp);
          slider.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
      
          return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);

            slider.removeEventListener('touchstart', (e) => handleMouseDown(e.touches[0]));
            slider.removeEventListener('touchend', handleMouseUp);
            slider.removeEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
          };
        }, []);
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

export default TodayForecast