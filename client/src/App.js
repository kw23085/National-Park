import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router-dom';
import Parks from './components/Parks';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup'

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
        <Switch>
          <Route exact path="/" render={() => {
            return <Redirect to="/home" />
          }} />
          
          <Route path='/home' render={() =>{
            return (<Home/> )
          }}/>

          <Route path='/browseparks' render={() => {
            return (<Parks parks={this.state.parks} />)
          }} />
        
          <Route path='/signin' render= {() => {
            return (<Signin />)
          }}/>

          <Route path='/signup' render={() => {
            return (<Signup/>)
          }}/>
          
        </Switch>
        

      </div>
    );
  }
}

export default App;
