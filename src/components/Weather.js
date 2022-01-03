import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

const Weather = (props) => {

  const api_key = process.env.REACT_APP_API_KEY

  const {country} = props

  const [weather, setWeather] = useState([])

  useEffect(() => {
    let isMounted = true
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=imperial&appid=${api_key}`)
      .then(response => {
        isMounted && setWeather(response.data)
        console.log(response.data);
      })
      return () => {isMounted = false}
  }, [country, api_key])

  return (
    <div>
      <h3>Current Weather</h3>
      <li>Temperature: {weather.main.temp}</li>
      <li>Conditions: {weather.weather[0].description}</li>
      <li>Wind Speed: {weather.wind.speed} mph</li>
    </div>
  )
}

export default Weather
