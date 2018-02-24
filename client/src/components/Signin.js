import React, { Component } from 'react'
class Signin extends Component{

    render(){
        return(
            <div>
                <h1>Sign in!</h1>
                    <form>
                        <div>
                        <label>Email:</label>
                        <input type="text" ref="email" placeholder="Email"/>
                        </div>
                        <div>
                        <label>Password:</label>
                        <input type="text" ref="password" placeholder="Password"/>
                        <button type="button" className="btn btn-info" >Sign in</button>
                        </div>
                    </form>



            </div>
        )
    }
}

export default Signin