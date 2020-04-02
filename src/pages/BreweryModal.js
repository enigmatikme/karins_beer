import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Brewery from './Brewery';
import styled from 'styled-components';

const Clickable = styled.div`
  display: flex;
  flex-direction: row;

  & img {
    height: 100px;
    width: 100px;
  }
`;

const BreweryModal = ({brewery}) => {
  const imgsrc = brewery.labels ? (brewery.labels.medium ? brewery.labels.medium : '') : '';
console.log(imgsrc);
  return (
  <Modal trigger={
    <Clickable> 
      <img class="fit-picture"
        src="https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-icon.png"
        alt="Grapefruit slice atop a pile of other slices" />
      <h4 className="click_beer">{brewery.name}</h4>
    </Clickable>
    }>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src={`${beer.labels.medium}`} /> */}
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>{brewery.name}</Header>
        <a href={brewery.website} rel="noopener noreferrer" target="_blank">{brewery.website? "Website" : null}</a>
        <div>{brewery.established}</div>
        <div>{brewery.description}</div>
        {/* <div>Available: {brewery.available.name}</div> */}
        {/* <div>style descript: {brewery.style.description}</div> */}
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )
      }

export default BreweryModal;
