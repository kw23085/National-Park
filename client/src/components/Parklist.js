import React, { Component } from 'react'


class Parks extends Component {


    render(){
        return(
            <div>
                <h1> Hello! National Parks </h1>
                <h1>Hi</h1>
                <ul>{this.props.parks.data && this.props.parks.data.map((p, i)=>{
                    return <li key={i}> {p.name} </li>
                })}</ul>
            </div>  
        )
    }
}

export default Parks