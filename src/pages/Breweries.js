import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Brewery from './Brewery';
import Paginator from './Paginator';
import brewSample from './brewery-example';
import styled from 'styled-components';
import Search from '../components/Search';
import BreweryModal from './BreweryModal';


const BreweryList = styled.div`
  border: 2px solid black;
`;


const Breweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [postsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentPosts, setCurrentPosts] = useState([]);

  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');


  const handleSubmit = (e, query) => {
    e.preventDefault();
    axios.get(`https://www.karinsbeer.com/api/search_breweries?query=${query}&key=khsu0720`)
      .then(success => {
        let res = success.data;
        console.log("REST", res)
        setBreweries(res.entries)
        // setTotalItemsCount(res.total_entries);
        setItemsPerPage(res.per_page);
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  const fetchBreweries = async () => {
    // const fetchedBreweries = await axios.get('https://www.karinsbeer.com/api/all_breweries/?key=khsu0720')
    //   .then(success => {
    //     let res = success.data;
    //     setBreweries(res.entries)
    //     setTotalItemsCount(res.total_entries);
    //     setItemsPerPage(res.per_page);
    //   })
    //   .catch(error => {
      //     console.log("error", error);
      //   })
      setBreweries(brewSample.entries);
    }
    
    useEffect(() => {
      fetchBreweries();
    }, [])
    
    useEffect(() => {
      if (breweries && breweries.length) {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const slicedPosts = breweries.slice(indexOfFirstPost, indexOfLastPost);
        setCurrentPosts(slicedPosts);
      }
    }, [breweries])

const paginate = (pageNum) => setCurrentPage(pageNum);
const prevPage = () => setCurrentPage(currentPage - 1);
const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <div>
      <Search handleSubmit={handleSubmit}/>
      <BreweryList>
        {
          breweries && currentPosts.map((brewery, i) => {
            return <BreweryModal brewery={brewery}>{brewery.name}</BreweryModal>
          })
        }
      </BreweryList>
      {
      breweries && 
        <Paginator 
            postsPerPage={postsPerPage} 
            totalPosts={breweries.length} 
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}/>
      }
    </div>
  )
}

export default Breweries;