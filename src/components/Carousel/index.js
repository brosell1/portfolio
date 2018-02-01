import React, { Component } from 'react';

import "./style.css";

import GridItemGradient from "../GridItemGradient";

class Carousel extends Component {
  render() {
    return(
      <div className="carousel gridItem" >
        <div>
        Carousel
        </div>
        <GridItemGradient />
      </div>
    )
  }
}

export default Carousel;
