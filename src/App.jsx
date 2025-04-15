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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lat}&lon=${lon}&appid=${APIKey}`)
    .then(res => {
      setAirQualityData(res.data.list[0])
      console.log(JSON.stringify(res.data.list[0]))
    })
    .catch(err => console.log('Error fetching Air Quality Data', err))
  }

  const fetchWeatherData = () => {
    const APIKey = import.meta.env.VITE_API_KEY
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(res => res.json())
    .then(data => {
      setWeatherData(data)
      console.log(JSON.stringify(data))
      fetchAirQualityData(data.coord.lat, data.coord.lon)
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`)
    })
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
          <TodayHighlights />
        </div>
      </div>
      
      
    </>
  )
}

export default App
