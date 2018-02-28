import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
	return (
		<div>
            <NavLink to="/">Home</NavLink>
			{props.currentUser
				? (
					<span>
                    <NavLink to="/browseparks">Browse Parks</NavLink>
                    <NavLink to="/signout">Sign Out</NavLink>
                    <span> hi!    {props.currentUser.name}</span>
					</span>
                    
				)
				: (
					<span>
						 <NavLink to="/signin">Sign In</NavLink>
                         <NavLink to="/signup">Sign Up</NavLink>
					</span>
				)
			}
		</div>
	)
}

export default Navbar


