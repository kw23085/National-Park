import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Redirect, Route, NavLink } from 'react-router-dom';
import ParkList from './components/Parklist';
import Navbar from './components/Navbar'




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

        {/* Navbar */}
          <Navbar />

        {/* Routes */}
        
          <Route exact path="/" render={() => {
            return <Redirect to="/parks" />
          }} />
          
          <Route path='/parks' render={() => {
            return (<ParkList parks={this.state.parks} />)
          }} />
        

        

      </div>
    );
  }
}

export default App;
