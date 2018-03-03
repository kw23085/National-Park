import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
	return (
		<div>
            <div style={{margin: '30px'}}>

				<NavLink to="/">Home</NavLink>
				{props.currentUser
					? (
					<span className="navbar-span">
                    	<NavLink to="/browseparks">Browse Parks</NavLink>
						<span className="navbar-span"> 
							<Link to="/users/:id ">Hi!    {props.currentUser.name}</Link>
						</span>
						<NavLink to="/signout">Sign Out</NavLink>
                    
					</span >
                    
					)
					: (
					<span className="navbar-span">
						 <NavLink to="/signin">Sign In</NavLink>
					<span className="navbar-span">	 
                         <NavLink to="/signup">Sign Up</NavLink>
					</span>	 
					</span>
					)
            	}
            </div>
			<hr/>
		</div>
	)
}

export default Navbar


