import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { render } from '@testing-library/react';
import Beer from './Beer';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const fetchedBeers = await axios.get('https://www.karinsbeer.com/api/all_beers?page=1&per_page=15&key=khsu0720')
      .then(success => {
        setBeers(success.data.entries);
      })
      .catch(error => {
        console.log("Error", error);
      })
    
  }
  fetchBeers();
    return (
      <div>
        {/* <button onClick={fetchBeers}>Show Beers</button> */}
        { beers &&
          beers.map((beer, i) => {
            return <Beer key={i} beer={beer} />
          })
        }
      </div>
    )

}

export default Beers;