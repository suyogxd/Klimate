import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainWeather from './components/MainWeather'
import TodayHighlights from './components/TodayHighlights'


function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('London')
  const [airQualityData, setAirQualityData] = useState(null)
  const [fiveDayForecast, setFiveDayForecast] = useState(null)

  useEffect(() => {
    fetchWeatherData(city)
    // fetchAirQualityData(city)
  }, [city])
  
  const fetchAirQualityData = (lat, lon) => {
    const APIKey = import.meta.env.VITE_API_KEY
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?q=${lat}&lon=${lon}&appid=${APIKey}`)
    .then(res => res.json())
    .then(data => {
      setAirQualityData(data.list[0])
      console.log(JSON.stringify(data.list[0]))
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

      const forecastRes = await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`)
      const forecastJson = await forecastRes.json() 
      setFiveDayForecast(forecastJson.list)
      console.log(forecastJson.list)
      // fetchAirQualityData(data.coord.lat, data.coord.lon)
      // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`)
      // .then(res => {
      //   setFiveDayForecast(res.data);
      // })
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
          <Navbar onSearch={handleSearch}/>
          <MainWeather weatherData={weatherData} />
        </div>
        <div className='today-and-highlights-container'>
          <TodayHighlights hourlyForecast={fiveDayForecast} weatherData={weatherData} airQualityData={airQualityData}/>
        </div>
      </div>
      
      
    </>
  )
}

export default App
