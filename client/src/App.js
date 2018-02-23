import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import ParkList from './components/Parklist'




class App extends Component {
  state = {
    parks :[]
  }

  componentDidMount = () => {
    //axios like a middle man
    axios({method: 'get', url: '/api'}) // talking to the backend
    .then((res) => {
      console.log(res.data)
      this.setState({
        parks: res.data
      })
    })
  }

  render() {
    const { parks } = this.state.parks
    return (
      <div className="App">

        <h1> Hello! National Parks </h1>
        <Route exact path="/" render={() => {
          return <Redirect to="/parks" />
        }} />
      
        <div>
          <Route path='/parks' render={() => {
            return (<ParkList parks={this.state.parks} />)
          }} />
        </div>


      </div>
    );
  }
}

export default App;
