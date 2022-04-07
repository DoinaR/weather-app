import React from 'react'
import WeatherInfo from './WeatherInfo'

const WeatherIcons = {
  '01d': '/icons/sunny.svg',
  '01n': '/icons/night.svg',
  '02d': '/icons/day.svg',
  '02n': '/icons/cloudy-night.svg',
  '03d': '/icons/cloudy.svg',
  '03n': '/icons/cloudy.svg',
  '04d': '/icons/perfect-day.svg',
  '04n': '/icons/cloudy-night.svg',
  '09d': '/icons/rain.svg',
  '09n': '/icons/rain-night.svg',
  '10d': '/icons/rain.svg',
  '10n': '/icons/rain-night.svg',
  '11d': '/icons/storm.svg',
  '11n': '/icons/storm.svg',
}

const Weather = ({ name, value, weather }) => {
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`
  }
  return (
    <>
      <div className='weather-condition'>
        <div className='temp'>
          <p className='feels'>
            {' '}
            RealFeel {weather?.main?.feels_like.toFixed()} °C{' '}
          </p>
          <h2>
            {weather?.main?.temp.toFixed()} °C |
            <span>{`${weather?.weather[0].description}`}</span>
          </h2>
          <img src={WeatherIcons[weather?.weather[0].icon]} alt='' />
        </div>

        <p className='city'>{`${weather.name}, ${weather.sys.country}`}</p>
      </div>
      <div className='weather-info'>
        <WeatherInfo
          name={isDay ? 'sunset' : 'sunrise'}
          value={`${getTime(weather?.sys[isDay ? 'sunset' : 'sunrise'])}`}
        />
        <WeatherInfo name='humidity' value={weather?.main?.humidity} />
        <WeatherInfo
          name='wind'
          value={weather?.wind?.speed * (1.60934).toFixed()}
        />
        <WeatherInfo name='pressure' value={weather?.main?.pressure} />
      </div>
    </>
  )
}

export default Weather
