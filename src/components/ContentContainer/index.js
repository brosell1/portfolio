import React, { Component } from 'react';

import Content from "../Content";

import "./style.css";

class ContentContainer extends Component {
  render() {
    return(
      <div className="contentContainer">
        <Content />
      </div>
    )
  }
}

export default ContentContainer
