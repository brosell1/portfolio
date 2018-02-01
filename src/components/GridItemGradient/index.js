import React, { Component } from 'react';

import "./style.css";

class GridItemGradient extends Component {
  render() {
    return(
      <div>
        <div className="texture gradientPos" />
        <div className="gradient gradientPos" />
      </div>
    )
  }
};

export default GridItemGradient;
