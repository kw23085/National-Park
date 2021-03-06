import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Parks extends Component {

    state = {
        filterString: "",
        parks: []
    }

    // moved the api call to here
    componentDidMount = () => {
        //axios like a middle man
        axios({ method: 'get', url: '/api' }) // talking to the backend
            .then((res) => {
                console.log(res.data)
                //array is actually res.data.data
                this.setState({
                    parks: res.data.data
                })
            })
    }
    
    updateFilter(){
        this.setState({
            filterString: this.refs.filterinput.value
        })
    }
    
    render(){
        const { filterString, parks } = this.state
        // creates a parklist if there are parks in array
        let parklist;
            if (parks.length > 0) {
                parklist = parks.filter((p) => {
                    return p.fullName.toLowerCase().includes(filterString.toLowerCase())
                })
            } else {
            return  <div className="loader">
                        <img src={`/images/tree.png`} className="App-logo" alt="logo" />
                        <h3 className="park-details" >Loading...</h3>
                    </div>
            }
        // console.log('parklist: ', parklist)
        return(
            <div>
                <h1 className="park-details"> Hello! National Parks </h1>
                <h3>
                    <input className="search-park-input"onChange={this.updateFilter.bind(this)}ref="filterinput" type="text" placeholder="Search a Park"/>
                    {/* added a !! to parklist */}
                    <ul className="park-list">{!!parklist && 
                        parklist.map((p, i)=>{
                        return p.designation === "National Park" ? 
                            <li key={i} className="park-name"> 
                            <Link to={`/browseparks/${p.parkCode}`}> {p.fullName} | { p.states } </Link>
                                
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