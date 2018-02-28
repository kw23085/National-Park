import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
	return (
		<div>
            <div>
            <NavLink to="/">Home</NavLink>
			{props.currentUser
				? (
					<span>
                    <NavLink to="/browseparks">Browse Parks</NavLink>
                    <span> hi!    {props.currentUser.name}</span>
                    <NavLink to="/signout">Sign Out</NavLink>
                    
					</span >
                    
				)
				: (
					<span>
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


