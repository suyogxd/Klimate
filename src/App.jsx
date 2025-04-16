import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import MainWeather from './components/MainWeather'
import TodayForecast from './components/TodayForecast'


function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('London')
  const [airQualityData, setAirQualityData] = useState(null)
  const [hourlyForecast, setHourlyForecast] = useState(null)

  useEffect(() => {
    fetchWeatherData(city)
    // fetchAirQualityData(city)
  }, [city])
  
  const fetchAirQualityData = (lat, lon) => {
    const APIKey = import.meta.env.VITE_API_KEY
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    .then(res => res.json())
    .then(data => {
      setAirQualityData(data.list[0])
      console.log("AQI Data:", data.list[0])
    })
    .catch(err => console.log('Error fetching Air Quality Data', err))
  }

  const fetchWeatherData = async () => {
    try{
      const APIKey = import.meta.env.VITE_API_KEY
      const weatherRes = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      const weatherJson = await weatherRes.json()
      setWeatherData(weatherJson)
      console.log(JSON.stringify(weatherJson))
      const {lat, lon} = weatherJson.coord
      fetchAirQualityData(lat, lon)

      const forecastRes = await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`)
      const forecastJson = await forecastRes.json() 

      setHourlyForecast(forecastJson.list.slice(0, 8))
      console.log(forecastJson.list.slice(0, 8));

    }
    catch(err){
      console.log('Error fetching Weather Data', err)
    }
  }

  const handleSearch = (searchedCity) => {
    setCity(searchedCity)
  }

  return (
    <>
      <Header />
      <div className='app-container'>
        <div className='nav-and-main-weather-container'>
          <Searchbar onSearch={handleSearch}/>
          <MainWeather weatherData={weatherData} />
        </div>
        <div className='today-and-highlights-container'>
          <TodayForecast hourlyForecast={hourlyForecast} weatherData={weatherData} airQualityData={airQualityData}/>
        </div>
      </div>
      
      
    </>
  )
}

export default App
