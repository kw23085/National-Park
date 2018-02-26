import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Parks from './components/Parks';
import ParksDetails from './components/ParksDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup'


class App extends Component {

  state = {
    parks :[]
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
            return (<Parks parks={ parks } />)
          }} />

          <Route path='/browseparks/:id' render={() =>{
            const parkId = parks.data.data.params.id
            const park = parks.find((p) => {
             return p.id === parkId
            })
            return (<ParksDetails park={ park }/>)
          }}/>
        
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
