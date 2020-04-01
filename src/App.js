import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Flash from './components/Flash';

import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Beers from './pages/Beers';

class App extends Component {
  render() {
    return (
      <Segment>
        <Navbar />
        <Flash />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/' component={Beers} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

export default App;