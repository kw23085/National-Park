import React, { Component } from 'react';
import axios from 'axios';

class ParksDetails extends Component {
    state ={ park: [] }
    componentDidMount = () => {

        axios({ method: 'get', url: `/api/${this.props.parkCode}` }) // talking to the backend
            .then((res) => {
                console.log(res)
                //array is actually res.data.data
                this.setState({
                    park: res.data.data[0]
                })
            })
    }
    render() {

        return(
            <div>
            <h1>{this.state.park.name}</h1>
            
            </div>
        )
    }
}

export default ParksDetails
