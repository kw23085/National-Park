import React, { Component } from 'react'


class Home extends Component {
    render(){
        return(
            <div className="heroImg"> 
                <img style={{width:'100%', height:'auto'}} alt="" src={`/images/death-valley.jpg`}/>   
                <div className="centerText">Pocket Park</div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Home