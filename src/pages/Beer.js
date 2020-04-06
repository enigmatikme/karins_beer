import React, { useState } from 'react'
import styled from 'styled-components';
import BeerModal from './BeerModal';

const Container = styled.div`
  border: 2px solid black;
  width: 250px;
  height: 100px;
`;

const Beer = ({beer}) => {
  const [showModal, toggleModal] = useState(false);

  return (
    <div onClick={() => toggleModal(!showModal)}>
      <Container className="container">
        {/* <img alt={`picture of ${beer.name}`} src={`${beer.labels.medium}`}> img here</img> */}
        <div className="beer_info">
          <div>{beer.name}</div>
          <div>brewery</div>
          <div>{ beer.style && beer.style.name && beer.style.name} | 
            <span>{beer.abv}</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Beer;