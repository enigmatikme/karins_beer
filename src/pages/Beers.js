import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { render } from '@testing-library/react';
import Beer from './Beer';
import Paginator from './Paginator';
import exampleData from './example-data'; 
// import 'exmaple'
const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  const [loading, setLoading] = useState(false);


  const fetchBeers =  () => {
    // const fetchedBeers =  axios.get(jsonroute)
    // const fetchedBeers = await axios.get('https://www.karinsbeer.com/api/all_beers/?key=khsu0720')
      // .then(success => {
      //   let res = success.data;
      //   setBeers(res.entries);
      //   setTotalItemsCount(res.total_entries);
      //   setpostsPerPage(res.per_page);
      //   console.log("SUCCESS", success)
      // })
      // .catch(error => {
      //   console.log("Error", error);
      // })

      setBeers(exampleData.entries);
      
    
  }

  useEffect(() => {
    fetchBeers();
    
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = beers.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);
 
    return (
      <div>
        { beers &&
          currentPosts.map((beer, i) => {
            return <Beer key={i} beer={beer} />
          })
        }
        <Paginator 
          currentPage={currentPage} 
          postsPerPage={postsPerPage} 
          totalPosts={beers.length} 
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}/>
      </div>
    )

}

export default Beers;