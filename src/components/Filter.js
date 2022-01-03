import React from 'react'

const Filter = (props) => {

  // destructure props
  const {filter, setFilter} = props

  // updates filter state
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <form>
        Search countries:
        <input
          value={filter}
          // when value changes, updates state of filter
          onChange={handleFilterChange}/>
      </form>
    </div>
  )
}

export default Filter
