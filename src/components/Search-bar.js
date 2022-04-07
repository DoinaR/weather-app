import React from 'react'

const Searchbar = ({ updateLocation, fetchWeather }) => {
  return (
    <form onSubmit={fetchWeather}>
      <div className='search-container'>
        <input
          type='text'
          onChange={(e) => updateLocation(e.target.value)}
          placeholder='Enter location '
        />
        <button type='submit'>Search</button>
      </div>
    </form>
  )
}

export default Searchbar
