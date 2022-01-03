import React from 'react'
import Details from './Details'
import {useState} from 'react'

const Country = (props) => {

  const {country, singleResult} = props
  const [showDetails, setShowDetails] = useState(false)

  // updates showDetails state
  const handleShowDetails = () => {
    setShowDetails(true)
  }

  return (
    <div>
      { // if singleResult or showDetails are true
        singleResult || showDetails ?
          // display the details of the country 
          <Details country={country} /> :
          // otherwise only show the list of matching countries & details buttons
          <li>
            {country.name.common}
            {/* if clicked, shows country details by setting state of showDetails to true */}
            <button onClick={handleShowDetails}>Show Details</button>
          </li>
      }
    </div>
  )
}

export default Country
