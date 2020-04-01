import React, { useState } from 'react'
import axios from 'axios';
import Brewery from './Brewery';

const Breweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBreweries = async () => {
    const fetchedBreweries = await axios.get('https://www.karinsbeer.com/api/all_breweries/?key=khsu0720')
      .then(success => {
        let res = success.data;
        setBreweries(res.entries)
        setTotalItemsCount(res.total_entries);
        setItemsPerPage(res.per_page);
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  fetchBreweries();

  return (
    <div>
      {
        breweries && breweries.map((brewery, i) => {
          return <Brewery key={i} brewery={brewery} />
        })
      }

    </div>
  )
}

export default Breweries;