import React, { Component } from 'react'


class Home extends Component {
    render(){
        return(
            <div className="wrapper"> 
                <img className="hero-img" alt="heroimage" src={`/images/hero1.jpeg`}/>   
                <div className="centerText">
                    <div className="hero-small-text">The</div>
                    <div className="hero-large-text">World</div>
                    <div className="hero-small-text">Is</div>
                    <div className="hero-large-text">Yours</div>
                    <div className="hero-small-text">To</div>
                    <div className="hero-large-text">Explore</div>
                </div>
                <div className="credit">Special Thanks to <a href="https://www.nps.gov/index.htm" target="_blank">National Park Service</a><img className="nps-logo" alt="" src={`/images/nps-logo.png`} /></div>
            </div>
        )
    }
}

export default Home