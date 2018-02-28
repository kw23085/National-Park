import React, { Component } from 'react';
import clientAuth from '../clientAuth'
import { Link } from 'react-router-dom'

class Signin extends Component{

    state = {
		fields: { email: '', password: ''}
	}
    onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

    onUserSignupForm(evt){
        evt.preventDefault()
        console.log('clicked')
        clientAuth.logIn(this.state.fields).then(user => {
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/browseparks')
			} else {
                this.setState({ fields: { name: '', email: '', password: '' } })
            }
		})
    }

    render(){
        const { email, password } = this.state.fields
        return(
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.onUserSignupForm.bind(this)} onChange={this.onInputChange.bind(this)}>

                    <div>
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email" value={email}/>
                    </div>

                    <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" value={password}/>
                    </div>
                    <button>Sign In</button>
                    <h4>-or-</h4>
                    <Link to="/signup">Sign Up</Link>
                </form>


            </div>
        )
    }
}

export default Signin