import React from 'react'
import Weather from './Weather'

const Details = (props) => {

  const {country} = props

  return (
    <div>
      <h2>{country.name.common}</h2>
      <li>
        <img
          src={country.flags.svg}
          height={200}
          alt={`${country.name.common} flag`}
        />
      </li>
      <p>
        <li>Captial City: {country.capital}</li>
        <li>Population: {country.population}</li>
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language => {
          return <li key={Math.random()}>{language}</li>
        })}
      </ul>
      <div>
        weather: <Weather country={country} />
      </div>
    </div>
  )
}

export default Details
