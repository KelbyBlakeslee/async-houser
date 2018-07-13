import React, { Component } from 'react';
import './App.css';
import Routes from './routes/Routes';
import Nav from './Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Nav /></div>
        {Routes}
      </div>
    );
  }
}

export default App;
