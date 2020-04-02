import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react';
import Beer from './Beer';

const serializer = () => {

}
const BeerModal = ({beer}) => (
  <Modal trigger={<div>bleh</div>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src={`${beer.labels.medium}`} /> */}
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>{beer.name}
        <h4>brewery</h4>
        
        </Header>
        <div>{beer.description}</div>
        <div>ABV:{beer.abv}</div>
        <div>IBU:{beer.ibu}</div>
        <div>isOrganic: {beer.is_organic}</div>
        <div>Pair with: {beer.food_pairings}</div>
        {/* <div>Available: {beer.available.name}</div> */}
        {/* <div>style descript: {beer.style.description}</div> */}

        
        {/* <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p> */}
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
)

export default BeerModal;
