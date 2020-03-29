import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <Segment basic>
    <Segment basic textAlign='center'>
      <Header as='h1'>Karin's Beer - React Assessment</Header>
    </Segment>
    <Header as='h1' textAlign='center'>
      Page Not Found
      <Link to='/'> - Go Home</Link>
    </Header>
  </Segment>
);

export default NoMatch;