import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './routes/landing';

class Router extends Component {
  render() {
    const landingPage = () => {
      return ( <Landing {...this.props} /> );
    };
    return (
      <main>
        <Switch>
          <Route exact path='/' render={landingPage} />
        </Switch>
      </main>
    );
  }
}

export default Router;