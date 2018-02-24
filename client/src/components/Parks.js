import React, { Component } from 'react'

class Parks extends Component {


    render(){
        return(
            <div>
                <h1> Hello! National Parks </h1>
                <h1>Hi</h1>
                <h3>
                    <ul>{this.props.parks.data && this.props.parks.data.map((p, i)=>{
                        return p.designation === "National Park" ? 
                            <li key={i}> {p.fullName} 
                                {/* <p>{p.description}</p> */}
                            </li>
                            : null
                        })}
                    </ul>
                
                </h3>
            </div>  
        )
    }
}

export default Parks