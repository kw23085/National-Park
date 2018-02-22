import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';




class App extends Component {
  state = {
    parks :[]
  }
  componentDidMount = () => {
    axios({method: 'get', url: '/api'})
    .then((res) => {
      this.setState({
        parks: res.data
      })
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="App-title"></h1>
      </div>
    );
  }
}

export default App;
