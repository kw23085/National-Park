import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SignOut extends Component {
    componentDidMount() {
		this.props.onsignOut()
	}

    render(){
        return <Redirect to="/home" />
    }

}

export default SignOut