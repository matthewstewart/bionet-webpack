import React, { Component } from 'react';
import Router from './router';
import Navbar from './components/navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Router />    
      </div>
    );
  }

}

export default App;