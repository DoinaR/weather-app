import './App.css'
import { useState } from 'react'
import axios from 'axios'
import City from './components/City'
import Weather from './components/Weather'

function App() {
  const [weather, updateWeather] = useState()
  const [location, updateLocation] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await axios.get(url)
    updateWeather(response.data)
    console.log(response)
  }

  return (
    <div className='container'>
      <h1> Weather App</h1>
      {weather ? (
        <Weather weather={weather} />
      ) : (
        <City updateLocation={updateLocation} fetchWeather={fetchWeather} />
      )}
    </div>
  )
}

export default App
