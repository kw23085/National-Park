import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import clientAuth from './clientAuth'

import Parks from './components/Parks';
import ParksDetails from './components/ParksDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import SignOut from './components/SignOut';
import UserProfile from './components/UserProfile'


class App extends Component {

  state = {
    parks :[],
    currentUser: clientAuth.getCurrentUser()
  }

  onLoginSuccess(user) {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
  }
  
  signOut() {
		clientAuth.logOut()
		this.setState({ currentUser: null })
	}


  render() {
    const { parks, currentUser } = this.state
    return (
      <div className="App">

        {/* Navbar */}
          <Navbar currentUser={currentUser}/>

        {/* Routes */}
        <Switch>
          <Route exact path="/" render={() => {
            return <Redirect to="/home" />
          }} />
          
          <Route path='/home' render={() =>{
            return (<Home/> )
          }}/>

          <Route exact path='/browseparks' render={() => {
            if(!currentUser) {
              return <Redirect to="/signin" />
            } else {
              return (<Parks parks={ parks } />)
            }
          }} />

          <Route path='/browseparks/:id' render={(route) =>{
            console.log(route.match.params.id)
            const parkCode = route.match.params.id
            return (<ParksDetails parkCode={ parkCode }/>)
          }}/>
        
          <Route path='/signin' render= {(props) => {
            return (<Signin {...props} onLoginSuccess={this.onLoginSuccess.bind(this)}/>)
          }}/>

          <Route path='/signup' render={(props) => {
            return (<Signup {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)}/>)
          }}/>

          <Route path='/signout' render={(props) =>{
            return(<SignOut onsignOut= {this.signOut.bind(this)}/>)
          }}/>

          <Route path='/userprofile' render={() => {
            return(<UserProfile currentUser={currentUser}/>)
          }} />
          
        </Switch>
        

      </div>
    );
  }
}

export default App;
