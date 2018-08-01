import React, { Component } from 'react';

class Home extends Component {
  render() {
    return( 
      <h1>
        <div>Sleek</div> 
        <div className="with--accent">animated</div>
        <div>views</div>
        <div>for <span className="with--accent">web apps</span></div>
      </h1>
    );
  }
}

export default Home
