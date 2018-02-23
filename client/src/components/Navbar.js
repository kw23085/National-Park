import React, { Component } from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/browseparks">Browse Parks</NavLink>
                <NavLink to="/signin">Sign in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
      

                </ul>

            </div>
        )
    }
}

export default Navbar


