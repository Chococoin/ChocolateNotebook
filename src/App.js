// TO DO Componentss:
  // Nav bar
  // Footer
  // Login / signup

import React, { Component } from 'react';
import './App.css';
import Journal from './Journal/Journal';
import Subscription from './Subscription/Subscription';
import Subscribe from './Subscription/Subscribe';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        Home Chocobook Catalog Choco Box Login
        </header>
        <Journal />
      </div>
    );
  }
}


export default App;
