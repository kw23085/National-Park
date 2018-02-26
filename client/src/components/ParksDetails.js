import React, { Component } from 'react';

class ParksDetails extends Component {
    render() {
        const { park } = this.props

        return(
            <div>
            <h1>{park.states}</h1>
            
            </div>
        )
    }
}

export default ParksDetails
