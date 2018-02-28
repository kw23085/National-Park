import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
	return (
		<div>
            <div style={{margin: '30px'}}>
            <NavLink to="/">Home</NavLink>
			{props.currentUser
				? (
					<span style={{margin: '30px'}}>
                    <NavLink to="/browseparks">Browse Parks</NavLink>
                    <span style={{margin: '30px'}}> Hi!    {props.currentUser.name}</span>
                    <NavLink to="/signout">Sign Out</NavLink>
                    
					</span >
                    
				)
				: (
					<span style={{margin: '30px'}}>
						 <NavLink to="/signin">Sign In</NavLink>
                         <NavLink to="/signup">Sign Up</NavLink>
					</span>
				)
            }
            </div>
		</div>
	)
}

export default Navbar


