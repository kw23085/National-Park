import React, {Component} from 'react';

class ParksDetails extends Component {
    render() {
        const { park } = this.props

        return(
            <div>{park.name}</div>
        )
    }
}

export default ParksDetails