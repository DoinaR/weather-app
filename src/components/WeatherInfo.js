import React from 'react'

const WeatherInfo = ({ name, value }) => {
  const WeatherInfoIcons = {
    sunrise: '/icons/sunrise.svg',
    sunset: '/icons/sunrise.svg',
    humidity: '/icons/humidity.svg',
    wind: '/icons/wind.svg',
    pressure: '/icons/pressure.svg',
  }

  return (
    <div>
      <span style={{ textTransform: 'capitalize' }}>{name}</span>
      <img src={WeatherInfoIcons[name]} alt='' className='weather-icons' />
      <p style={{ fontWeight: 700, fontSize: '1.3rem' }}>{value}</p>

      {name === 'humidity' && <span>%</span>}
      {name === 'wind' && <span>km/h</span>}
      {name === 'pressure' && <span>hPa</span>}
      <br />
      {/* {humidity ? {value} %} */}
      {/* <span>{name}</span> */}
    </div>
  )
}

export default WeatherInfo
