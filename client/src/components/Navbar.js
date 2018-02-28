import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/browseparks">Browse Parks</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/signout">Sign Out</NavLink>
      

                </ul>

            </div>
        )
    }
}

export default Navbar


