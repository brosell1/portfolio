import React, { Component } from 'react';

import "./style.css";

import GridItemGradient from "../GridItemGradient";

class ContactLinks extends Component {
  render() {
    return(
      <div className="contactLinks gridItem">
          <a className="fa fa-twitter contactLinkButton" rel="noopener noreferrer" target="_blank" href="http://www.twitter.com/socbrosell"><span>@socbrosell</span></a>
          <a className="fa fa-linkedin contactLinkButton" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/brosell/" ><span>/brosell</span></a>
          <a className="fa fa-github contactLinkButton" rel="noopener noreferrer" target="_blank" href="https://github.com/brosell1/CV" ><span>/brosell1</span></a>
          <GridItemGradient />
      </div>
    )
  }
}

export default ContactLinks
