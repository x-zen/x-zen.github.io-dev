import React, { Component } from 'react';
import './App.css';
import Navigation from './comp/Navigation/Navigation.js';
import Home from './comp/Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div class='container'>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
