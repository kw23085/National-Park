import React, { Component } from 'react';

class Signup extends Component{
    render(){
        return(
            <div>
                <h1>Sign UP</h1>
                <form>
                    <div>
                    <label>Name:</label>
                    <input type="text" ref="name" placeholder="Name"/>
                    </div>

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

export default Signup