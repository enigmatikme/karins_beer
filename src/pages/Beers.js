import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { render } from '@testing-library/react';
import Beer from './Beer';
import Paginator from './Paginator';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBeers = async () => {
    const fetchedBeers = await axios.get('https://www.karinsbeer.com/api/all_beers?page=1&per_page=15&key=khsu0720')
      .then(success => {
        let res = success.data;
        setBeers(res.entries);
        setTotalItemsCount(res.total_entries);
        setItemsPerPage(res.per_page);
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
        <Paginator />
      </div>
    )

}

export default Beers;