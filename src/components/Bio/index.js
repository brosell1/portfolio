import React, { Component } from 'react';

import "./style.css";

import GridItemGradient from "../GridItemGradient";

class Bio extends Component {
  render() {
    return(
      <div className="bio gridItem" >
        <h2>Hi, I'm Ben!</h2>
        <span>I'm a junior JavaScript developer and recent alumnus of the <a href="http://schoolofcode.co.uk/" rel="noopener noreferrer" target="_blank">School of Code</a> bootcamp. I love finding creative solutions to problems and making fun, memorable user experiences.</span><br />
        <span>I am proficient in HTML, CSS, and JavaScript, including React.js, Node.js, and MongoDB. I'm great when working in a team or pair programming, and I'm very familiar with Agile project management methodology.</span><br />
        <span>My interests include wrestling, cosplay, and eating overpriced food. <a href="https://github.com/brosell1/CV" rel="noopener noreferrer" target="_blank">Check out my Github!</a></span>
        <GridItemGradient />
      </div>
    )
  }
}

export default Bio;
