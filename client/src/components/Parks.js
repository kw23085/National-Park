import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Parks extends Component {
    state = {
        filterString : '',
        parks: this.props.parks.data
    }

    updateFilter(){
        this.setState({
            filterString: this.refs.filterinput.value
        })
    }

    render(){
        const { filterString,parks } = this.state
        const parklist = parks.filter((p) => {
            return p.fullName.toLowerCase().includes(filterString.toLowerCase())
          })
        // console.log("Parks props: ", this.props)
        return(
            <div>
                <h1> Hello! National Parks </h1>
                <h1>Hi</h1>
                <h3>
                    <input onChange={this.updateFilter.bind(this)}ref="filterinput" type="text" placeholder="Search a Park"/>
                    <ul>{parklist && 
                        parklist.map((p, i)=>{
                        return p.designation === "National Park" ? 
                            <li key={i}> 
                            <Link to=""> {p.fullName}  </Link>
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