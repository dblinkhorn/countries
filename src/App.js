import axios from "axios";
import React from "react";
import {useState, useEffect} from "react"
import Filter from "./components/Filter"
import Country from "./components/Country"

function App() {

  // controls state of countries data and input filter value
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // get list of countries from API
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])

  // countries that include filter value in their names
  const filteredCountries = countries.filter(country => {
    if (country.name.common
          .toLowerCase()
          .includes(filter)) {
      return country
    } return null
  })

  const singleResult = filteredCountries.length === 1 ? true : false

  return (
    <div className="App">
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      { // if filtered countries exceeds 10
        filter !== '' && filteredCountries.length >= 10 ?
        // tell user to refine search
        <div>Too many matches. Please narrow search.</div> :
        // otherwise display them
        filter !== '' && filteredCountries.map(country => 
          <Country
            key={Math.random()}
            country={country}
            singleResult={singleResult}
          />
        )}
    </div>
  );
}

export default App;
