import React from 'react'
import Searchbar from './Search-bar'

const City = ({ updateLocation, fetchWeather }) => {
  return (
    <div className='city'>
      <h3>Find Weather for your city</h3>
      <Searchbar updateLocation={updateLocation} fetchWeather={fetchWeather} />
    </div>
  )
}

export default City
