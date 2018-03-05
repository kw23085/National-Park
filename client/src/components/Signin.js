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
            <div className="panel-signin-signup">
                <h1 className="SignIn">Sign In</h1>
                    <form onSubmit={this.onUserSignupForm.bind(this)} onChange={this.onInputChange.bind(this)}>
                        <div className="input-field">
                            <label>Email:</label><br />
                            <input type="text" name="email" placeholder="Email" value={email}/>
                        </div>

                        <div className="input-field">
                            <label>Password:</label><br />
                            <input type="password" name="password" placeholder="Password" value={password}/>
                        </div>
                        <button className="btn-signin-signup-save">Sign In</button>
                        <div className="line">
                            <div className="line-label">or</div>
                        </div>
                            <Link to="/signup">Sign Up</Link>
                    </form>


            </div>
        )
    }
}

export default Signin