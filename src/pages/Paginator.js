import React, { useState } from 'react'
import styled from 'styled-components';

const Paginator = ({currentPage, postsPerPage, totalPosts, paginate, prevPage, nextPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#" onClick={() => prevPage()}>Previous</a></li>
      {
        pageNumbers.map((num, i) => {
          return <li className="page-item" key={i}><a className="page-link" href="#" onClick={() => paginate(num)}>{num}</a></li>

        })
      }
      <li className="page-item"><a className="page-link" href="#" onClick={() => nextPage()}>Next</a></li>
    </ul>
  </nav> 
  )
}

export default Paginator;