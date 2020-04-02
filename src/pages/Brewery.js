import React, { useState } from 'react'
import BreweryModal from './BreweryModal';

const Brewery = ({brewery}) => {
  
  return (
    <div>
      <h4>{brewery.name}</h4>
      {/* <BreweryModal brewery={brewery}/> */}
    </div>
  )

}

export default Brewery;
