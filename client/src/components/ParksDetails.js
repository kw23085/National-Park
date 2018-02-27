import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class ParksDetails extends Component {
    state ={ 
        park: null,
        comment:[],
        yourComment: []
    }

    componentDidMount = () => {
       axios({ method: 'get', url: `/api/${this.props.parkCode}` }) // to backend get the specific np 
            .then((res) => {
                console.log(res)
                this.setState({
                    park: res.data.data[0] //only one arry we are getting
                })
            })
    }

    addComment (evt) {
        evt.preventDefault()
        console.log('adding comment')
        this.setState({
            yourComment: [this.refs.comment.value, ...this.state.yourComment]
        })
        this.refs.comment.value = ""
        this.refs.comment.focus()
    }

    render() {
        
        if(!this.state.park) return <h1>Loading...</h1>
        
        return(
            <div>
            <h1>{this.state.park.fullName} | {this.state.park.states}</h1>
            <h4>-Description-</h4>
            <h4>{this.state.park.description}</h4>

            <img alt={this.state.park.name} src={`/images/${this.state.park.parkCode}.jpg`}/>

            <form onSubmit={this.addComment.bind(this)}>
            <input ref="comment" type="text" placeholder="add your comment"/>
            <button>Add your comment</button>
            </form>
            <h2>{this.state.yourComment.map((c, i) =>{
                return <div key={i}>{c}</div>
            })}</h2>
            </div>
        )
    }
}

export default ParksDetails
