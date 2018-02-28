import React, { Component } from 'react'
class Signin extends Component{

    onUserSignIn(evt){
        evt.preventDefault()
        console.log('Sign in!')

    }

    render(){
        return(
            <div>
                <h1>Sign in!</h1>
                    <form onSubmit={this.onUserSignIn.bind(this)}>
                        <div>
                        <label>Email:</label>
                        <input type="text" ref="email" placeholder="Email"/>
                        </div>
                        <div>
                        <label>Password:</label>
                        <input type="password" ref="password" placeholder="Password"/>
                        <button>Sign in</button>
                        </div>
                    </form>



            </div>
        )
    }
}

export default Signin