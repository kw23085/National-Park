import React, { Component } from 'react';
import axios from 'axios';
import clientAuth from '../clientAuth.js';

class ParksDetails extends Component {
    state = { 
        park: null,
        parkComments: []
    }

    componentDidMount = () => {
       axios({ method: 'get', url: `/api/${this.props.parkCode}` }) // to backend get the specific np 
            .then((res) => {
                console.log(res)
                this.setState({
                    park: res.data.data[0], //only one arry we are getting
                    parkComments: res.data.parkComments //get parkComment 
                
                })
            })
    }

    addComment (evt) {
        evt.preventDefault()
        console.log('adding comment')
        const fields = {
            body: this.refs.comment.value
        }
        
        clientAuth.createComment(fields, this.props.parkCode).then(res => {
            if(res.data.success) {
                console.log(res.data)
                this.setState({
                    parkComments: [res.data.parkComment, ...this.state.parkComments]
                })
                this.refs.comment.value = ""
            }
        })
    }

    render() {
        
        if(!this.state.park) 
        return <h1 className="park-details" >Loading...
                    <img src={`/images/tree.png`} className="App-logo" alt="logo" />
                </h1>
        return(
            <div>
            <h1 className="park-details">{this.state.park.fullName} | {this.state.park.states}</h1>
            <h3 className="park-details">-Description-</h3>
            <br/>
            <h4 className="park-details-sub">{this.state.park.description}</h4>
            <a href={this.state.park.url}>Visit {this.state.park.fullName}</a>
            <br/>
            <br/>

            <img style={{width:'100%', height:'auto'}} alt={this.state.park.name} src={`/images/${this.state.park.parkCode}.jpg`}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={this.addComment.bind(this)}>
            <input ref="comment" type="text" placeholder="add your comment"/>
            <button>Add your comment</button>
            </form>
            
            <h3 className="park-details-comment">{this.state.parkComments.map((c, i) =>{
                return <div key={i}>{c.body} <h4>-{c.by.name} </h4><hr/></div>
            })}</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            
            </div>
        )
    }
}

export default ParksDetails
