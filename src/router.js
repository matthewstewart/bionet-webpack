import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './routes/search';

class Router extends Component {
  render() {
    const searchPage = () => {
      return ( <Search {...this.props} /> );
    };
    return (
      <main>
        <Switch>
          <Route exact path='/' render={searchPage} />
        </Switch>
      </main>
    );
  }
}

export default Router;