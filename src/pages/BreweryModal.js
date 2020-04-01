import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const BreweryModal = ({brewery}) => (
  <Modal trigger={<Button>Show Modal</Button>}>
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

        
        {/* <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p> */}
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
)

export default BreweryModal;
