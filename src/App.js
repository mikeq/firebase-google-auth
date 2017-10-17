import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.fb = firebase.initializeApp(config);
  }

  render() {
    console.log(this.fb);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
