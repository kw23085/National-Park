// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// class Parks extends Component {
//     state = {
//         filterString : '',
//         parks: this.props.parks.data
//     }

//     updateFilter(){
//         this.setState({
//             filterString: this.refs.filterinput.value
//         })
//     }

//     render(){
//         const { filterString,parks } = this.state
//         const parklist = parks.filter((p) => {
//             return p.fullName.toLowerCase().includes(filterString.toLowerCase())
//           })
//         // console.log("Parks props: ", this.props)
//         return(
//             <div>
//                 <h1> Hello! National Parks </h1>
//                 <h1>Hi</h1>
//                 <h3>
//                     <input onChange={this.updateFilter.bind(this)}ref="filterinput" type="text" placeholder="Search a Park"/>
//                     <ul>{parklist && 
//                         parklist.map((p, i)=>{
//                         return p.designation === "National Park" ? 
//                             <li key={i}> 
//                             <Link to=""> {p.fullName}  </Link>
                            
//                                 {/* <p>{p.description}</p> */}
//                             </li>
//                             : null
//                         })}
//                     </ul>
                
//                 </h3>
                
//             </div>  
//         )
//     }
// }

// export default Parks

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// James: Obviously need axios
import axios from 'axios';
class Parks extends Component {
    // I like to use constructor function but its up to you...
    constructor(props) {
        super(props)
        this.state = {
            filterString: '',
            parks: []
        }
    }
    // James: I moved the api call to here
    componentDidMount = () => {
        //axios like a middle man
        axios({ method: 'get', url: '/api' }) // talking to the backend
            .then((res) => {
                console.log(res.data)
                // James: the array is actually res.data.data
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
        // James: basically it only creates a parklist if there are parks in array
        let parklist;
        if (parks.length > 0) {
            parklist = parks.filter((p) => {
                return p.fullName.toLowerCase().includes(filterString.toLowerCase())
            })
        }
        // console.log('parklist: ', parklist)
        return(
            <div>
                <h1> Hello! National Parks </h1>
                <h1>Hi</h1>
                <h3>
                    <input onChange={this.updateFilter.bind(this)}ref="filterinput" type="text" placeholder="Search a Park"/>
                    {/* I added a !! to parklist */}
                    <ul>{!!parklist && 
                        parklist.map((p, i)=>{
                        return p.designation === "National Park" ? 
                            <li key={i}> 
                            <Link to={`/browseparks/${p._id}`}> {p.fullName}  </Link>
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